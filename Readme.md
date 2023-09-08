# Express Replicate API

This is a simple Express.js API that provides an endpoint for restoring images using the Replicate library. Replicate is used to run a specified model for image restoration. This README file will guide you through the setup and usage of this API.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [License](#license)

## Prerequisites

Before you can use this API, make sure you have the following prerequisites installed on your system:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Replicate API Token (You will need to obtain this from Replicate)

## Installation

1. Clone this repository to your local machine or download the source code.

```bash
# git clone https://github.com/your-username/express-replicate-api.git
# cd express-replicate-api
```

2. Install the project dependencies using npm:

```bash
npm install
```

## Configuration

To configure the API, you need to set up environment variables. Create a `.env` file in the project's root directory and add the following variables:

```dotenv
PORT=5000 # The port on which the server will run
REPLICATE_API_TOKEN=your_replicate_api_token # Your Replicate API Token
```

Make sure to replace `your_replicate_api_token` with your actual Replicate API Token.

## Usage

To start the Express API server, run the following command:

```bash
npm start
```

The server will start on the port specified in the `.env` file (default is 5000).

## Endpoints

### POST /restore-image

This endpoint is used to restore an image using the Replicate library. You can send a JSON payload to this endpoint with the following parameters:

- `imageUrl`: The URL of the image you want to restore.
- `model`: The Replicate model you want to use for restoration.
- `ScaleValue`: The scale value for the restoration process.

Example request body:

```json
{
  "imageUrl": "https://example.com/image.jpg",
  "model": "tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3",
  "ScaleValue": 1.5
}
```

The API will return a JSON response with the restored image data:

```json
{
  "restoredImage": "restored_image_data_here"
}
```

## Error Handling

If there is an error during the image restoration process or any other issue, the API will return a 500 Internal Server Error response with an error message in JSON format:

```json
{
  "error": "error_message_here"
}
```

Please make sure to handle errors gracefully in your application when making requests to this API.

## License

This project is licensed under the MIT License. You can find the full license details in the [LICENSE](LICENSE) file.
