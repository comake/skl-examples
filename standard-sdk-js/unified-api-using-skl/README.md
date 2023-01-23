# Using Standard SDK with SKL

This directory contains an example of using Standard SDK with SKL. When run, it executes the `getEvents` verb to get events from the Ticketmaster API.

## Usage

To try out this example, perform the following steps:

1. Clone this repository and navigate to this directory

    In your terminal: 

    ```shell
    git clone https://github.com/comake/skl-examples.git
    cd skl-examples/standard-sdk-js/ticketmaster-using-skl/
    ```

2. Install node modules and build the package

    In your terminal: 

    ```shell
    npm install
    npm run build
    ```

3. Go to [https://developer.ticketmaster.com/](https://developer.ticketmaster.com/) and create an account to get an api key

4. Run the script with the `TICKETMASTER_APIKEY` environment variable set to your api key

    In your terminal: 
    
    ```shell
    TICKETMASTER_APIKEY=<yourApiKeyHere> npm run example
    ```

This should log to your terminal a bunch of JSON. This JSON is the reseponse data we recieved from Ticketmaster mapped to an ontology called [schema.org](https://schema.org). Copy and paste the response into your favorite code editor to prettify it to check out the data! For brevity we did not map all the fields from the original Ticketmaster API response. 

## Next steps

Now it's your turn. Experiment by modifying the RML mappings in the mappings.json file. If you're comfortable with RML and JSON-LD, or just feeling adventurous, try modifying this repo to map data from your API of choice!