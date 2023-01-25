# Unified Files API examples

This directory contains examples of building software that integrates with various file storage platforms like Google Drive, Dropbox, Box, etc. It currently contains one method of performing the integration:

- [Using StandardSDK with OpenAPI specifications](https://github.com/comake/skl-examples/blob/main/unified-files-api/src/UsingStandardSdkWithOpenApiSpecs.ts) - uses OpenAPI specs to create a single SDK with namespaced operations per integration that are automatically typed according to the OpenAPI spec.

## Usage

To try out these examples, perform the following steps:

1. Clone this repository and navigate to this directory

    In your terminal: 

    ```shell
    git clone https://github.com/comake/skl-examples.git
    cd skl-examples/unified-files-api/
    ```

2. Install node modules and build the package

    In your terminal: 

    ```shell
    npm install
    npm run build
    ```

3. Get credentials for the APIs

    You need an access token from each API. Walkthrough coming soon...

4. Copy the contents of `.env.example` into a new file called `.env` and replace the example values with the credentials you obtained in the previous step.

5. Run the script

    In your terminal: 
    
    ```shell
    npm run standard-sdk-with-openapi-specs
    ```

Thi should log a bunch of JSON to your terminal. This is the response data we recieved from each API. It will log the `data` field from an [`AxiosResponse`](https://github.com/axios/axios#response-schema) object containing the data we received from each API.

Copy and paste the responses into your favorite code editor to prettify it & check out the data! 