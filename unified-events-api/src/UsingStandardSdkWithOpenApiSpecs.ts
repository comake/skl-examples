import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';

dotenv.config();

import seatGeekOpenapi from './openapi-specs/SeatGeekOpenapi';
import stubhubOpenapi from './openapi-specs/StubhubOpenapi';
import ticketmasterOpenapi from './openapi-specs/TicketmasterOpenapi';

(async function(): Promise<void> {
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
  console.log(JSON.stringify(ticketmasterResponse.data));

  const stubhubResponse = await standardSDK.stubhub.Events_SearchEvents(
    { q: 'New York' },
    { accessToken: process.env.STUBHUB_ACCESS_TOKEN }
  );
  console.log(JSON.stringify(stubhubResponse.data));

  const seatgeekResponse = await standardSDK.seatgeek.searchEvents(
    { q: 'New York' },
    { apiKey: process.env.SEATGEEK_APIKEY }
  );
  console.log(JSON.stringify(seatgeekResponse.data));
})();
