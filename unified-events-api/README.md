# Unified Events API examples

This directory contains examples of building software that integrates with various event ticketing platforms like Ticketmaster, Stubhub, Seatgeek, etc. It contains three methods of performing the integration:

1. [Using existing SDKs](https://github.com/comake/skl-examples/blob/main/unified-events-api/src/UsingExistingSdks.ts) - uses both official and non-official SDKs (whatever we could find on npm) to sends requests to each API using the unique methods and parameters of each integration's SDK.

2. [Using StandardSDK with OpenAPI specifications](https://github.com/comake/skl-examples/blob/main/unified-events-api/src/UsingStandardSdkWithOpenApiSpecs.ts) - uses OpenAPI specs to create a single SDK with namespaced operations per integration that are automatically typed according to the OpenAPI spec.

3. [Using StandardSDK with SKL](https://github.com/comake/skl-examples/blob/main/unified-events-api/src/UsingStandardSdkWithSkl.ts) - uses SKL Schemas as abstraactions to get events from each API standardized in [schema.org/Event](https://schema.org/Event) format.

## Usage

To try out these examples, perform the following steps:

1. Clone this repository and navigate to this directory

    In your terminal: 

    ```shell
    git clone https://github.com/comake/skl-examples.git
    cd skl-examples/unified-events-api/
    ```

2. Install node modules and build the package

    In your terminal: 

    ```shell
    npm install
    npm run build
    ```

3. Get credentials for the APIs

    **Ticketmaster**: Go to [https://developer.ticketmaster.com/](https://developer.ticketmaster.com/) and create an account to get an api key

    **Seatgeek**: Go to [https://seatgeek.com](https://seatgeek.com) and create an account, then go to [https://seatgeek.com/build](https://seatgeek.com/build) and click "Manage Apps" then register an app to get a `client_id` (which gets used as an api key).

    **Stubhub**: Unfortunately they are controling API access right now so you have to fill out this form [https://signup.partnerize.com/signup/en/stubhub](https://signup.partnerize.com/signup/en/stubhub) to be accepted as an affiliate then have a Stubhub employee generate and send credentials to you. Once you get a `client_id` and `client_secret` from them, obtain an `accessToken` by sending a request to the Oauth2 client credentials token endpoint as specified in the [Stubhub authentication documentation](https://developer.stubhub.com/docs/authentication/application-only-authentication-flow#2-obtain-an-access-token). Note that you will have to refresh this access token because it expires. If you'd rather not go through this process, just comment out the code for Stubhub in any of the examples.

4. Copy the contents of `.env.example` into a new file called `.env` and replace the example values with the credentials you obtained in the previous step.

5. Run any of the three scripts

    In your terminal: 
    
    ```shell
    npm run existing-sdks
    npm run standard-sdk-with-openapi-specs
    npm run standard-sdk-with-skl
    ```

Each of these should log a bunch of JSON to your terminal. This is the response data we recieved from each API.

- In the first example using existing SDKs, it will log the unique response from each SDK.
- In the second example using Standard SDK with OpenAPI specs, it will log an [`AxiosResponse`](https://github.com/axios/axios#response-schema) object containing the data we received from each API.
- In the third example using Standard SDK with SKL, it will log the results from each API mapped to the [schema.org](https://schema.org) ontology. For brevity we did not map all the fields from the original API responses. 

Copy and paste the responses into your favorite code editor to prettify it & check out the data! 

## Next steps

Now it's your turn. Experiment with SKL by modifying the RML mappings in the mappings.json file. If you're comfortable with RML and JSON-LD, or just feeling adventurous, try modifying this repo to map data from your API of choice! If you're stuck, have questions, or would like to consult with us on building with SKL, please reach out to us on [Discord](https://discord.gg/stvfSB8kpG?ref=https://github.com/comake/skl-examples).