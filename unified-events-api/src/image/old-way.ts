import SeatGeek from 'seatgeek-js';
import Ticketmaster from 'ticketmaster';

const ticketmasterEventSDK = Ticketmaster(process.env.TICKETMASTER_APIKEY);
const ticketmasterResponse = await ticketmasterEventSDK.discovery.v2.event.all({
  city: 'New York',
});

const seatgeekSDK = new SeatGeek(process.env.SEATGEEK_APIKEY);
const seatgeekResponse = await seatgeekSDK.Event.allEvents().get();

function ticketmasterEventToSchemaOrg() {

}

function stubhubEventToSchemaOrg() {
  
}

const schemaOrgEventsFromTicketmaster = ticketmasterResponse.something
  .data.map(ticketmasterEventToSchemaOrg);

const schemaOrgEventsFromStubhub = seatgeekResponse.something
  .data.map(ticketmasterEventToSchemaOrg);

const schemaOrgEvents = [
  ...schemaOrgEventsFromTicketmaster,
  ...schemaOrgEventsFromStubhub,
];
























