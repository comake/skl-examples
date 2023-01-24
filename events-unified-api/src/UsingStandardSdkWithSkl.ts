import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';
import { combineSchemas } from './Util';

dotenv.config();

const schemaFiles = [
  './assets/entities.json',
  './assets/mappings.json',
  './assets/nouns.json',
  './assets/verbs.json'
];
const env = {
  TICKETMASTER_APIKEY: process.env.TICKETMASTER_APIKEY!,
  SEATGEEK_APIKEY: process.env.TICKETMASTER_APIKEY!,
  STUBHUB_USERNAME: process.env.STUBHUB_USERNAME!,
  STUBHUB_PASSWORD: process.env.STUBHUB_PASSWORD!,
};

(async function(): Promise<void> {
  const schemas = await combineSchemas(schemaFiles, env);

  const standardSdk = StandardSDK.build({
    skqlOptions: { type: 'memory', schemas },
  });

  const ticketmasterResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/TicketmasterAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(ticketmasterResponse['https://skl.standard.storage/records']));

  const stubhubResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/StubhubAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(stubhubResponse['https://skl.standard.storage/records']));

  const seatgeekResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/SeatgeekAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(seatgeekResponse['https://skl.standard.storage/records']));
})();
