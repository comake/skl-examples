import { StandardSDK } from '@comake/standard-sdk-js';
import ticketmasterOpenApiSpec from './TicketmasterOpenapi';

async function run(): Promise<void> {
  const standardSdk = StandardSDK.build({
    apiSpecs: {
      ticketmaster: {
        type: 'openapi',
        value: ticketmasterOpenApiSpec,
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
