import { StandardSDK } from '@comake/standard-sdk-js';
import { apiSpecs, skqlOptions } from './Utils';

const standardSDK = StandardSDK.build({ apiSpecs, skqlOptions });

const ticketmasterResponse = await standardSDK.skql.verb.getEvents({
  account: 'https://example.com/data/TicketmasterAccount',
  city: 'New York',
});

const stubhubResponse = await standardSDK.skql.verb.getEvents({
  account: 'https://example.com/data/StubhubAccount',
  city: 'New York',
});

const rawStubhubResponse = await standardSDK.stubhub.Events_SearchEvents(
  { q: 'New York' },
  { accessToken: process.env.STUBHUB_ACCESS_TOKEN }
);



















