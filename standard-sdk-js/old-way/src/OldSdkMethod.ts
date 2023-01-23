import Eventbrite from 'eventbrite';
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
// Does not accept any parameters
const seatgeekResponse = await seatgeekSDK.Event.allEvents().get();

// Eventbrite - doesn't have an Event Search endpoint so we have to get Events through Venues
const eventbriteSDK = Eventbrite({ token: process.env.EVENTBRITE_TOKEN });
const eventbriteVenueId = 'abc123';
const eventbriteResponse = await eventbriteSDK.request(`/venues/${eventbriteVenueId}/events/`);
