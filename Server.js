import express from "express";
import Replicate from "replicate";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
// console.log("Token:", process.env.REPLICATE_API_TOKEN);

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());

app.post("/restore-image", async (req, res) => {
  const { imageUrl, model, ScaleValue } = req.body;
  //use this for debugging
  // console.log(imageUrl);
  // console.log(model);
  // console.log(ScaleValue);

  try {
    const output = await replicate.run(
      "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
      {
        input: {
          img: imageUrl,
          model: model,
          ScaleValue: ScaleValue,
        },
      }
    );

    // You can manipulate the output as needed and send it back
    res.json({ restoredImage: output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
