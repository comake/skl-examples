import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';
import { combineSchemas } from './Util';

dotenv.config();

const schemaFiles = [
  './skl-schemas/entities.json',
  './skl-schemas/mappings.json',
  './skl-schemas/nouns.json',
  './skl-schemas/verbs.json'
];
const env = {
  TICKETMASTER_APIKEY: process.env.TICKETMASTER_APIKEY!,
  SEATGEEK_APIKEY: process.env.TICKETMASTER_APIKEY!,
  STUBHUB_USERNAME: process.env.STUBHUB_USERNAME!,
  STUBHUB_PASSWORD: process.env.STUBHUB_PASSWORD!,
};

(async function(): Promise<void> {
  // Get contents of schema files, combine and frame them, replace stubbed env vars with real values
  const schemas = await combineSchemas(schemaFiles, env);

  // Build our Standard SDK
  const standardSdk = StandardSDK.build({
    skqlOptions: { type: 'memory', schemas },
  });

  // Get events from Ticketmaster using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const ticketmasterResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/TicketmasterAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(ticketmasterResponse['https://skl.standard.storage/records']));

  // Get events from Stubhub using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const stubhubResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/StubhubAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(stubhubResponse['https://skl.standard.storage/records']));

  // Get events from SeatGeek using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const seatgeekResponse = await standardSdk.skql.verb.getEvents({
    account: 'https://example.com/data/SeatgeekAccount',
    city: 'New York',
  });
  console.log(JSON.stringify(seatgeekResponse['https://skl.standard.storage/records']));
})();
