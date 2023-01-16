/* eslint-disable @typescript-eslint/naming-convention */
import { StandardSDK } from '@comake/standard-sdk-js';
import { frameAndCombineSchemas } from './Util';

async function run(): Promise<void> {
  const schemaFiles = [
    './assets/entities.json',
    './assets/mappings.json',
    './assets/nouns.json',
    './assets/verbs.json',
  ];
  const env = { TICKETMASTER_APIKEY: process.env.TICKETMASTER_APIKEY! };

  const schemas = await frameAndCombineSchemas(schemaFiles, env);

  const standardSdk = StandardSDK.build({
    skqlOptions: {
      type: 'memory',
      schemas,
    },
  });

  const response = await standardSdk.skql.do.getEvents({
    account: 'https://example.com/data/TicketmasterAccount',
    city: 'New York',
  });

  console.log(response['https://skl.standard.storage/records']);
}

run();
