import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';
dotenv.config();

import seatGeekOpenapi from './openapi-specs/SeatGeekOpenapi';
import stubhubOpenapi from './openapi-specs/StubhubOpenapi';
import ticketmasterOpenapi from './openapi-specs/TicketmasterOpenapi';

const standardSDK = StandardSDK.build({
  apiSpecs: {
    ticketmaster: { type: 'openapi', value: ticketmasterOpenapi },
    stubhub: { type: 'openapi', value: stubhubOpenapi },
    seatgeek: { type: 'openapi', value: seatGeekOpenapi },
  },
});

const ticketmasterResponse = await standardSDK.ticketmaster.SearchEvents(
  { city: 'New York' },
  { apiKey: process.env.TICKETMASTER_APIKEY }
);
console.log(ticketmasterResponse);

const stubhubResponse = await standardSDK.stubhub.Events_SearchEvents(
  { q: 'New York' },
  { username: process.env.STUBHUB_USERNAME, password: process.env.STUBHUB_PASSWORD }
);
console.log(stubhubResponse);

const seatgeekResponse = await standardSDK.seatgeek.searchEvents(
  { q: 'New York' },
  { apiKey: process.env.SEATGEEK_APIKEY }
);
console.log(seatgeekResponse);