import { promises as fs } from 'fs';
import type { OpenApi } from '@comake/standard-sdk-js';
import { StandardSDK } from '@comake/standard-sdk-js';

async function run(): Promise<void> {
  const ticketmasterOpenApiSpecFile = await fs.readFile('./assets/ticketmaster-openapi.json', { encoding: 'utf8' });
  const ticketmasterOpenApiSpec = JSON.parse(ticketmasterOpenApiSpecFile);

  const standardSdk = StandardSDK.build({
    apiSpecs: {
      ticketmaster: {
        type: 'openapi',
        value: ticketmasterOpenApiSpec as OpenApi,
      },
    },
  });

  const response = await standardSdk.ticketmaster.SearchEvents(
    { city: 'New York' },
    { apiKey: process.env.TICKETMASTER_APIKEY! },
  );

  console.log(JSON.stringify(response.data._embedded.events));
}

run();
