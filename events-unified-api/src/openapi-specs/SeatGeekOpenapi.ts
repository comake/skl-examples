export default {
  "openapi": "3.0.0",
  "info": {
    "title": "SeatGeek Platform API",
    "version": "2.0.0"
  },
  "servers": [
    {
      "url": "https://api.seatgeek.com/2"
    }
  ],
  "paths": {
    "/events": {
      "get": {
        "description": "Find events matching specific search criteria.",
        "operationId": "searchEvents",
        "security": [
          {
            "apiKey": []
          }
        ],
        "parameters": [
          {
            "description": "Search across all possible parts of a response document.",
            "in": "query",
            "name": "q",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_utc",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_utc.gte",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_utc.gt",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_utc.lte",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_utc.lt",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_local",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_local.gte",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_local.gt",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_local.lte",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "description": "Filter by events happening on or after this date",
            "in": "query",
            "name": "datetime_local.lt",
            "required": false,
            "schema": {
              "type": "string",
              "format": "date"
            }
          },
          {
            "$ref": "#/components/parameters/perPage"
          },
          {
            "$ref": "#/components/parameters/page"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Events"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "parameters": {
      "perPage": {
        "description": "",
        "in": "query",
        "name": "per_page",
        "required": false,
        "schema": {
          "type": "integer"
        }
      },
      "page": {
        "description": "",
        "in": "query",
        "name": "page",
        "required": false,
        "schema": {
          "type": "integer"
        }
      }
    },
    "schemas": {
      "Events": {
        "type": "array",
        "items": {
          "$ref": "#/components/schemas/Event"
        }
      },
      "Event": {
        "type": "object",
        "description": "An event on the SeatGeek platform.",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "integer"
          },
          "score": {
            "type": "integer"
          },
          "stats": {
            "type": "object"
          },
          "type": {
            "type": "string",
            "description": "The type of the event."
          },
          "title": {
            "type": "string",
            "description": "The title of the event."
          },
          "short_title": {
            "type": "string",
            "description": "The shortened version of the title of the event."
          },
          "url": {
            "type": "string",
            "description": "The URL of the event."
          },
          "datetime_local": {
            "type": "string",
            "format": "date-time"
          },
          "datetime_utc": {
            "type": "string",
            "format": "date-time"
          },
          "performers": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Performer"
            }
          },
          "venue": {
            "$ref": "#/components/schemas/Venue"
          },
          "taxonomies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Taxonomy"
            }
          }
        }
      },
      "Performer": {
        "type": "object"
      },
      "Venue": {
        "type": "object"
      },
      "Taxonomy": {
        "type": "object"
      }
    },
    "securitySchemes": {
      "apiKey": {
        "type": "apiKey",
        "description": "",
        "in": "query",
        "name": "client_id"
      }
    }
  }
} as const;
