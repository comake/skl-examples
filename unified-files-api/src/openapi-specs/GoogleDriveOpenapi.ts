export default {
  "openapi": "3.0.0",
  "servers": [
    {
      "url": "https://www.googleapis.com/drive/v3"
    }
  ],
  "info": {
    "contact": {
      "name": "Google",
      "url": "https://google.com",
      "x-twitter": "youtube"
    },
    "description": "Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.",
    "license": {
      "name": "Creative Commons Attribution 3.0",
      "url": "http://creativecommons.org/licenses/by/3.0/"
    },
    "termsOfService": "https://developers.google.com/terms/",
    "title": "Drive API",
    "version": "v3",
    "x-apiClientRegistration": {
      "url": "https://console.developers.google.com"
    },
    "x-apisguru-categories": [
      "analytics",
      "media"
    ],
    "x-logo": {
      "url": "https://api.apis.guru/v2/cache/logo/https_www.google.com_images_branding_googlelogo_2x_googlelogo_color_272x92dp.png"
    },
    "x-origin": [
      {
        "converter": {
          "url": "https://github.com/mermade/oas-kit",
          "version": "7.0.4"
        },
        "format": "google",
        "url": "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest",
        "version": "v1"
      }
    ],
    "x-preferred": true,
    "x-providerName": "googleapis.com",
    "x-serviceName": "drive"
  },
  "externalDocs": {
    "url": "https://developers.google.com/drive/"
  },
  "tags": [
    {
      "name": "about"
    },
    {
      "name": "changes"
    },
    {
      "name": "channels"
    },
    {
      "name": "comments"
    },
    {
      "name": "drives"
    },
    {
      "name": "files"
    },
    {
      "name": "permissions"
    },
    {
      "name": "replies"
    },
    {
      "name": "revisions"
    },
    {
      "name": "teamdrives"
    }
  ],
  "paths": {
    "/about": {
      "get": {
        "description": "Gets information about the user, the user's Drive, and system capabilities.",
        "operationId": "drive.about.get",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/About"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "about"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/changes": {
      "get": {
        "description": "Lists the changes for a user or shared drive.",
        "operationId": "drive.changes.list",
        "parameters": [
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
            "in": "query",
            "name": "pageToken",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.",
            "in": "query",
            "name": "driveId",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.",
            "in": "query",
            "name": "includeCorpusRemovals",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether both My Drive and shared drive items should be included in results.",
            "in": "query",
            "name": "includeItemsFromAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.",
            "in": "query",
            "name": "includeRemoved",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use includeItemsFromAllDrives instead.",
            "in": "query",
            "name": "includeTeamDriveItems",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The maximum number of changes to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.",
            "in": "query",
            "name": "restrictToMyDrive",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.",
            "in": "query",
            "name": "spaces",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use driveId instead.",
            "in": "query",
            "name": "teamDriveId",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChangeList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "changes"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/changes/startPageToken": {
      "get": {
        "description": "Gets the starting pageToken for listing future changes.",
        "operationId": "drive.changes.getStartPageToken",
        "parameters": [
          {
            "description": "The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive is returned.",
            "in": "query",
            "name": "driveId",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use driveId instead.",
            "in": "query",
            "name": "teamDriveId",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/StartPageToken"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "changes"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/changes/watch": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Subscribes to changes for a user.",
        "operationId": "drive.changes.watch",
        "parameters": [
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.",
            "in": "query",
            "name": "pageToken",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The shared drive from which changes are returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.",
            "in": "query",
            "name": "driveId",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.",
            "in": "query",
            "name": "includeCorpusRemovals",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether both My Drive and shared drive items should be included in results.",
            "in": "query",
            "name": "includeItemsFromAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.",
            "in": "query",
            "name": "includeRemoved",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use includeItemsFromAllDrives instead.",
            "in": "query",
            "name": "includeTeamDriveItems",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The maximum number of changes to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive.",
            "in": "query",
            "name": "restrictToMyDrive",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of spaces to query within the user corpus. Supported values are 'drive', 'appDataFolder' and 'photos'.",
            "in": "query",
            "name": "spaces",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use driveId instead.",
            "in": "query",
            "name": "teamDriveId",
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Channel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "changes"
        ]
      }
    },
    "/channels/stop": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Stop watching resources through this channel",
        "operationId": "drive.channels.stop",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Channel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "channels"
        ]
      }
    },
    "/drives": {
      "get": {
        "description": "Lists the user's shared drives.",
        "operationId": "drive.drives.list",
        "parameters": [
          {
            "description": "Maximum number of shared drives to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "Page token for shared drives.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Query string for searching shared drives.",
            "in": "query",
            "name": "q",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/DriveList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a new shared drive.",
        "operationId": "drive.drives.create",
        "parameters": [
          {
            "description": "An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.",
            "in": "query",
            "name": "requestId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Drive"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Drive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      }
    },
    "/drives/{driveId}": {
      "delete": {
        "description": "Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.",
        "operationId": "drive.drives.delete",
        "parameters": [
          {
            "description": "The ID of the shared drive.",
            "in": "path",
            "name": "driveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether any items inside the shared drive should also be deleted. This option is only supported when useDomainAdminAccess is also set to true.",
            "in": "query",
            "name": "allowItemDeletion",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      },
      "get": {
        "description": "Gets a shared drive's metadata by ID.",
        "operationId": "drive.drives.get",
        "parameters": [
          {
            "description": "The ID of the shared drive.",
            "in": "path",
            "name": "driveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Drive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates the metadate for a shared drive.",
        "operationId": "drive.drives.update",
        "parameters": [
          {
            "description": "The ID of the shared drive.",
            "in": "path",
            "name": "driveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Drive"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Drive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      }
    },
    "/drives/{driveId}/hide": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Hides a shared drive from the default view.",
        "operationId": "drive.drives.hide",
        "parameters": [
          {
            "description": "The ID of the shared drive.",
            "in": "path",
            "name": "driveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Drive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      }
    },
    "/drives/{driveId}/unhide": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Restores a shared drive to the default view.",
        "operationId": "drive.drives.unhide",
        "parameters": [
          {
            "description": "The ID of the shared drive.",
            "in": "path",
            "name": "driveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Drive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "drives"
        ]
      }
    },
    "/files": {
      "get": {
        "description": "Lists or searches files.",
        "operationId": "drive.files.list",
        "parameters": [
          {
            "description": "The paths of the fields you want included in the response. If not specified, the response includes a default set of fields specific to this method. For development you can use the special value * to return all fields, but you'll achieve greater performance by only selecting the fields you need.",
            "in": "query",
            "name": "fields",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Groupings of files to which the query applies. Supported groupings are: 'user' (files created by, opened by, or shared directly with the user), 'drive' (files in the specified shared drive as indicated by the 'driveId'), 'domain' (files shared to the user's domain), and 'allDrives' (A combination of 'user' and 'drive' for all drives where the user is a member). When able, use 'user' or 'drive', instead of 'allDrives', for efficiency.",
            "in": "query",
            "name": "corpora",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The source of files to list. Deprecated: use 'corpora' instead.",
            "in": "query",
            "name": "corpus",
            "schema": {
              "enum": [
                "domain",
                "user"
              ],
              "type": "string"
            }
          },
          {
            "description": "ID of the shared drive to search.",
            "in": "query",
            "name": "driveId",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether both My Drive and shared drive items should be included in results.",
            "in": "query",
            "name": "includeItemsFromAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Deprecated use includeItemsFromAllDrives instead.",
            "in": "query",
            "name": "includeTeamDriveItems",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of sort keys. Valid keys are 'createdTime', 'folder', 'modifiedByMeTime', 'modifiedTime', 'name', 'name_natural', 'quotaBytesUsed', 'recency', 'sharedWithMeTime', 'starred', and 'viewedByMeTime'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedTime desc,name. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.",
            "in": "query",
            "name": "orderBy",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A query for filtering the file results. See the \"Search for Files\" guide for supported syntax.",
            "in": "query",
            "name": "q",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A comma-separated list of spaces to query within the corpus. Supported values are 'drive' and 'appDataFolder'.",
            "in": "query",
            "name": "spaces",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use driveId instead.",
            "in": "query",
            "name": "teamDriveId",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/FileList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a new file.",
        "operationId": "drive.files.create",
        "parameters": [
          {
            "description": "Deprecated. Creating files in multiple folders is no longer supported.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
            "in": "query",
            "name": "ignoreDefaultVisibility",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            "in": "query",
            "name": "keepRevisionForever",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
            "in": "query",
            "name": "ocrLanguage",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to use the uploaded content as indexable text.",
            "in": "query",
            "name": "useContentAsIndexableText",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/octet-stream": {
              "schema": {
                "$ref": "#/components/schemas/File"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/File"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      }
    },
    "/files/generateIds": {
      "get": {
        "description": "Generates a set of file IDs which can be provided in create or copy requests.",
        "operationId": "drive.files.generateIds",
        "parameters": [
          {
            "description": "The number of IDs to return.",
            "in": "query",
            "name": "count",
            "schema": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'. (Default: 'drive')",
            "in": "query",
            "name": "space",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The type of items which the IDs can be used for. Supported values are 'files' and 'shortcuts'. Note that 'shortcuts' are only supported in the drive 'space'. (Default: 'files')",
            "in": "query",
            "name": "type",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/GeneratedIds"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/files/trash": {
      "delete": {
        "description": "Permanently deletes all of the user's trashed files.",
        "operationId": "drive.files.emptyTrash",
        "parameters": [
          {
            "description": "Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/files/{fileId}": {
      "delete": {
        "description": "Permanently deletes a file owned by the user without moving it to the trash. If the file belongs to a shared drive the user must be an organizer on the parent. If the target is a folder, all descendants owned by the user are also deleted.",
        "operationId": "drive.files.delete",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Deprecated. If an item is not in a shared drive and its last parent is deleted but the item itself is not, the item will be placed under its owner's root.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "get": {
        "description": "Gets a file's metadata or content by ID.",
        "operationId": "drive.files.get",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
            "in": "query",
            "name": "acknowledgeAbuse",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/File"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates a file's metadata and/or content. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might change automatically, such as modifiedDate. This method supports patch semantics.",
        "operationId": "drive.files.update",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A comma-separated list of parent IDs to add.",
            "in": "query",
            "name": "addParents",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Deprecated. Adding files to multiple folders is no longer supported. Use shortcuts instead.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            "in": "query",
            "name": "keepRevisionForever",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
            "in": "query",
            "name": "ocrLanguage",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A comma-separated list of parent IDs to remove.",
            "in": "query",
            "name": "removeParents",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to use the uploaded content as indexable text.",
            "in": "query",
            "name": "useContentAsIndexableText",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/octet-stream": {
              "schema": {
                "$ref": "#/components/schemas/File"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/File"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.scripts"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      }
    },
    "/files/{fileId}/comments": {
      "get": {
        "description": "Lists a file's comments.",
        "operationId": "drive.comments.list",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to include deleted comments. Deleted comments will not include their original content.",
            "in": "query",
            "name": "includeDeleted",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The maximum number of comments to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time).",
            "in": "query",
            "name": "startModifiedTime",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CommentList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "comments"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a new comment on a file.",
        "operationId": "drive.comments.create",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Comment"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Comment"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "comments"
        ]
      }
    },
    "/files/{fileId}/comments/{commentId}": {
      "delete": {
        "description": "Deletes a comment.",
        "operationId": "drive.comments.delete",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "comments"
        ]
      },
      "get": {
        "description": "Gets a comment by ID.",
        "operationId": "drive.comments.get",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to return deleted comments. Deleted comments will not include their original content.",
            "in": "query",
            "name": "includeDeleted",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Comment"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "comments"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates a comment with patch semantics.",
        "operationId": "drive.comments.update",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Comment"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Comment"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "comments"
        ]
      }
    },
    "/files/{fileId}/comments/{commentId}/replies": {
      "get": {
        "description": "Lists a comment's replies.",
        "operationId": "drive.replies.list",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to include deleted replies. Deleted replies will not include their original content.",
            "in": "query",
            "name": "includeDeleted",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "The maximum number of replies to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ReplyList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "replies"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a new reply to a comment.",
        "operationId": "drive.replies.create",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reply"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reply"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "replies"
        ]
      }
    },
    "/files/{fileId}/comments/{commentId}/replies/{replyId}": {
      "delete": {
        "description": "Deletes a reply.",
        "operationId": "drive.replies.delete",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the reply.",
            "in": "path",
            "name": "replyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "replies"
        ]
      },
      "get": {
        "description": "Gets a reply by ID.",
        "operationId": "drive.replies.get",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the reply.",
            "in": "path",
            "name": "replyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to return deleted replies. Deleted replies will not include their original content.",
            "in": "query",
            "name": "includeDeleted",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reply"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "replies"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates a reply with patch semantics.",
        "operationId": "drive.replies.update",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the comment.",
            "in": "path",
            "name": "commentId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the reply.",
            "in": "path",
            "name": "replyId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Reply"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Reply"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "replies"
        ]
      }
    },
    "/files/{fileId}/copy": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a copy of a file and applies any requested updates with patch semantics. Folders cannot be copied.",
        "operationId": "drive.files.copy",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Deprecated. Copying files into multiple folders is no longer supported. Use shortcuts instead.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders.",
            "in": "query",
            "name": "ignoreDefaultVisibility",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to set the 'keepForever' field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions.",
            "in": "query",
            "name": "keepRevisionForever",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A language hint for OCR processing during image import (ISO 639-1 code).",
            "in": "query",
            "name": "ocrLanguage",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/File"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/File"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      }
    },
    "/files/{fileId}/export": {
      "get": {
        "description": "Exports a Google Workspace document to the requested MIME type and returns exported byte content. Note that the exported content is limited to 10MB.",
        "operationId": "drive.files.export",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The MIME type of the format requested for this export.",
            "in": "query",
            "name": "mimeType",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/files/{fileId}/listLabels": {
      "get": {
        "description": "Lists the labels on a file.",
        "operationId": "drive.files.listLabels",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The maximum number of labels to return per page. When not set, this defaults to 100.",
            "in": "query",
            "name": "maxResults",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/LabelList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/files/{fileId}/modifyLabels": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Modifies the set of labels on a file.",
        "operationId": "drive.files.modifyLabels",
        "parameters": [
          {
            "description": "The ID of the file for which the labels are modified.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ModifyLabelsRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ModifyLabelsResponse"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      }
    },
    "/files/{fileId}/permissions": {
      "get": {
        "description": "Lists a file's or shared drive's permissions.",
        "operationId": "drive.permissions.list",
        "parameters": [
          {
            "description": "The ID of the file or shared drive.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/PermissionList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "permissions"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Creates a permission for a file or shared drive.",
        "operationId": "drive.permissions.create",
        "parameters": [
          {
            "description": "The ID of the file or shared drive.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "A plain text custom message to include in the notification email.",
            "in": "query",
            "name": "emailMessage",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Deprecated. See moveToNewOwnersRoot for details.",
            "in": "query",
            "name": "enforceSingleParent",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "This parameter will only take effect if the item is not in a shared drive and the request is attempting to transfer the ownership of the item. If set to true, the item will be moved to the new owner's My Drive root folder and all prior parents removed. If set to false, parents are not changed.",
            "in": "query",
            "name": "moveToNewOwnersRoot",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to send a notification email when sharing to users or groups. This defaults to true for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers.",
            "in": "query",
            "name": "sendNotificationEmail",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. File owners can only transfer ownership of files existing on My Drive. Files existing in a shared drive are owned by the organization that owns that shared drive. Ownership transfers are not supported for files and folders in shared drives. Organizers of a shared drive can move items from that shared drive into their My Drive which transfers the ownership to them.",
            "in": "query",
            "name": "transferOwnership",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "allOf": [
                  { "$ref": "#/components/schemas/Permission" },
                  {
                    "type": "object",
                    "properties": {
                      "role": { "type": "string" },
                      "type": { "type": "string" },
                    },
                    "required": ["role", "type"]
                  }
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Permission"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "permissions"
        ]
      }
    },
    "/files/{fileId}/permissions/{permissionId}": {
      "delete": {
        "description": "Deletes a permission.",
        "operationId": "drive.permissions.delete",
        "parameters": [
          {
            "description": "The ID of the file or shared drive.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the permission.",
            "in": "path",
            "name": "permissionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "permissions"
        ]
      },
      "get": {
        "description": "Gets a permission by ID.",
        "operationId": "drive.permissions.get",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the permission.",
            "in": "path",
            "name": "permissionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Permission"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "permissions"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates a permission with patch semantics.",
        "operationId": "drive.permissions.update",
        "parameters": [
          {
            "description": "The ID of the file or shared drive.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the permission.",
            "in": "path",
            "name": "permissionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether to remove the expiration date.",
            "in": "query",
            "name": "removeExpiration",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. File owners can only transfer ownership of files existing on My Drive. Files existing in a shared drive are owned by the organization that owns that shared drive. Ownership transfers are not supported for files and folders in shared drives. Organizers of a shared drive can move items from that shared drive into their My Drive which transfers the ownership to them.",
            "in": "query",
            "name": "transferOwnership",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Permission"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Permission"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "permissions"
        ]
      }
    },
    "/files/{fileId}/revisions": {
      "get": {
        "description": "Lists a file's revisions.",
        "operationId": "drive.revisions.list",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The maximum number of revisions to return per page.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 1000,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/RevisionList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "revisions"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ]
    },
    "/files/{fileId}/revisions/{revisionId}": {
      "delete": {
        "description": "Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.",
        "operationId": "drive.revisions.delete",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the revision.",
            "in": "path",
            "name": "revisionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "revisions"
        ]
      },
      "get": {
        "description": "Gets a revision's metadata or content by ID.",
        "operationId": "drive.revisions.get",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the revision.",
            "in": "path",
            "name": "revisionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
            "in": "query",
            "name": "acknowledgeAbuse",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Revision"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "revisions"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Updates a revision with patch semantics.",
        "operationId": "drive.revisions.update",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "The ID of the revision.",
            "in": "path",
            "name": "revisionId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Revision"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Revision"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          }
        ],
        "tags": [
          "revisions"
        ]
      }
    },
    "/files/{fileId}/watch": {
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Subscribes to changes to a file. While you can establish a channel for changes to a file on a shared drive, a change to a shared drive file won't create a notification.",
        "operationId": "drive.files.watch",
        "parameters": [
          {
            "description": "The ID of the file.",
            "in": "path",
            "name": "fileId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when alt=media.",
            "in": "query",
            "name": "acknowledgeAbuse",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "A comma-separated list of IDs of labels to include in the labelInfo part of the response.",
            "in": "query",
            "name": "includeLabels",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Specifies which additional view's permissions to include in the response. Only 'published' is supported.",
            "in": "query",
            "name": "includePermissionsForView",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Whether the requesting application supports both My Drives and shared drives.",
            "in": "query",
            "name": "supportsAllDrives",
            "schema": {
              "type": "boolean"
            }
          },
          {
            "description": "Deprecated use supportsAllDrives instead.",
            "in": "query",
            "name": "supportsTeamDrives",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Channel"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Channel"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.appdata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.file"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.metadata.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.photos.readonly"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "files"
        ]
      }
    },
    "/teamdrives": {
      "get": {
        "description": "Deprecated use drives.list instead.",
        "operationId": "drive.teamdrives.list",
        "parameters": [
          {
            "description": "Maximum number of Team Drives to return.",
            "in": "query",
            "name": "pageSize",
            "schema": {
              "maximum": 100,
              "minimum": 1,
              "type": "integer"
            }
          },
          {
            "description": "Page token for Team Drives.",
            "in": "query",
            "name": "pageToken",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Query string for searching Team Drives.",
            "in": "query",
            "name": "q",
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TeamDriveList"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "teamdrives"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "post": {
        "description": "Deprecated use drives.create instead.",
        "operationId": "drive.teamdrives.create",
        "parameters": [
          {
            "description": "An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.",
            "in": "query",
            "name": "requestId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TeamDrive"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TeamDrive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "teamdrives"
        ]
      }
    },
    "/teamdrives/{teamDriveId}": {
      "delete": {
        "description": "Deprecated use drives.delete instead.",
        "operationId": "drive.teamdrives.delete",
        "parameters": [
          {
            "description": "The ID of the Team Drive",
            "in": "path",
            "name": "teamDriveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "teamdrives"
        ]
      },
      "get": {
        "description": "Deprecated use drives.get instead.",
        "operationId": "drive.teamdrives.get",
        "parameters": [
          {
            "description": "The ID of the Team Drive",
            "in": "path",
            "name": "teamDriveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TeamDrive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          },
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive.readonly"
            ]
          }
        ],
        "tags": [
          "teamdrives"
        ]
      },
      "parameters": [
        {
          "$ref": "#/components/parameters/alt"
        },
        {
          "$ref": "#/components/parameters/fields"
        },
        {
          "$ref": "#/components/parameters/key"
        },
        {
          "$ref": "#/components/parameters/oauth_token"
        },
        {
          "$ref": "#/components/parameters/prettyPrint"
        },
        {
          "$ref": "#/components/parameters/quotaUser"
        },
        {
          "$ref": "#/components/parameters/userIp"
        }
      ],
      "patch": {
        "description": "Deprecated use drives.update instead",
        "operationId": "drive.teamdrives.update",
        "parameters": [
          {
            "description": "The ID of the Team Drive",
            "in": "path",
            "name": "teamDriveId",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "description": "Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.",
            "in": "query",
            "name": "useDomainAdminAccess",
            "schema": {
              "type": "boolean"
            }
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/TeamDrive"
              }
            }
          }
        },
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/TeamDrive"
                }
              }
            },
            "description": "Successful response"
          }
        },
        "security": [
          {
            "oAuth": [
              "https://www.googleapis.com/auth/drive"
            ]
          }
        ],
        "tags": [
          "teamdrives"
        ]
      }
    }
  },
  "components": {
    "parameters": {
      "alt": {
        "description": "Data format for the response.",
        "in": "query",
        "name": "alt",
        "schema": {
          "enum": [
            "json"
          ],
          "type": "string"
        }
      },
      "fields": {
        "description": "Selector specifying which fields to include in a partial response.",
        "in": "query",
        "name": "fields",
        "schema": {
          "type": "string"
        }
      },
      "key": {
        "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
        "in": "query",
        "name": "key",
        "schema": {
          "type": "string"
        }
      },
      "oauth_token": {
        "description": "OAuth 2.0 token for the current user.",
        "in": "query",
        "name": "oauth_token",
        "schema": {
          "type": "string"
        }
      },
      "prettyPrint": {
        "description": "Returns response with indentations and line breaks.",
        "in": "query",
        "name": "prettyPrint",
        "schema": {
          "type": "boolean"
        }
      },
      "quotaUser": {
        "description": "An opaque string that represents a user for quota purposes. Must not exceed 40 characters.",
        "in": "query",
        "name": "quotaUser",
        "schema": {
          "type": "string"
        }
      },
      "userIp": {
        "description": "Deprecated. Please use quotaUser instead.",
        "in": "query",
        "name": "userIp",
        "schema": {
          "type": "string"
        }
      }
    },
    "schemas": {
      "About": {
        "description": "Information about the user, the user's Drive, and system capabilities.",
        "properties": {
          "appInstalled": {
            "description": "Whether the user has installed the requesting app.",
            "type": "boolean"
          },
          "canCreateDrives": {
            "description": "Whether the user can create shared drives.",
            "type": "boolean"
          },
          "canCreateTeamDrives": {
            "description": "Deprecated - use canCreateDrives instead.",
            "type": "boolean"
          },
          "driveThemes": {
            "description": "A list of themes that are supported for shared drives.",
            "items": {
              "properties": {
                "backgroundImageLink": {
                  "description": "A link to this theme's background image.",
                  "type": "string"
                },
                "colorRgb": {
                  "description": "The color of this theme as an RGB hex string.",
                  "type": "string"
                },
                "id": {
                  "description": "The ID of the theme.",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "type": "array"
          },
          "exportFormats": {
            "additionalProperties": {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "description": "A map of source MIME type to possible targets for all supported exports.",
            "type": "object"
          },
          "folderColorPalette": {
            "description": "The currently supported folder colors as RGB hex strings.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "importFormats": {
            "additionalProperties": {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            "description": "A map of source MIME type to possible targets for all supported imports.",
            "type": "object"
          },
          "kind": {
            "default": "drive#about",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#about\".",
            "type": "string"
          },
          "maxImportSizes": {
            "additionalProperties": {
              "format": "int64",
              "type": "string"
            },
            "description": "A map of maximum import sizes by MIME type, in bytes.",
            "type": "object"
          },
          "maxUploadSize": {
            "description": "The maximum upload size in bytes.",
            "format": "int64",
            "type": "string"
          },
          "storageQuota": {
            "description": "The user's storage quota limits and usage. All fields are measured in bytes.",
            "properties": {
              "limit": {
                "description": "The usage limit, if applicable. This will not be present if the user has unlimited storage.",
                "format": "int64",
                "type": "string"
              },
              "usage": {
                "description": "The total usage across all services.",
                "format": "int64",
                "type": "string"
              },
              "usageInDrive": {
                "description": "The usage by all files in Google Drive.",
                "format": "int64",
                "type": "string"
              },
              "usageInDriveTrash": {
                "description": "The usage by trashed files in Google Drive.",
                "format": "int64",
                "type": "string"
              }
            },
            "type": "object"
          },
          "teamDriveThemes": {
            "description": "Deprecated - use driveThemes instead.",
            "items": {
              "properties": {
                "backgroundImageLink": {
                  "description": "Deprecated - use driveThemes/backgroundImageLink instead.",
                  "type": "string"
                },
                "colorRgb": {
                  "description": "Deprecated - use driveThemes/colorRgb instead.",
                  "type": "string"
                },
                "id": {
                  "description": "Deprecated - use driveThemes/id instead.",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "type": "array"
          },
          "user": {
            "$ref": "#/components/schemas/User",
            "description": "The authenticated user."
          }
        },
        "type": "object"
      },
      "Change": {
        "description": "A change to a file or shared drive.",
        "properties": {
          "changeType": {
            "description": "The type of the change. Possible values are file and drive.",
            "type": "string"
          },
          "drive": {
            "$ref": "#/components/schemas/Drive",
            "description": "The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted."
          },
          "driveId": {
            "description": "The ID of the shared drive associated with this change.",
            "type": "string"
          },
          "file": {
            "$ref": "#/components/schemas/File",
            "description": "The updated state of the file. Present if the type is file and the file has not been removed from this list of changes."
          },
          "fileId": {
            "description": "The ID of the file which has changed.",
            "type": "string"
          },
          "kind": {
            "default": "drive#change",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#change\".",
            "type": "string"
          },
          "removed": {
            "description": "Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.",
            "type": "boolean"
          },
          "teamDrive": {
            "$ref": "#/components/schemas/TeamDrive",
            "description": "Deprecated - use drive instead."
          },
          "teamDriveId": {
            "description": "Deprecated - use driveId instead.",
            "type": "string"
          },
          "time": {
            "description": "The time of this change (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "type": {
            "description": "Deprecated - use changeType instead.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "ChangeList": {
        "description": "A list of changes for a user.",
        "properties": {
          "changes": {
            "description": "The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Change"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#changeList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#changeList\".",
            "type": "string"
          },
          "newStartPageToken": {
            "description": "The starting page token for future changes. This will be present only if the end of the current changes list has been reached.",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Channel": {
        "description": "An notification channel used to watch for resource changes.",
        "properties": {
          "address": {
            "description": "The address where notifications are delivered for this channel.",
            "type": "string"
          },
          "expiration": {
            "description": "Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.",
            "format": "int64",
            "type": "string"
          },
          "id": {
            "description": "A UUID or similar unique string that identifies this channel.",
            "type": "string"
          },
          "kind": {
            "default": "api#channel",
            "description": "Identifies this as a notification channel used to watch for changes to a resource, which is \"api#channel\".",
            "type": "string"
          },
          "params": {
            "additionalProperties": {
              "description": "Declares a new parameter by name.",
              "type": "string"
            },
            "description": "Additional parameters controlling delivery channel behavior. Optional.",
            "type": "object"
          },
          "payload": {
            "description": "A Boolean value to indicate whether payload is wanted. Optional.",
            "type": "boolean"
          },
          "resourceId": {
            "description": "An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.",
            "type": "string"
          },
          "resourceUri": {
            "description": "A version-specific identifier for the watched resource.",
            "type": "string"
          },
          "token": {
            "description": "An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.",
            "type": "string"
          },
          "type": {
            "description": "The type of delivery mechanism used for this channel. Valid values are \"web_hook\" (or \"webhook\"). Both values refer to a channel where Http requests are used to deliver messages.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Comment": {
        "description": "A comment on a file.",
        "properties": {
          "anchor": {
            "description": "A region of the document represented as a JSON string. For details on defining anchor properties, refer to  Add comments and replies.",
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/User",
            "description": "The author of the comment. The author's email address and permission ID will not be populated."
          },
          "content": {
            "description": "The plain text content of the comment. This field is used for setting the content, while htmlContent should be displayed.",
            "type": "string"
          },
          "createdTime": {
            "description": "The time at which the comment was created (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "deleted": {
            "description": "Whether the comment has been deleted. A deleted comment has no content.",
            "type": "boolean"
          },
          "htmlContent": {
            "description": "The content of the comment with HTML formatting.",
            "type": "string"
          },
          "id": {
            "description": "The ID of the comment.",
            "type": "string"
          },
          "kind": {
            "default": "drive#comment",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#comment\".",
            "type": "string"
          },
          "modifiedTime": {
            "description": "The last time the comment or any of its replies was modified (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "quotedFileContent": {
            "description": "The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment.",
            "properties": {
              "mimeType": {
                "description": "The MIME type of the quoted content.",
                "type": "string"
              },
              "value": {
                "description": "The quoted content itself. This is interpreted as plain text if set through the API.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "replies": {
            "description": "The full list of replies to the comment in chronological order.",
            "items": {
              "$ref": "#/components/schemas/Reply"
            },
            "type": "array"
          },
          "resolved": {
            "description": "Whether the comment has been resolved by one of its replies.",
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "CommentList": {
        "description": "A list of comments on a file.",
        "properties": {
          "comments": {
            "description": "The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Comment"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#commentList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#commentList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "ContentRestriction": {
        "description": "A restriction for accessing the content of the file.",
        "properties": {
          "readOnly": {
            "description": "Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified.",
            "type": "boolean"
          },
          "reason": {
            "description": "Reason for why the content of the file is restricted. This is only mutable on requests that also set readOnly=true.",
            "type": "string"
          },
          "restrictingUser": {
            "$ref": "#/components/schemas/User",
            "description": "The user who set the content restriction. Only populated if readOnly is true."
          },
          "restrictionTime": {
            "description": "The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true.",
            "format": "date-time",
            "type": "string"
          },
          "type": {
            "description": "The type of the content restriction. Currently the only possible value is globalContentRestriction.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Drive": {
        "description": "Representation of a shared drive.",
        "properties": {
          "backgroundImageFile": {
            "description": "An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.",
            "properties": {
              "id": {
                "description": "The ID of an image file in Google Drive to use for the background image.",
                "type": "string"
              },
              "width": {
                "description": "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.",
                "format": "float",
                "type": "number"
              },
              "xCoordinate": {
                "description": "The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.",
                "format": "float",
                "type": "number"
              },
              "yCoordinate": {
                "description": "The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.",
                "format": "float",
                "type": "number"
              }
            },
            "type": "object"
          },
          "backgroundImageLink": {
            "description": "A short-lived link to this shared drive's background image.",
            "type": "string"
          },
          "capabilities": {
            "description": "Capabilities the current user has on this shared drive.",
            "properties": {
              "canAddChildren": {
                "description": "Whether the current user can add children to folders in this shared drive.",
                "type": "boolean"
              },
              "canChangeCopyRequiresWriterPermissionRestriction": {
                "description": "Whether the current user can change the copyRequiresWriterPermission restriction of this shared drive.",
                "type": "boolean"
              },
              "canChangeDomainUsersOnlyRestriction": {
                "description": "Whether the current user can change the domainUsersOnly restriction of this shared drive.",
                "type": "boolean"
              },
              "canChangeDriveBackground": {
                "description": "Whether the current user can change the background of this shared drive.",
                "type": "boolean"
              },
              "canChangeDriveMembersOnlyRestriction": {
                "description": "Whether the current user can change the driveMembersOnly restriction of this shared drive.",
                "type": "boolean"
              },
              "canComment": {
                "description": "Whether the current user can comment on files in this shared drive.",
                "type": "boolean"
              },
              "canCopy": {
                "description": "Whether the current user can copy files in this shared drive.",
                "type": "boolean"
              },
              "canDeleteChildren": {
                "description": "Whether the current user can delete children from folders in this shared drive.",
                "type": "boolean"
              },
              "canDeleteDrive": {
                "description": "Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive.",
                "type": "boolean"
              },
              "canDownload": {
                "description": "Whether the current user can download files in this shared drive.",
                "type": "boolean"
              },
              "canEdit": {
                "description": "Whether the current user can edit files in this shared drive",
                "type": "boolean"
              },
              "canListChildren": {
                "description": "Whether the current user can list the children of folders in this shared drive.",
                "type": "boolean"
              },
              "canManageMembers": {
                "description": "Whether the current user can add members to this shared drive or remove them or change their role.",
                "type": "boolean"
              },
              "canReadRevisions": {
                "description": "Whether the current user can read the revisions resource of files in this shared drive.",
                "type": "boolean"
              },
              "canRename": {
                "description": "Whether the current user can rename files or folders in this shared drive.",
                "type": "boolean"
              },
              "canRenameDrive": {
                "description": "Whether the current user can rename this shared drive.",
                "type": "boolean"
              },
              "canResetDriveRestrictions": {
                "description": "Whether the current user can reset the shared drive restrictions to defaults.",
                "type": "boolean"
              },
              "canShare": {
                "description": "Whether the current user can share files or folders in this shared drive.",
                "type": "boolean"
              },
              "canTrashChildren": {
                "description": "Whether the current user can trash children from folders in this shared drive.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "colorRgb": {
            "description": "The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.",
            "type": "string"
          },
          "createdTime": {
            "description": "The time at which the shared drive was created (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "hidden": {
            "description": "Whether the shared drive is hidden from default view.",
            "type": "boolean"
          },
          "id": {
            "description": "The ID of this shared drive which is also the ID of the top level folder of this shared drive.",
            "type": "string"
          },
          "kind": {
            "default": "drive#drive",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#drive\".",
            "type": "string"
          },
          "name": {
            "description": "The name of this shared drive.",
            "type": "string"
          },
          "orgUnitId": {
            "description": "The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true.",
            "type": "string"
          },
          "restrictions": {
            "description": "A set of restrictions that apply to this shared drive or items inside this shared drive.",
            "properties": {
              "adminManagedRestrictions": {
                "description": "Whether administrative privileges on this shared drive are required to modify restrictions.",
                "type": "boolean"
              },
              "copyRequiresWriterPermission": {
                "description": "Whether the options to copy, print, or download files inside this shared drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this shared drive.",
                "type": "boolean"
              },
              "domainUsersOnly": {
                "description": "Whether access to this shared drive and items inside this shared drive is restricted to users of the domain to which this shared drive belongs. This restriction may be overridden by other sharing policies controlled outside of this shared drive.",
                "type": "boolean"
              },
              "driveMembersOnly": {
                "description": "Whether access to items inside this shared drive is restricted to its members.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "themeId": {
            "description": "The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "DriveList": {
        "description": "A list of shared drives.",
        "properties": {
          "drives": {
            "description": "The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Drive"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#driveList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#driveList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "File": {
        "description": "The metadata for a file.",
        "properties": {
          "appProperties": {
            "additionalProperties": {
              "type": "string"
            },
            "description": "A collection of arbitrary key-value pairs which are private to the requesting app.\nEntries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID. You cannot use an API key to retrieve private properties.",
            "type": "object"
          },
          "capabilities": {
            "description": "Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.",
            "properties": {
              "canAcceptOwnership": {
                "description": "Whether the current user is the pending owner of the file. Not populated for shared drive files.",
                "type": "boolean"
              },
              "canAddChildren": {
                "description": "Whether the current user can add children to this folder. This is always false when the item is not a folder.",
                "type": "boolean"
              },
              "canAddFolderFromAnotherDrive": {
                "description": "Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                "type": "boolean"
              },
              "canAddMyDriveParent": {
                "description": "Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files.",
                "type": "boolean"
              },
              "canChangeCopyRequiresWriterPermission": {
                "description": "Whether the current user can change the copyRequiresWriterPermission restriction of this file.",
                "type": "boolean"
              },
              "canChangeSecurityUpdateEnabled": {
                "description": "Whether the current user can change the securityUpdateEnabled field on link share metadata.",
                "type": "boolean"
              },
              "canChangeViewersCanCopyContent": {
                "description": "Deprecated",
                "type": "boolean"
              },
              "canComment": {
                "description": "Whether the current user can comment on this file.",
                "type": "boolean"
              },
              "canCopy": {
                "description": "Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder.",
                "type": "boolean"
              },
              "canDelete": {
                "description": "Whether the current user can delete this file.",
                "type": "boolean"
              },
              "canDeleteChildren": {
                "description": "Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                "type": "boolean"
              },
              "canDownload": {
                "description": "Whether the current user can download this file.",
                "type": "boolean"
              },
              "canEdit": {
                "description": "Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see canChangeCopyRequiresWriterPermission or canModifyContent.",
                "type": "boolean"
              },
              "canListChildren": {
                "description": "Whether the current user can list the children of this folder. This is always false when the item is not a folder.",
                "type": "boolean"
              },
              "canModifyContent": {
                "description": "Whether the current user can modify the content of this file.",
                "type": "boolean"
              },
              "canModifyContentRestriction": {
                "description": "Whether the current user can modify restrictions on content of this file.",
                "type": "boolean"
              },
              "canModifyLabels": {
                "description": "Whether the current user can modify the labels on this file.",
                "type": "boolean"
              },
              "canMoveChildrenOutOfDrive": {
                "description": "Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives.",
                "type": "boolean"
              },
              "canMoveChildrenOutOfTeamDrive": {
                "description": "Deprecated - use canMoveChildrenOutOfDrive instead.",
                "type": "boolean"
              },
              "canMoveChildrenWithinDrive": {
                "description": "Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user's access to the child and to the destination folder.",
                "type": "boolean"
              },
              "canMoveChildrenWithinTeamDrive": {
                "description": "Deprecated - use canMoveChildrenWithinDrive instead.",
                "type": "boolean"
              },
              "canMoveItemIntoTeamDrive": {
                "description": "Deprecated - use canMoveItemOutOfDrive instead.",
                "type": "boolean"
              },
              "canMoveItemOutOfDrive": {
                "description": "Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added.",
                "type": "boolean"
              },
              "canMoveItemOutOfTeamDrive": {
                "description": "Deprecated - use canMoveItemOutOfDrive instead.",
                "type": "boolean"
              },
              "canMoveItemWithinDrive": {
                "description": "Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed.",
                "type": "boolean"
              },
              "canMoveItemWithinTeamDrive": {
                "description": "Deprecated - use canMoveItemWithinDrive instead.",
                "type": "boolean"
              },
              "canMoveTeamDriveItem": {
                "description": "Deprecated - use canMoveItemWithinDrive or canMoveItemOutOfDrive instead.",
                "type": "boolean"
              },
              "canReadDrive": {
                "description": "Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives.",
                "type": "boolean"
              },
              "canReadLabels": {
                "description": "Whether the current user can read the labels on this file.",
                "type": "boolean"
              },
              "canReadRevisions": {
                "description": "Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read.",
                "type": "boolean"
              },
              "canReadTeamDrive": {
                "description": "Deprecated - use canReadDrive instead.",
                "type": "boolean"
              },
              "canRemoveChildren": {
                "description": "Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use canDeleteChildren or canTrashChildren instead.",
                "type": "boolean"
              },
              "canRemoveMyDriveParent": {
                "description": "Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files.",
                "type": "boolean"
              },
              "canRename": {
                "description": "Whether the current user can rename this file.",
                "type": "boolean"
              },
              "canShare": {
                "description": "Whether the current user can modify the sharing settings for this file.",
                "type": "boolean"
              },
              "canTrash": {
                "description": "Whether the current user can move this file to trash.",
                "type": "boolean"
              },
              "canTrashChildren": {
                "description": "Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives.",
                "type": "boolean"
              },
              "canUntrash": {
                "description": "Whether the current user can restore this file from trash.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "contentHints": {
            "description": "Additional information about the content of the file. These fields are never populated in responses.",
            "properties": {
              "indexableText": {
                "description": "Text to be indexed for the file to improve fullText queries. This is limited to 128KB in length and may contain HTML elements.",
                "type": "string"
              },
              "thumbnail": {
                "description": "A thumbnail for the file. This will only be used if Google Drive cannot generate a standard thumbnail.",
                "properties": {
                  "image": {
                    "description": "The thumbnail data encoded with URL-safe Base64 (RFC 4648 section 5).",
                    "format": "byte",
                    "type": "string"
                  },
                  "mimeType": {
                    "description": "The MIME type of the thumbnail.",
                    "type": "string"
                  }
                },
                "type": "object"
              }
            },
            "type": "object"
          },
          "contentRestrictions": {
            "description": "Restrictions for accessing the content of the file. Only populated if such a restriction exists.",
            "items": {
              "$ref": "#/components/schemas/ContentRestriction"
            },
            "type": "array"
          },
          "copyRequiresWriterPermission": {
            "description": "Whether the options to copy, print, or download this file, should be disabled for readers and commenters.",
            "type": "boolean"
          },
          "createdTime": {
            "description": "The time at which the file was created (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "description": {
            "description": "A short description of the file.",
            "type": "string"
          },
          "driveId": {
            "description": "ID of the shared drive the file resides in. Only populated for items in shared drives.",
            "type": "string"
          },
          "explicitlyTrashed": {
            "description": "Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder.",
            "type": "boolean"
          },
          "exportLinks": {
            "additionalProperties": {
              "description": "A mapping from export format to URL",
              "type": "string"
            },
            "description": "Links for exporting Docs Editors files to specific formats.",
            "readOnly": true,
            "type": "object"
          },
          "fileExtension": {
            "description": "The final component of fullFileExtension. This is only available for files with binary content in Google Drive.",
            "type": "string"
          },
          "folderColorRgb": {
            "description": "The color for a folder or shortcut to a folder as an RGB hex string. The supported colors are published in the folderColorPalette field of the About resource.\nIf an unsupported color is specified, the closest color in the palette will be used instead.",
            "type": "string"
          },
          "fullFileExtension": {
            "description": "The full file extension extracted from the name field. May contain multiple concatenated extensions, such as \"tar.gz\". This is only available for files with binary content in Google Drive.\nThis is automatically updated when the name field changes, however it is not cleared if the new name does not contain a valid extension.",
            "type": "string"
          },
          "hasAugmentedPermissions": {
            "description": "Whether there are permissions directly on this file. This field is only populated for items in shared drives.",
            "type": "boolean"
          },
          "hasThumbnail": {
            "description": "Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.",
            "type": "boolean"
          },
          "headRevisionId": {
            "description": "The ID of the file's head revision. This is currently only available for files with binary content in Google Drive.",
            "type": "string"
          },
          "iconLink": {
            "description": "A static, unauthenticated link to the file's icon.",
            "type": "string"
          },
          "id": {
            "description": "The ID of the file.",
            "type": "string"
          },
          "imageMediaMetadata": {
            "description": "Additional metadata about image media, if available.",
            "properties": {
              "aperture": {
                "description": "The aperture used to create the photo (f-number).",
                "format": "float",
                "type": "number"
              },
              "cameraMake": {
                "description": "The make of the camera used to create the photo.",
                "type": "string"
              },
              "cameraModel": {
                "description": "The model of the camera used to create the photo.",
                "type": "string"
              },
              "colorSpace": {
                "description": "The color space of the photo.",
                "type": "string"
              },
              "exposureBias": {
                "description": "The exposure bias of the photo (APEX value).",
                "format": "float",
                "type": "number"
              },
              "exposureMode": {
                "description": "The exposure mode used to create the photo.",
                "type": "string"
              },
              "exposureTime": {
                "description": "The length of the exposure, in seconds.",
                "format": "float",
                "type": "number"
              },
              "flashUsed": {
                "description": "Whether a flash was used to create the photo.",
                "type": "boolean"
              },
              "focalLength": {
                "description": "The focal length used to create the photo, in millimeters.",
                "format": "float",
                "type": "number"
              },
              "height": {
                "description": "The height of the image in pixels.",
                "format": "int32",
                "type": "integer"
              },
              "isoSpeed": {
                "description": "The ISO speed used to create the photo.",
                "format": "int32",
                "type": "integer"
              },
              "lens": {
                "description": "The lens used to create the photo.",
                "type": "string"
              },
              "location": {
                "description": "Geographic location information stored in the image.",
                "properties": {
                  "altitude": {
                    "description": "The altitude stored in the image.",
                    "format": "double",
                    "type": "number"
                  },
                  "latitude": {
                    "description": "The latitude stored in the image.",
                    "format": "double",
                    "type": "number"
                  },
                  "longitude": {
                    "description": "The longitude stored in the image.",
                    "format": "double",
                    "type": "number"
                  }
                },
                "type": "object"
              },
              "maxApertureValue": {
                "description": "The smallest f-number of the lens at the focal length used to create the photo (APEX value).",
                "format": "float",
                "type": "number"
              },
              "meteringMode": {
                "description": "The metering mode used to create the photo.",
                "type": "string"
              },
              "rotation": {
                "description": "The number of clockwise 90 degree rotations applied from the image's original orientation.",
                "format": "int32",
                "type": "integer"
              },
              "sensor": {
                "description": "The type of sensor used to create the photo.",
                "type": "string"
              },
              "subjectDistance": {
                "description": "The distance to the subject of the photo, in meters.",
                "format": "int32",
                "type": "integer"
              },
              "time": {
                "description": "The date and time the photo was taken (EXIF DateTime).",
                "type": "string"
              },
              "whiteBalance": {
                "description": "The white balance mode used to create the photo.",
                "type": "string"
              },
              "width": {
                "description": "The width of the image in pixels.",
                "format": "int32",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "isAppAuthorized": {
            "description": "Whether the file was created or opened by the requesting app.",
            "type": "boolean"
          },
          "kind": {
            "default": "drive#file",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#file\".",
            "type": "string"
          },
          "labelInfo": {
            "description": "An overview of the labels on the file.",
            "properties": {
              "labels": {
                "description": "The set of labels on the file as requested by the label IDs in the includeLabels parameter. By default, no labels are returned.",
                "items": {
                  "$ref": "#/components/schemas/Label"
                },
                "type": "array"
              }
            },
            "type": "object"
          },
          "lastModifyingUser": {
            "$ref": "#/components/schemas/User",
            "description": "The last user to modify the file."
          },
          "linkShareMetadata": {
            "description": "Contains details about the link URLs that clients are using to refer to this item.",
            "properties": {
              "securityUpdateEligible": {
                "description": "Whether the file is eligible for security update.",
                "type": "boolean"
              },
              "securityUpdateEnabled": {
                "description": "Whether the security update is enabled for this file.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "md5Checksum": {
            "description": "The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive.",
            "type": "string"
          },
          "mimeType": {
            "description": "The MIME type of the file.\nGoogle Drive will attempt to automatically detect an appropriate value from uploaded content if no value is provided. The value cannot be changed unless a new revision is uploaded.\nIf a file is created with a Google Doc MIME type, the uploaded content will be imported if possible. The supported import formats are published in the About resource.",
            "type": "string"
          },
          "modifiedByMe": {
            "description": "Whether the file has been modified by this user.",
            "type": "boolean"
          },
          "modifiedByMeTime": {
            "description": "The last time the file was modified by the user (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "modifiedTime": {
            "description": "The last time the file was modified by anyone (RFC 3339 date-time).\nNote that setting modifiedTime will also update modifiedByMeTime for the user.",
            "format": "date-time",
            "type": "string"
          },
          "name": {
            "description": "The name of the file. This is not necessarily unique within a folder. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the name is constant.",
            "type": "string"
          },
          "originalFilename": {
            "description": "The original filename of the uploaded content if available, or else the original value of the name field. This is only available for files with binary content in Google Drive.",
            "type": "string"
          },
          "ownedByMe": {
            "description": "Whether the user owns the file. Not populated for items in shared drives.",
            "type": "boolean"
          },
          "owners": {
            "description": "The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives.",
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "type": "array"
          },
          "parents": {
            "description": "The IDs of the parent folders which contain the file.\nIf not specified as part of a create request, the file will be placed directly in the user's My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests must use the addParents and removeParents parameters to modify the parents list.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "permissionIds": {
            "description": "List of permission IDs for users with access to this file.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "permissions": {
            "description": "The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives.",
            "items": {
              "$ref": "#/components/schemas/Permission"
            },
            "type": "array"
          },
          "properties": {
            "additionalProperties": {
              "type": "string"
            },
            "description": "A collection of arbitrary key-value pairs which are visible to all apps.\nEntries with null values are cleared in update and copy requests.",
            "type": "object"
          },
          "quotaBytesUsed": {
            "description": "The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with keepForever enabled.",
            "format": "int64",
            "type": "string"
          },
          "resourceKey": {
            "description": "A key needed to access the item via a shared link.",
            "type": "string"
          },
          "sha1Checksum": {
            "description": "The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
            "type": "string"
          },
          "sha256Checksum": {
            "description": "The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it is not populated for Docs Editors or shortcut files.",
            "type": "string"
          },
          "shared": {
            "description": "Whether the file has been shared. Not populated for items in shared drives.",
            "type": "boolean"
          },
          "sharedWithMeTime": {
            "description": "The time at which the file was shared with the user, if applicable (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "sharingUser": {
            "$ref": "#/components/schemas/User",
            "description": "The user who shared the file with the requesting user, if applicable."
          },
          "shortcutDetails": {
            "description": "Shortcut file details. Only populated for shortcut files, which have the mimeType field set to application/vnd.google-apps.shortcut.",
            "properties": {
              "targetId": {
                "description": "The ID of the file that this shortcut points to.",
                "type": "string"
              },
              "targetMimeType": {
                "description": "The MIME type of the file that this shortcut points to. The value of this field is a snapshot of the target's MIME type, captured when the shortcut is created.",
                "type": "string"
              },
              "targetResourceKey": {
                "description": "The ResourceKey for the target file.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "size": {
            "description": "The size of the file's content in bytes. This is applicable to binary files in Google Drive and Google Docs files.",
            "format": "int64",
            "type": "string"
          },
          "spaces": {
            "description": "The list of spaces which contain the file. The currently supported values are 'drive', 'appDataFolder' and 'photos'.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "starred": {
            "description": "Whether the user has starred the file.",
            "type": "boolean"
          },
          "teamDriveId": {
            "description": "Deprecated - use driveId instead.",
            "type": "string"
          },
          "thumbnailLink": {
            "description": "A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Only populated when the requesting app can access the file's content. If the file isn't shared publicly, the URL returned in Files.thumbnailLink must be fetched using a credentialed request.",
            "type": "string"
          },
          "thumbnailVersion": {
            "description": "The thumbnail version for use in thumbnail cache invalidation.",
            "format": "int64",
            "type": "string"
          },
          "trashed": {
            "description": "Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file. The trashed item is excluded from all files.list responses returned for any user who does not own the file. However, all users with access to the file can see the trashed item metadata in an API response. All users with access can copy, download, export, and share the file.",
            "type": "boolean"
          },
          "trashedTime": {
            "description": "The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives.",
            "format": "date-time",
            "type": "string"
          },
          "trashingUser": {
            "$ref": "#/components/schemas/User",
            "description": "If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives."
          },
          "version": {
            "description": "A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user.",
            "format": "int64",
            "type": "string"
          },
          "videoMediaMetadata": {
            "description": "Additional metadata about video media. This may not be available immediately upon upload.",
            "properties": {
              "durationMillis": {
                "description": "The duration of the video in milliseconds.",
                "format": "int64",
                "type": "string"
              },
              "height": {
                "description": "The height of the video in pixels.",
                "format": "int32",
                "type": "integer"
              },
              "width": {
                "description": "The width of the video in pixels.",
                "format": "int32",
                "type": "integer"
              }
            },
            "type": "object"
          },
          "viewedByMe": {
            "description": "Whether the file has been viewed by this user.",
            "type": "boolean"
          },
          "viewedByMeTime": {
            "description": "The last time the file was viewed by the user (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "viewersCanCopyContent": {
            "description": "Deprecated - use copyRequiresWriterPermission instead.",
            "type": "boolean"
          },
          "webContentLink": {
            "description": "A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive.",
            "type": "string"
          },
          "webViewLink": {
            "description": "A link for opening the file in a relevant Google editor or viewer in a browser.",
            "type": "string"
          },
          "writersCanShare": {
            "description": "Whether users with only writer permission can modify the file's permissions. Not populated for items in shared drives.",
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "FileList": {
        "description": "A list of files.",
        "properties": {
          "files": {
            "description": "The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/File"
            },
            "type": "array"
          },
          "incompleteSearch": {
            "description": "Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the \"allDrives\" corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as \"user\" or \"drive\".",
            "type": "boolean"
          },
          "kind": {
            "default": "drive#fileList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#fileList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "GeneratedIds": {
        "description": "A list of generated file IDs which can be provided in create requests.",
        "properties": {
          "ids": {
            "description": "The IDs generated for the requesting user in the specified space.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#generatedIds",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#generatedIds\".",
            "type": "string"
          },
          "space": {
            "description": "The type of file that can be created with these IDs.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "Label": {
        "description": "Representation of a label and its fields.",
        "properties": {
          "fields": {
            "additionalProperties": {
              "$ref": "#/components/schemas/LabelField"
            },
            "description": "A map of the label's fields keyed by the field ID.",
            "type": "object"
          },
          "id": {
            "description": "The ID of the label.",
            "type": "string"
          },
          "kind": {
            "default": "drive#label",
            "description": "This is always drive#label",
            "type": "string"
          },
          "revisionId": {
            "description": "The revision ID of the label.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "LabelField": {
        "description": "Representation of a label field.",
        "properties": {
          "dateString": {
            "description": "Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD.",
            "items": {
              "format": "date",
              "type": "string"
            },
            "type": "array"
          },
          "id": {
            "description": "The identifier of this field.",
            "type": "string"
          },
          "integer": {
            "description": "Only present if valueType is integer.",
            "items": {
              "format": "int64",
              "type": "string"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#labelField",
            "description": "This is always drive#labelField.",
            "type": "string"
          },
          "selection": {
            "description": "Only present if valueType is selection.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "text": {
            "description": "Only present if valueType is text.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "user": {
            "description": "Only present if valueType is user.",
            "items": {
              "$ref": "#/components/schemas/User"
            },
            "type": "array"
          },
          "valueType": {
            "description": "The field type. While new values may be supported in the future, the following are currently allowed:  \n- dateString \n- integer \n- selection \n- text \n- user",
            "type": "string"
          }
        },
        "type": "object"
      },
      "LabelFieldModification": {
        "description": "A modification to a label's field.",
        "properties": {
          "fieldId": {
            "description": "The ID of the Field to be modified.",
            "type": "string"
          },
          "kind": {
            "default": "drive#labelFieldModification",
            "description": "This is always drive#labelFieldModification.",
            "type": "string"
          },
          "setDateValues": {
            "description": "Replaces a dateString field with these new values. The values must be strings in the RFC 3339 full-date format: YYYY-MM-DD.",
            "items": {
              "format": "date",
              "type": "string"
            },
            "type": "array"
          },
          "setIntegerValues": {
            "description": "Replaces an integer field with these new values.",
            "items": {
              "format": "int64",
              "type": "string"
            },
            "type": "array"
          },
          "setSelectionValues": {
            "description": "Replaces a selection field with these new values.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "setTextValues": {
            "description": "Replaces a text field with these new values.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "setUserValues": {
            "description": "Replaces a user field with these new values. The values must be valid email addresses.",
            "items": {
              "type": "string"
            },
            "type": "array"
          },
          "unsetValues": {
            "description": "Unsets the values for this field.",
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "LabelList": {
        "description": "A list of labels.",
        "properties": {
          "kind": {
            "default": "drive#labelList",
            "description": "This is always drive#labelList",
            "type": "string"
          },
          "labels": {
            "description": "The list of labels.",
            "items": {
              "$ref": "#/components/schemas/Label"
            },
            "type": "array"
          },
          "nextPageToken": {
            "description": "The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "LabelModification": {
        "description": "A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.",
        "properties": {
          "fieldModifications": {
            "description": "The list of modifications to this label's fields.",
            "items": {
              "$ref": "#/components/schemas/LabelFieldModification"
            },
            "type": "array"
          },
          "kind": {
            "default": "drive#labelModification",
            "description": "This is always drive#labelModification.",
            "type": "string"
          },
          "labelId": {
            "description": "The ID of the label to modify.",
            "type": "string"
          },
          "removeLabel": {
            "description": "If true, the label will be removed from the file.",
            "type": "boolean"
          }
        },
        "type": "object"
      },
      "ModifyLabelsRequest": {
        "description": "A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.",
        "properties": {
          "kind": {
            "default": "drive#modifyLabelsRequest",
            "description": "This is always drive#modifyLabelsRequest",
            "type": "string"
          },
          "labelModifications": {
            "description": "The list of modifications to apply to the labels on the file.",
            "items": {
              "$ref": "#/components/schemas/LabelModification"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "ModifyLabelsResponse": {
        "description": "Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.",
        "properties": {
          "kind": {
            "default": "drive#modifyLabelsResponse",
            "description": "This is always drive#modifyLabelsResponse",
            "type": "string"
          },
          "modifiedLabels": {
            "description": "The list of labels which were added or updated by the request.",
            "items": {
              "$ref": "#/components/schemas/Label"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "Permission": {
        "description": "A permission for a file. A permission grants a user, group, domain or the world access to a file or a folder hierarchy.",
        "properties": {
          "allowFileDiscovery": {
            "description": "Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type domain or anyone.",
            "type": "boolean"
          },
          "deleted": {
            "description": "Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.",
            "type": "boolean"
          },
          "displayName": {
            "description": "The \"pretty\" name of the value of the permission. The following is a list of examples for each type of permission:  \n- user - User's full name, as defined for their Google account, such as \"Joe Smith.\" \n- group - Name of the Google Group, such as \"The Company Administrators.\" \n- domain - String domain name, such as \"thecompany.com.\" \n- anyone - No displayName is present.",
            "type": "string"
          },
          "domain": {
            "description": "The domain to which this permission refers.",
            "type": "string"
          },
          "emailAddress": {
            "description": "The email address of the user or group to which this permission refers.",
            "type": "string"
          },
          "expirationTime": {
            "description": "The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions:  \n- They can only be set on user and group permissions \n- The time must be in the future \n- The time cannot be more than a year in the future",
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "description": "The ID of this permission. This is a unique identifier for the grantee, and is published in User resources as permissionId. IDs should be treated as opaque values.",
            "type": "string"
          },
          "kind": {
            "default": "drive#permission",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#permission\".",
            "type": "string"
          },
          "pendingOwner": {
            "description": "Whether the account associated with this permission is a pending owner. Only populated for user type permissions for files that are not in a shared drive.",
            "type": "boolean"
          },
          "permissionDetails": {
            "description": "Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.",
            "items": {
              "properties": {
                "inherited": {
                  "description": "Whether this permission is inherited. This field is always populated. This is an output-only field.",
                  "type": "boolean"
                },
                "inheritedFrom": {
                  "description": "The ID of the item from which this permission is inherited. This is an output-only field.",
                  "type": "string"
                },
                "permissionType": {
                  "description": "The permission type for this user. While new values may be added in future, the following are currently possible:  \n- file \n- member",
                  "type": "string"
                },
                "role": {
                  "description": "The primary role for this user. While new values may be added in the future, the following are currently possible:  \n- organizer \n- fileOrganizer \n- writer \n- commenter \n- reader",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "readOnly": true,
            "type": "array"
          },
          "photoLink": {
            "description": "A link to the user's profile photo, if available.",
            "type": "string"
          },
          "role": {
            "description": "The role granted by this permission. While new values may be supported in the future, the following are currently allowed:  \n- owner \n- organizer \n- fileOrganizer \n- writer \n- commenter \n- reader",
            "type": "string"
          },
          "teamDrivePermissionDetails": {
            "description": "Deprecated - use permissionDetails instead.",
            "items": {
              "properties": {
                "inherited": {
                  "description": "Deprecated - use permissionDetails/inherited instead.",
                  "type": "boolean"
                },
                "inheritedFrom": {
                  "description": "Deprecated - use permissionDetails/inheritedFrom instead.",
                  "type": "string"
                },
                "role": {
                  "description": "Deprecated - use permissionDetails/role instead.",
                  "type": "string"
                },
                "teamDrivePermissionType": {
                  "description": "Deprecated - use permissionDetails/permissionType instead.",
                  "type": "string"
                }
              },
              "type": "object"
            },
            "readOnly": true,
            "type": "array"
          },
          "type": {
            "description": "The type of the grantee. Valid values are:  \n- user \n- group \n- domain \n- anyone  When creating a permission, if type is user or group, you must provide an emailAddress for the user or group. When type is domain, you must provide a domain. There isn't extra information required for a anyone type.",
            "type": "string"
          },
          "view": {
            "description": "Indicates the view for this permission. Only populated for permissions that belong to a view. published is the only supported value.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "PermissionList": {
        "description": "A list of permissions for a file.",
        "properties": {
          "kind": {
            "default": "drive#permissionList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#permissionList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          },
          "permissions": {
            "description": "The list of permissions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Permission"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "Reply": {
        "description": "A reply to a comment on a file.",
        "properties": {
          "action": {
            "description": "The action the reply performed to the parent comment. Valid values are:  \n- resolve \n- reopen",
            "type": "string"
          },
          "author": {
            "$ref": "#/components/schemas/User",
            "description": "The author of the reply. The author's email address and permission ID will not be populated."
          },
          "content": {
            "description": "The plain text content of the reply. This field is used for setting the content, while htmlContent should be displayed. This is required on creates if no action is specified.",
            "type": "string"
          },
          "createdTime": {
            "description": "The time at which the reply was created (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "deleted": {
            "description": "Whether the reply has been deleted. A deleted reply has no content.",
            "type": "boolean"
          },
          "htmlContent": {
            "description": "The content of the reply with HTML formatting.",
            "type": "string"
          },
          "id": {
            "description": "The ID of the reply.",
            "type": "string"
          },
          "kind": {
            "default": "drive#reply",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#reply\".",
            "type": "string"
          },
          "modifiedTime": {
            "description": "The last time the reply was modified (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          }
        },
        "type": "object"
      },
      "ReplyList": {
        "description": "A list of replies to a comment on a file.",
        "properties": {
          "kind": {
            "default": "drive#replyList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#replyList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          },
          "replies": {
            "description": "The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Reply"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "Revision": {
        "description": "The metadata for a revision to a file.",
        "properties": {
          "exportLinks": {
            "additionalProperties": {
              "description": "A mapping from export format to URL",
              "type": "string"
            },
            "description": "Links for exporting Docs Editors files to specific formats.",
            "type": "object"
          },
          "id": {
            "description": "The ID of the revision.",
            "type": "string"
          },
          "keepForever": {
            "description": "Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file.\nThis field is only applicable to files with binary content in Drive.",
            "type": "boolean"
          },
          "kind": {
            "default": "drive#revision",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#revision\".",
            "type": "string"
          },
          "lastModifyingUser": {
            "$ref": "#/components/schemas/User",
            "description": "The last user to modify this revision."
          },
          "md5Checksum": {
            "description": "The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive.",
            "type": "string"
          },
          "mimeType": {
            "description": "The MIME type of the revision.",
            "type": "string"
          },
          "modifiedTime": {
            "description": "The last time the revision was modified (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "originalFilename": {
            "description": "The original filename used to create this revision. This is only applicable to files with binary content in Drive.",
            "type": "string"
          },
          "publishAuto": {
            "description": "Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files.",
            "type": "boolean"
          },
          "published": {
            "description": "Whether this revision is published. This is only applicable to Docs Editors files.",
            "type": "boolean"
          },
          "publishedLink": {
            "description": "A link to the published revision. This is only populated for Google Sites files.",
            "type": "string"
          },
          "publishedOutsideDomain": {
            "description": "Whether this revision is published outside the domain. This is only applicable to Docs Editors files.",
            "type": "boolean"
          },
          "size": {
            "description": "The size of the revision's content in bytes. This is only applicable to files with binary content in Drive.",
            "format": "int64",
            "type": "string"
          }
        },
        "type": "object"
      },
      "RevisionList": {
        "description": "A list of revisions of a file.",
        "properties": {
          "kind": {
            "default": "drive#revisionList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#revisionList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          },
          "revisions": {
            "description": "The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/Revision"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "StartPageToken": {
        "properties": {
          "kind": {
            "default": "drive#startPageToken",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#startPageToken\".",
            "type": "string"
          },
          "startPageToken": {
            "description": "The starting page token for listing changes.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "TeamDrive": {
        "description": "Deprecated: use the drive collection instead.",
        "properties": {
          "backgroundImageFile": {
            "description": "An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don't set themeId. When specified, all fields of the backgroundImageFile must be set.",
            "properties": {
              "id": {
                "description": "The ID of an image file in Drive to use for the background image.",
                "type": "string"
              },
              "width": {
                "description": "The width of the cropped image in the closed range of 0 to 1. This value represents the width of the cropped image divided by the width of the entire image. The height is computed by applying a width to height aspect ratio of 80 to 9. The resulting image must be at least 1280 pixels wide and 144 pixels high.",
                "format": "float",
                "type": "number"
              },
              "xCoordinate": {
                "description": "The X coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the horizontal distance from the left side of the entire image to the left side of the cropping area divided by the width of the entire image.",
                "format": "float",
                "type": "number"
              },
              "yCoordinate": {
                "description": "The Y coordinate of the upper left corner of the cropping area in the background image. This is a value in the closed range of 0 to 1. This value represents the vertical distance from the top side of the entire image to the top side of the cropping area divided by the height of the entire image.",
                "format": "float",
                "type": "number"
              }
            },
            "type": "object"
          },
          "backgroundImageLink": {
            "description": "A short-lived link to this Team Drive's background image.",
            "type": "string"
          },
          "capabilities": {
            "description": "Capabilities the current user has on this Team Drive.",
            "properties": {
              "canAddChildren": {
                "description": "Whether the current user can add children to folders in this Team Drive.",
                "type": "boolean"
              },
              "canChangeCopyRequiresWriterPermissionRestriction": {
                "description": "Whether the current user can change the copyRequiresWriterPermission restriction of this Team Drive.",
                "type": "boolean"
              },
              "canChangeDomainUsersOnlyRestriction": {
                "description": "Whether the current user can change the domainUsersOnly restriction of this Team Drive.",
                "type": "boolean"
              },
              "canChangeTeamDriveBackground": {
                "description": "Whether the current user can change the background of this Team Drive.",
                "type": "boolean"
              },
              "canChangeTeamMembersOnlyRestriction": {
                "description": "Whether the current user can change the teamMembersOnly restriction of this Team Drive.",
                "type": "boolean"
              },
              "canComment": {
                "description": "Whether the current user can comment on files in this Team Drive.",
                "type": "boolean"
              },
              "canCopy": {
                "description": "Whether the current user can copy files in this Team Drive.",
                "type": "boolean"
              },
              "canDeleteChildren": {
                "description": "Whether the current user can delete children from folders in this Team Drive.",
                "type": "boolean"
              },
              "canDeleteTeamDrive": {
                "description": "Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive.",
                "type": "boolean"
              },
              "canDownload": {
                "description": "Whether the current user can download files in this Team Drive.",
                "type": "boolean"
              },
              "canEdit": {
                "description": "Whether the current user can edit files in this Team Drive",
                "type": "boolean"
              },
              "canListChildren": {
                "description": "Whether the current user can list the children of folders in this Team Drive.",
                "type": "boolean"
              },
              "canManageMembers": {
                "description": "Whether the current user can add members to this Team Drive or remove them or change their role.",
                "type": "boolean"
              },
              "canReadRevisions": {
                "description": "Whether the current user can read the revisions resource of files in this Team Drive.",
                "type": "boolean"
              },
              "canRemoveChildren": {
                "description": "Deprecated - use canDeleteChildren or canTrashChildren instead.",
                "type": "boolean"
              },
              "canRename": {
                "description": "Whether the current user can rename files or folders in this Team Drive.",
                "type": "boolean"
              },
              "canRenameTeamDrive": {
                "description": "Whether the current user can rename this Team Drive.",
                "type": "boolean"
              },
              "canResetTeamDriveRestrictions": {
                "description": "Whether the current user can reset the Team Drive restrictions to defaults.",
                "type": "boolean"
              },
              "canShare": {
                "description": "Whether the current user can share files or folders in this Team Drive.",
                "type": "boolean"
              },
              "canTrashChildren": {
                "description": "Whether the current user can trash children from folders in this Team Drive.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "colorRgb": {
            "description": "The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.",
            "type": "string"
          },
          "createdTime": {
            "description": "The time at which the Team Drive was created (RFC 3339 date-time).",
            "format": "date-time",
            "type": "string"
          },
          "id": {
            "description": "The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.",
            "type": "string"
          },
          "kind": {
            "default": "drive#teamDrive",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#teamDrive\".",
            "type": "string"
          },
          "name": {
            "description": "The name of this Team Drive.",
            "type": "string"
          },
          "orgUnitId": {
            "description": "The organizational unit of this shared drive. This field is only populated on drives.list responses when the useDomainAdminAccess parameter is set to true.",
            "type": "string"
          },
          "restrictions": {
            "description": "A set of restrictions that apply to this Team Drive or items inside this Team Drive.",
            "properties": {
              "adminManagedRestrictions": {
                "description": "Whether administrative privileges on this Team Drive are required to modify restrictions.",
                "type": "boolean"
              },
              "copyRequiresWriterPermission": {
                "description": "Whether the options to copy, print, or download files inside this Team Drive, should be disabled for readers and commenters. When this restriction is set to true, it will override the similarly named field to true for any file inside this Team Drive.",
                "type": "boolean"
              },
              "domainUsersOnly": {
                "description": "Whether access to this Team Drive and items inside this Team Drive is restricted to users of the domain to which this Team Drive belongs. This restriction may be overridden by other sharing policies controlled outside of this Team Drive.",
                "type": "boolean"
              },
              "teamMembersOnly": {
                "description": "Whether access to items inside this Team Drive is restricted to members of this Team Drive.",
                "type": "boolean"
              }
            },
            "type": "object"
          },
          "themeId": {
            "description": "The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.create request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don't set colorRgb or backgroundImageFile.",
            "type": "string"
          }
        },
        "type": "object"
      },
      "TeamDriveList": {
        "description": "A list of Team Drives.",
        "properties": {
          "kind": {
            "default": "drive#teamDriveList",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#teamDriveList\".",
            "type": "string"
          },
          "nextPageToken": {
            "description": "The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.",
            "type": "string"
          },
          "teamDrives": {
            "description": "The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.",
            "items": {
              "$ref": "#/components/schemas/TeamDrive"
            },
            "type": "array"
          }
        },
        "type": "object"
      },
      "User": {
        "description": "Information about a Drive user.",
        "properties": {
          "displayName": {
            "description": "A plain text displayable name for this user.",
            "type": "string"
          },
          "emailAddress": {
            "description": "The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester.",
            "type": "string"
          },
          "kind": {
            "default": "drive#user",
            "description": "Identifies what kind of resource this is. Value: the fixed string \"drive#user\".",
            "type": "string"
          },
          "me": {
            "description": "Whether this user is the requesting user.",
            "type": "boolean"
          },
          "permissionId": {
            "description": "The user's ID as visible in Permission resources.",
            "type": "string"
          },
          "photoLink": {
            "description": "A link to the user's profile photo, if available.",
            "type": "string"
          }
        },
        "type": "object"
      }
    },
    "securitySchemes": {
      "oAuth": {
        "type": "oauth2",
        "description": "Oauth 2.0 authentication",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://accounts.google.com/o/oauth2/auth",
            "scopes": {
              "https://www.googleapis.com/auth/drive": "See, edit, create, and delete all of your Google Drive files",
              "https://www.googleapis.com/auth/drive.appdata": "See, create, and delete its own configuration data in your Google Drive",
              "https://www.googleapis.com/auth/drive.file": "See, edit, create, and delete only the specific Google Drive files you use with this app",
              "https://www.googleapis.com/auth/drive.metadata": "View and manage metadata of files in your Google Drive",
              "https://www.googleapis.com/auth/drive.metadata.readonly": "See information about your Google Drive files",
              "https://www.googleapis.com/auth/drive.photos.readonly": "View the photos, videos and albums in your Google Photos",
              "https://www.googleapis.com/auth/drive.readonly": "See and download all your Google Drive files",
              "https://www.googleapis.com/auth/drive.scripts": "Modify your Google Apps Script scripts' behavior"
            }
          },
          "authorizationCode": {
            "authorizationUrl": "https://accounts.google.com/o/oauth2/auth",
            "scopes": {
              "https://www.googleapis.com/auth/drive": "See, edit, create, and delete all of your Google Drive files",
              "https://www.googleapis.com/auth/drive.appdata": "See, create, and delete its own configuration data in your Google Drive",
              "https://www.googleapis.com/auth/drive.file": "See, edit, create, and delete only the specific Google Drive files you use with this app",
              "https://www.googleapis.com/auth/drive.metadata": "View and manage metadata of files in your Google Drive",
              "https://www.googleapis.com/auth/drive.metadata.readonly": "See information about your Google Drive files",
              "https://www.googleapis.com/auth/drive.photos.readonly": "View the photos, videos and albums in your Google Photos",
              "https://www.googleapis.com/auth/drive.readonly": "See and download all your Google Drive files",
              "https://www.googleapis.com/auth/drive.scripts": "Modify your Google Apps Script scripts' behavior"
            },
            "tokenUrl": "https://accounts.google.com/o/oauth2/token"
          }
        }
      }
    }
  }
} as const;
