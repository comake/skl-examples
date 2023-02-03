import type { Entity } from '@comake/standard-sdk-js';
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
  STUBHUB_ACCESS_TOKEN: process.env.STUBHUB_ACCESS_TOKEN!,
  SEATGEEK_APIKEY: process.env.SEATGEEK_APIKEY!,
};

(async function(): Promise<void> {
  // Get contents of schema files, combine and frame them, replace stubbed env vars with real values
  const schemas = await combineSchemas(schemaFiles, env);

  // Build our Standard SDK
  const standardSDK = StandardSDK.build({
    sklEngineOptions: { type: 'memory', schemas },
  });

  // Get events from Ticketmaster using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const ticketmasterResponse = await standardSDK.skl.verb.getEvents({
    account: 'https://example.com/data/TicketmasterAccount',
    city: 'New York',
  });

  // Get events from Stubhub using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const stubhubResponse = await standardSDK.skl.verb.getEvents({
    account: 'https://example.com/data/StubhubAccount',
    city: 'New York',
  });

  // Get events from SeatGeek using the `getEvents` Verb. Response holds a list of schema.org/Event entities
  const seatgeekResponse = await standardSDK.skl.verb.getEvents({
    account: 'https://example.com/data/SeatgeekAccount',
    city: 'New York',
  });

  // Get the schema.org event entities from the responses
  const events = [
    ...ticketmasterResponse['https://standardknowledge.com/ontologies/core/records'] as Entity[],
    ...stubhubResponse['https://standardknowledge.com/ontologies/core/records'] as Entity[],
    ...seatgeekResponse['https://standardknowledge.com/ontologies/core/records'] as Entity[],
  ];

  console.log(events);
})();
