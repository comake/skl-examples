# Unified Files API examples

This directory contains examples of building software that integrates with various file storage platforms like Google Drive, Dropbox, Box, etc. to share files on those platforms. It contains two methods of performing the integration:

1. [Using StandardSDK with OpenAPI specifications](https://github.com/comake/skl-examples/blob/main/unified-files-api/src/UsingStandardSdkWithOpenApiSpecs.ts) - uses OpenAPI specs to create a single SDK with namespaced operations per integration that are automatically typed according to the OpenAPI spec.

2. [Using StandardSDK with SKL](https://github.com/comake/skl-examples/blob/main/unified-files-api/src/UsingStandardSdkWithSkl.ts) - uses SKL Schemas as abstractions to share files using a standard interface.

## Usage

⚠️ **Important**: The scripts in this example ([UsingStandardSdkWithOpenApiSpecs.ts](https://github.com/comake/skl-examples/blob/main/unified-files-api/src/UsingStandardSdkWithOpenApiSpecs.ts) and [UsingStandardSdkWithSkl.ts](https://github.com/comake/skl-examples/blob/main/unified-files-api/src/UsingStandardSdkWithSkl.ts)) use dummy values for the ids of files to be shared (always `abc123`) and the email address of people those files will be shared with (always `adler@example.com`). These need to be updated to real file ids from each platform and email addresses for who you want to share with otherwise the requests will fail.

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

3. Get credentials for the APIs. You need an access token from each API.

4. Copy the contents of `.env.example` into a new file called `.env` and replace the example values with the credentials you obtained in the previous step.

5. Run the script

    In your terminal: 
    
    ```shell
    npm run standard-sdk-with-openapi-specs
    npm run standard-sdk-with-skl
    ```
