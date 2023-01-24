# Using Standard SDK with SKL

This directory contains an example of using Standard SDK with SKL. When run, it executes the `getEvents` verb to get events from the Ticketmaster API.

## Usage

To try out this example, perform the following steps:

1. Clone this repository and navigate to this directory

    In your terminal: 

    ```shell
    git clone https://github.com/comake/skl-examples.git
    cd skl-examples/standard-sdk-js/events-unified-api-using-skl/
    ```

2. Install node modules and build the package

    In your terminal: 

    ```shell
    npm install
    npm run build
    ```

3. Get credentials for the APIs

    a. Ticketmaster: Go to [https://developer.ticketmaster.com/](https://developer.ticketmaster.com/) and create an account to get an api key

    b. Seatgeek: Go to [https://seatgeek.com](https://seatgeek.com) and create an account, then go to [https://seatgeek.com/build](https://seatgeek.com/build) and click "Manage Apps" then register an app to get a client id (which gets used as an api key).

    c. Stubhub: Unfortunately they are controling API access right now so you have to fill out this form [https://signup.partnerize.com/signup/en/stubhub](https://signup.partnerize.com/signup/en/stubhub) to be accepted as an affiliate then have a Stubhub employee generate and send credentials to you.

4. Copy the contents of `.env.example` into a new file called `.env` and replace the example values with your credentials

5. Run the script

    In your terminal: 
    
    ```shell
    npm run example
    ```

This should log to your terminal a bunch of JSON. This JSON is the reseponse data we recieved from each API mapped to an ontology called [schema.org](https://schema.org). Copy and paste the response into your favorite code editor to prettify it to check out the data! For brevity we did not map all the fields from the original API responses. 

## Next steps

Now it's your turn. Experiment by modifying the RML mappings in the mappings.json file. If you're comfortable with RML and JSON-LD, or just feeling adventurous, try modifying this repo to map data from your API of choice!