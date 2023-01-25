import seatGeekOpenapi from '../openapi-specs/SeatGeekOpenapi';
import stubhubOpenapi from '../openapi-specs/StubhubOpenapi';
import ticketmasterOpenapi from '../openapi-specs/TicketmasterOpenapi';

export const apiSpecs = {
  ticketmaster: { type: 'openapi', value: ticketmasterOpenapi },
  stubhub: { type: 'openapi', value: stubhubOpenapi },
  seatgeek: { type: 'openapi', value: seatGeekOpenapi },
} as const;

export const skqlOptions = {
  type: 'memory' as const,
  schemas: [],
};
