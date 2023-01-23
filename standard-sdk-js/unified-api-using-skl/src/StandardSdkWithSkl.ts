import { StandardSDK } from '@comake/standard-sdk-js';
import { combineSchemas, env } from './Util';

const schemaFiles = [ 'entities.json', 'mappings.json', 'nouns.json', 'verbs.json' ];
const schemas = await combineSchemas(schemaFiles, env);

const standardSdk = StandardSDK.build({
  skqlOptions: { type: 'memory', schemas },
});

const ticketmasterEvents = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/TicketmasterAccount',
  city: 'New York',
});

const stubhubEvents = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/StubhubAccount',
  city: 'New York',
});

const seatgeekEvents = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/SeatgeekAccount',
  city: 'New York',
});

