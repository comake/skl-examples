import * as dotenv from 'dotenv';
import SeatGeek from 'seatgeek-js';
import Ticketmaster from 'ticketmaster';
// Couldn't find an SDK for Stubhub

dotenv.config();

(async function(): Promise<void> {
  // Initialize Ticketmaster SDK
  const ticketmasterEventSDK = Ticketmaster(process.env.TICKETMASTER_APIKEY).discovery.v2.event;
  // Send request with Ticketmaster SDK
  const ticketmasterResponse = await ticketmasterEventSDK.all({
    city: 'New York',
  });
  console.log(JSON.stringify(ticketmasterResponse));

  // Initialize Seatgeek SDK
  const seatgeekSDK = new SeatGeek(process.env.SEATGEEK_APIKEY);
  // Send request with Seatgeek SDK
  // Seatgeek SDK does not accept any parameters so this doesnt't actually solve our needs
  const seatgeekResponse = await seatgeekSDK.Event.allEvents().get();
  console.log(JSON.stringify(seatgeekResponse));
})();
