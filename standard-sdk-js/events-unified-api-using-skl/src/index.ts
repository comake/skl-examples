import { StandardSDK } from '@comake/standard-sdk-js';
import { combineSchemas, env } from './Util';

const schemaFiles = [ 'entities.json', 'mappings.json', 'nouns.json', 'verbs.json' ];
const schemas = await combineSchemas(schemaFiles, env);

const standardSdk = StandardSDK.build({
  skqlOptions: { type: 'memory', schemas },
});

const ticketmasterResponse = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/TicketmasterAccount',
  city: 'New York',
});
console.log(ticketmasterResponse['https://skl.standard.storage/records']);

const stubhubResponse = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/StubhubAccount',
  city: 'New York',
});
console.log(stubhubResponse['https://skl.standard.storage/records']);

const seatgeekResponse = await standardSdk.skql.verb.getEvents({
  account: 'https://example.com/data/SeatgeekAccount',
  city: 'New York',
});
console.log(seatgeekResponse['https://skl.standard.storage/records']);
