import SeatGeek from 'seatgeek-js';
import Ticketmaster from 'ticketmaster';
// Couldn't find an SDK for Stubhub

// Ticketmaster
const ticketmasterEventSDK = Ticketmaster(process.env.TICKETMASTER_APIKEY).discovery.v2.event;
const ticketmasterResponse = await ticketmasterEventSDK.all({
  city: 'New York',
});

// Seatgeek
const seatgeekSDK = new SeatGeek(process.env.SEATGEEK_APIKEY);
// Does not accept any parameters... so can't be used
const seatgeekResponse = await seatgeekSDK.Event.allEvents().get();
