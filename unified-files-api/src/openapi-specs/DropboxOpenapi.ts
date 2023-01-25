export default {
  "openapi": "3.0.3",
  "info": {
    "title": "Dropbox v2 REST API",
    "description": "Dropbox's v2 REST API.",
    "termsOfService": "https://www.dropbox.com/developers/reference/tos",
    "version": "1.0.0",
    "contact": {
      "name": "Support",
      "url": "https://www.dropbox.com/developers/contact"
    }
  },
  "externalDocs": {
    "description": "Dropbox Developer Docs",
    "url": "https://www.dropbox.com/developers/documentation"
  },
  "servers": [
    {
      "url": "https://api.dropboxapi.com/2"
    }
  ],
  "paths": {
    "/files/get_metadata": {
      "post": {
        "summary": "Files - Get Metadata",
        "description": "Returns the metadata for a file or folder.\nNote: Metadata for the root folder is unsupported.",
        "operationId": "FilesGetMetadata",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/GetMetadataRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/GetMetadataResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/GetMetadataErrorResponse"
          }
        }
      }
    },
    "/files/list_folder": {
      "post": {
        "summary": "Files - List Folder",
        "description": "Starts returning the contents of a folder. If the result's :field:`ListFolderResult.has_more` field is :val:`true`, call :route:`list_folder/continue` with the returned :field:`ListFolderResult.cursor` to retrieve more entries.\nIf you're using :field:`ListFolderArg.recursive` set to :val:`true` to keep a local cache of the contents of a Dropbox account, iterate through each entry in order and process them as follows to keep your local state in sync:\nFor each :type:`FileMetadata`, store the new entry at the given path in your local state. If the required parent folders don't exist yet, create them. If there's already something else at the given path, replace it and remove all its children.\nFor each :type:`FolderMetadata`, store the new entry at the given path in your local state. If the required parent folders don't exist yet, create them. If there's already something else at the given path, replace it but leave the children as they are. Check the new entry's :field:`FolderSharingInfo.read_only` and set all its children's read-only statuses to match.\nFor each :type:`DeletedMetadata`, if your local state has something at the given path, remove it and all its children. If there's nothing at the given path, ignore this entry.\nNote: :type:`auth.RateLimitError` may be returned if multiple :route:`list_folder` or :route:`list_folder/continue` calls with same parameters are made simultaneously by same API app for same user. If your app implements retry logic, please hold off the retry until the previous request finishes.",
        "operationId": "FilesListFolder",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ListFolderRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/ListFolderResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/ListFolderErrorResponse"
          }
        }
      }
    },
    "/files/list_folder/continue": {
      "post": {
        "summary": "Files - List Folder - Continue",
        "description": "Once a cursor has been retrieved from list_folder, use this to paginate through all files and retrieve updates to the folder, following the same rules as documented for list_folder.",
        "operationId": "FilesListFolderContinue",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ListFolderContinueRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/ListFolderResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/ListFolderErrorResponse"
          }
        }
      }
    },
    "/files/list_folder/get_latest_cursor": {
      "post": {
        "summary": "Files - List Folder - Get Latest Cursor",
        "description": "A way to quickly get a cursor for the folder's state.\nUnlike list_folder, list_folder/get_latest_cursor doesn't return any entries.\nThis endpoint is for app which only needs to know about new files and modifications and doesn't need to know about files that already exist in Dropbox.\n",
        "operationId": "FilesListFolderGetLatestCursor",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ListFolderRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/ListFolderGetLatestCursorResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/ListFolderErrorResponse"
          }
        }
      }
    },
    "/files/list_folder/longpoll": {
      "post": {
        "servers": [
          {
            "url": "https://notify.dropboxapi.com/2/"
          }
        ],
        "summary": "Files - List Folder - Longpoll",
        "description": "A longpoll endpoint to wait for changes on an account.\nIn conjunction with :route:`list_folder/continue`, this call gives you a low-latency way to monitor an account for file changes.\nThe connection will block until there are changes available or a timeout occurs. This endpoint is useful mostly for client-side apps.\nIf you're looking for server-side notifications, check out our :link:`webhooks documentation https://www.dropbox.com/developers/reference/webhooks`.\n",
        "operationId": "FilesListFolderLongpoll",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/ListFolderLongPollRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/ListFolderLongpollResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/ListFolderLongpollErrorResponse"
          }
        }
      }
    },
    "/files/search_v2": {
      "post": {
        "summary": "Files - Search",
        "description": "Searches for files and folders.\nNote: search:2 along with search/continue:2 can only be used to retrieve a maximum of 10,000 matches.\nRecent changes may not immediately be reflected in search results due to a short delay in indexing. Duplicate results may be returned across pages. Some results may not be returned.\n",
        "operationId": "FilesSearch",
        "security": [
          {
            "oAuth": [
              "files.metadata.read"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/SearchV2RequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/SearchV2ResultResponse"
          },
          "default": {
            "$ref": "#/components/responses/SearchErrorResponse"
          }
        }
      }
    },
    "/sharing/add_file_member": {
      "post": {
        "description": "Adds specified members to a file.",
        "operationId": "AddFileMember",
        "security": [
          {
            "oAuth": [
              "sharing.write"
            ]
          }
        ],
        "requestBody": {
          "$ref": "#/components/requestBodies/AddFileMemberRequestBody"
        },
        "responses": {
          "200": {
            "$ref": "#/components/responses/AddFileMemberResponse"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Metadata": {
        "allOf": [
          {
            "type": "object",
            "properties": {
              ".tag": {
                "type": "string"
              }
            }
          },
          {
            "type": "object",
            "anyOf": [
              {
                "$ref": "#/components/schemas/FileMetadata"
              },
              {
                "$ref": "#/components/schemas/FolderMetadata"
              },
              {
                "$ref": "#/components/schemas/DeletedMetadata"
              }
            ]
          }
        ]
      },
      "FileMetadata": {
        "type": "object",
        "description": "Metadata for a file.",
        "properties": {
          "name": {
            "type": "string",
            "description": "The last component of the path (including extension). This never contains a slash."
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "A unique identifier for the file."
          },
          "client_modified": {
            "type": "string",
            "format": "date-time",
            "description": "For files, this is the modification time set by the desktop client when the file was added to Dropbox. Since this time is not verified (the Dropbox server stores whatever the desktop client sends up), this should only be used for display purposes (such as sorting) and not, for example, to determine if a file has changed or not."
          },
          "server_modified": {
            "type": "string",
            "format": "date-time",
            "description": "The last time the file was modified on Dropbox."
          },
          "rev": {
            "type": "string",
            "minLength": 9,
            "pattern": "^[0-9a-f]+$",
            "description": "A unique identifier for the current revision of a file. This field is the same rev as elsewhere in the API and can be used to detect changes and avoid conflicts."
          },
          "size": {
            "type": "integer",
            "description": "The file size in bytes."
          },
          "path_lower": {
            "type": "string",
            "nullable": true,
            "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."
          },
          "path_display": {
            "type": "string",
            "nullable": true,
            "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by list_folder/continue. This field will be null if the file or folder is not mounted."
          },
          "parent_shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."
          },
          "media_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/MediaInfo"
              }
            ],
            "description": "Additional information if the file is a photo or video. This field will not be set on entries returned by list_folder, list_folder/continue, or get_thumbnail_batch, starting December 2, 2019."
          },
          "symlink_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SymlinkInfo"
              }
            ],
            "description": "Set if this file is a symlink."
          },
          "sharing_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FileSharingInfo"
              }
            ],
            "description": "Set if this file is contained in a shared folder."
          },
          "is_downloadable": {
            "type": "boolean",
            "description": "If true, file can be downloaded directly; else the file must be exported. The default for this field is True."
          },
          "export_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/ExportInfo"
              }
            ],
            "description": "Information about format this file can be exported to. This filed must be set if is_downloadable is set to false."
          },
          "property_groups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PropertyGroup"
            },
            "description": "Additional information if the file has custom properties with the property template specified."
          },
          "has_explicit_shared_members": {
            "type": "boolean",
            "description": "This flag will only be present if include_has_explicit_shared_members is true in list_folder or get_metadata. If this flag is present, it will be true if this file has any explicit shared members. This is different from sharing_info in that this could be true in the case where a file has explicit members but is not contained within a shared folder."
          },
          "content_hash": {
            "type": "string",
            "minLength": 64,
            "maxLength": 64,
            "description": "A hash of the file content. This field can be used to verify data integrity. For more information see our Content hash page."
          },
          "file_lock_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FileLockMetadata"
              }
            ],
            "description": "If present, the metadata associated with the file's current lock."
          }
        }
      },
      "FolderMetadata": {
        "type": "object",
        "description": "Metadata for a folder.",
        "properties": {
          "name": {
            "type": "string",
            "description": "The last component of the path (including extension). This never contains a slash."
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "A unique identifier for the file."
          },
          "path_lower": {
            "type": "string",
            "nullable": true,
            "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."
          },
          "path_display": {
            "type": "string",
            "nullable": true,
            "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted."
          },
          "parent_shared_folder_id": {
            "type": "string",
            "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."
          },
          "shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "Field is deprecated. Please use sharing_info instead."
          },
          "sharing_info": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FolderSharingInfo"
              }
            ],
            "description": "Set if the folder is contained in a shared folder or is a shared folder mount point."
          },
          "property_groups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PropertyGroup"
            },
            "description": "Additional information if the file has custom properties with the property template specified."
          }
        }
      },
      "DeletedMetadata": {
        "type": "object",
        "description": "Metadata for a deleted file or folder.",
        "properties": {
          "name": {
            "type": "string",
            "description": "The last component of the path (including extension). This never contains a slash."
          },
          "path_lower": {
            "type": "string",
            "nullable": true,
            "description": "The lowercased full path in the user's Dropbox. This always starts with a slash. This field will be null if the file or folder is not mounted."
          },
          "path_display": {
            "type": "string",
            "nullable": true,
            "description": "The cased path to be used for display purposes only. In rare instances the casing will not correctly match the user's filesystem, but this behavior will match the path provided in the Core API v1, and at least the last path component will have the correct casing. Changes to only the casing of paths won't be returned by :route:`list_folder/continue`. This field will be null if the file or folder is not mounted."
          },
          "parent_shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "Please use :field:`FileSharingInfo.parent_shared_folder_id` or :field:`FolderSharingInfo.parent_shared_folder_id` instead."
          }
        }
      },
      "MediaInfo": {
        "type": "object",
        "properties": {
          ".tag": {
            "type": "string",
            "title": "Choice of MediaInfo",
            "enum": [
              "pending",
              "metadata"
            ]
          },
          "metadata": {
            "$ref": "#/components/schemas/MediaMetadata"
          }
        },
        "description": "pending: Indicate the photo/video is still under processing and metadata is not available yet.\nmetadata: The metadata for the photo/video.\n"
      },
      "MediaMetadata": {
        "type": "object",
        "properties": {
          "dimensions": {
            "$ref": "#/components/schemas/Dimensions"
          },
          "location": {
            "$ref": "#/components/schemas/GpsCoordinates"
          },
          "time_taken": {
            "type": "string",
            "description": "The timestamp when the photo/video is taken."
          }
        },
        "description": "Metadata for a photo or video.\ndimensions: Dimension of the photo/video.\nlocation: The GPS coordinate of the photo/video.\ntime_taken: The timestamp when the photo/video is taken.\n"
      },
      "Dimensions": {
        "type": "object",
        "properties": {
          "width": {
            "type": "number",
            "description": "Width of the photo/video."
          },
          "height": {
            "type": "number",
            "description": "Height of the photo/video."
          }
        },
        "description": "Dimensions for a photo or video.\nheight: Height of the photo/video.\nwidth: Width of the photo/video.\n"
      },
      "GpsCoordinates": {
        "type": "object",
        "properties": {
          "latitude": {
            "type": "number",
            "description": "Latitude of the GPS coordinates."
          },
          "longitude": {
            "type": "number",
            "description": "Longitude of the GPS coordinates."
          }
        },
        "description": "GPS coordinates for a photo or video.\nlatitude: Latitude of the GPS coordinates.\nlongitude: Longitude of the GPS coordinates.\n"
      },
      "SymlinkInfo": {
        "type": "object",
        "properties": {
          "target": {
            "type": "string",
            "description": "The target this symlink points to."
          }
        },
        "description": "target: The target this symlink points to.\n"
      },
      "FileSharingInfo": {
        "type": "object",
        "properties": {
          "read_only": {
            "type": "boolean",
            "description": "True if the file or folder is inside a read-only shared folder."
          },
          "parent_shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "ID of shared folder that holds this file."
          },
          "modified_by": {
            "type": "string",
            "nullable": true,
            "description": "The last user who modified the file. This field will be null if the user's account has been deleted."
          }
        },
        "description": "Sharing info for a file which is contained by a shared folder."
      },
      "FolderSharingInfo": {
        "type": "object",
        "properties": {
          "read_only": {
            "type": "boolean",
            "description": "True if the file or folder is inside a read-only shared folder."
          },
          "parent_shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "Set if the folder is contained by a shared folder."
          },
          "shared_folder_id": {
            "type": "string",
            "pattern": "^[-_0-9a-zA-Z:]+$",
            "description": "If this folder is a shared folder mount point, the ID of the shared folder mounted at this location."
          },
          "traverse_only": {
            "type": "boolean",
            "description": "Specifies that the folder can only be traversed and the user can only see a limited subset of the contents of this folder because they don't have read access to this folder. They do, however, have access to some sub folder."
          },
          "no_access": {
            "type": "boolean",
            "description": "Specifies that the folder cannot be accessed by the user."
          }
        },
        "description": "Sharing info for a folder which is contained in a shared folder or is a shared folder mount point."
      },
      "ExportInfo": {
        "type": "object",
        "properties": {
          "export_as": {
            "type": "string",
            "description": "Format to which the file can be exported to."
          },
          "export_options": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Additional formats to which the file can be exported. These values can be specified as the export_format in /files/export."
          }
        },
        "description": "Export information for a file."
      },
      "PropertyGroup": {
        "type": "object",
        "properties": {
          "template_id": {
            "type": "string",
            "minLength": 1,
            "pattern": "^(/|ptid:).*$",
            "description": "A unique identifier for the associated template."
          },
          "fields": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/PropertyField"
            }
          }
        },
        "description": "A subset of the property fields described by the corresponding :type:`PropertyGroupTemplate`. Properties are always added to a Dropbox file as a :type:`PropertyGroup`. The possible key names and value types in this group are defined by the corresponding :type:`PropertyGroupTemplate`.\ntemplate_id: A unique identifier for the associated template.\nfields: The actual properties associated with the template. There can be up to 32 property types per template.\n"
      },
      "PropertyField": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "description": "Key of the property field associated with a file and template. Keys can be up to 256 bytes."
          },
          "value": {
            "type": "string",
            "description": "Value of the property field associated with a file and template. Values can be up to 1024 bytes."
          }
        },
        "description": "Raw key/value data to be associated with a Dropbox file. Property fields are added to Dropbox files as a :type:`PropertyGroup`.\nname: Key of the property field associated with a file and template. Keys can be up to 256 bytes.\nvalue: Value of the property field associated with a file and template. Values can be up to 1024 bytes.\n"
      },
      "FileLockMetadata": {
        "type": "object",
        "properties": {
          "is_lockholder": {
            "type": "boolean",
            "description": "True if caller holds the file lock."
          },
          "lockholder_name": {
            "type": "string",
            "description": "The display name of the lock holder."
          },
          "lockholder_account_id": {
            "type": "string",
            "minLength": 40,
            "maxLength": 40,
            "description": "The account ID of the lock holder if known."
          },
          "created": {
            "type": "string",
            "format": "date-time",
            "description": "The timestamp of the lock was created."
          }
        }
      },
      "SharedLink": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "description": "Shared link url."
          },
          "password": {
            "type": "string",
            "description": "Password for the shared link."
          }
        }
      },
      "SearchOptions": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "pattern": "^(/(.|[\\r\\n])*)?|id:.*|(ns:[0-9]+(/.*)?)$",
            "description": "Scopes the search to a path in the user's Dropbox. Searches the entire Dropbox if not specified."
          },
          "max_results": {
            "type": "number",
            "minimum": 1,
            "maximum": 1000,
            "description": "The maximum number of search results to return. The default for this field is 100."
          },
          "order_by": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SearchOrderBy"
              }
            ],
            "description": "Specified property of the order of search results. By default, results are sorted by relevance."
          },
          "file_status": {
            "allOf": [
              {
                "$ref": "#/components/schemas/FileStatus"
              }
            ],
            "description": "Restricts search to the given file status. The default for this union is active."
          },
          "filename_only": {
            "type": "boolean",
            "description": "Restricts search to only match on filenames. The default for this field is False."
          },
          "file_extensions": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Restricts search to only the extensions specified. Only supported for active file search."
          },
          "file_categories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/FileCategory"
            },
            "description": "Restricts search to only the file categories specified. Only supported for active file search."
          }
        }
      },
      "FileStatus": {
        "type": "string",
        "enum": [
          "active",
          "deleted"
        ],
        "description": "The value will be one of the following datatypes. New values may be introduced as our API evolves."
      },
      "FileCategory": {
        "type": "string",
        "enum": [
          "image",
          "document",
          "pdf",
          "spreadsheet",
          "presentation",
          "audio",
          "video",
          "folder",
          "paper",
          "others"
        ],
        "description": "The value will be one of the following datatypes. New values may be introduced as our API evolves."
      },
      "SearchOrderBy": {
        "type": "string",
        "enum": [
          "relevance",
          "last_modified_time"
        ],
        "description": "The value will be one of the following datatypes. New values may be introduced as our API evolves."
      },
      "SearchMatchFieldOptions": {
        "type": "object",
        "properties": {
          "include_highlights": {
            "type": "boolean",
            "description": "Whether to include highlight span from file title. The default for this field is False."
          }
        }
      },
      "SearchMatchV2": {
        "type": "object",
        "properties": {
          "metadata": {
            "allOf": [
              {
                "$ref": "#/components/schemas/MetadataV2"
              }
            ],
            "description": "The metadata for the matched file or folder."
          },
          "match_type": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SearchMatchTypeV2"
              }
            ],
            "description": "The type of the match."
          },
          "highlight_spans": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/HighlightSpan"
            },
            "description": "The list of HighlightSpan determines which parts of the file title should be highlighted."
          }
        }
      },
      "MetadataV2": {
        "$ref": "#/components/schemas/Metadata"
      },
      "SearchMatchTypeV2": {
        "type": "string",
        "enum": [
          "filename",
          "file_content",
          "filename_and_content",
          "image_content"
        ]
      },
      "HighlightSpan": {
        "type": "object",
        "properties": {
          "highlight_str": {
            "type": "string",
            "description": "String to be determined whether it should be highlighted or not."
          },
          "is_highlighted": {
            "type": "boolean",
            "description": "The string should be highlighted or not."
          }
        }
      },
      "TemplateFilterBase": {
        "anyOf": [
          {
            "type": "array",
            "minItems": 1,
            "items": {
              "type": "string",
              "minLength": 1,
              "pattern": "^(/|ptid:).*$"
            },
            "description": "Only templates with an ID in the supplied list will be returned (a subset of templates will be returned)."
          }
        ]
      },
      "ListFolderResult": {
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "Pass the cursor into :route:`list_folder/continue` to see what's changed in the folder since your previous query."
          },
          "has_more": {
            "type": "boolean",
            "description": "If true, then there are more entries available. Pass the cursor to :route:`list_folder/continue` to retrieve the rest."
          },
          "entries": {
            "type": "array",
            "description": "The files and (direct) subfolders in the folder.",
            "items": {
              "$ref": "#/components/schemas/Metadata"
            }
          }
        }
      },
      "ListFolderGetLatestCursorResult": {
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "minLength": 1,
            "description": "Pass the cursor into :route:`list_folder/continue` to see what's changed in the folder since your previous query."
          }
        }
      },
      "ListFolderLongpollResult": {
        "type": "object",
        "properties": {
          "changes": {
            "type": "boolean",
            "description": "Indicates whether new changes are available. If true, call :route:`list_folder/continue` to retrieve the changes."
          },
          "backoff": {
            "type": "number",
            "description": "If present, backoff for at least this many seconds before calling :route:`list_folder/longpoll` again."
          }
        }
      },
      "SearchV2Result": {
        "type": "object",
        "properties": {
          "matches": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/SearchMatchV2"
            },
            "description": "A list (possibly empty) of matches for the query."
          },
          "has_more": {
            "type": "boolean",
            "description": "Used for paging. If true, indicates there is another page of results available that can be fetched by calling search/continue:2 with the cursor."
          },
          "cursor": {
            "type": "string",
            "minLength": 1,
            "description": "Pass the cursor into search/continue:2 to fetch the next page of results."
          }
        }
      },
      "GetMetadataResult": {
        "anyOf": [
          {
            "$ref": "#/components/schemas/FileMetadata"
          },
          {
            "$ref": "#/components/schemas/FolderMetadata"
          },
          {
            "$ref": "#/components/schemas/DeletedMetadata"
          }
        ]
      },
      "ListFolderError": {
        "type": "object"
      },
      "ListFolderLongpollError": {
        "type": "object"
      },
      "SearchError": {
        "type": "object"
      },
      "GetMetadataError": {
        "type": "object"
      },
      "LookupError": {
        "type": "object"
      },
      "SearchV2Arg": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "maxLength": 1000,
            "description": "The string to search for. May match across multiple fields based on the request arguments."
          },
          "options": {
            "$ref": "#/components/schemas/SearchOptions"
          },
          "match_field_options": {
            "$ref": "#/components/schemas/SearchMatchFieldOptions"
          }
        }
      },
      "ListFolderLongPollArg": {
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "minLength": 1,
            "description": "A cursor as returned by :route:`list_folder` or :route:`list_folder/continue`. Cursors retrieved by setting :field:`ListFolderArg.include_media_info` to :val:`true` are not supported."
          },
          "timeout": {
            "type": "number",
            "minimum": 30,
            "maximum": 490,
            "description": "A timeout in seconds. The request will block for at most this length of time, plus up to 90 seconds of random jitter added to avoid the thundering herd problem. Care should be taken when using this parameter, as some network infrastructure does not support long timeouts."
          }
        }
      },
      "ListFolderContinueArg": {
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "The cursor returned by your last call to :route:`list_folder` or :route:`list_folder/continue`."
          }
        },
        "description": "cursor: The cursor returned by your last call to :route:`list_folder` or :route:`list_folder/continue`.\n"
      },
      "ListFolderArg": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "description": "A unique identifier for the file."
          },
          "recursive": {
            "type": "boolean",
            "description": "If true, the list folder operation will be applied recursively to all subfolders and the response will contain contents of all subfolders."
          },
          "include_media_info": {
            "type": "boolean",
            "description": "If true, :field:`FileMetadata.media_info` is set for photo and video."
          },
          "include_deleted": {
            "type": "boolean",
            "description": "If true, the results will include entries for files and folders that used to exist but were deleted."
          },
          "include_has_explicit_shared_members": {
            "type": "boolean",
            "description": "If true, the results will include a flag for each file indicating whether or not  that file has any explicit members."
          },
          "include_mounted_folders": {
            "type": "boolean",
            "description": "If true, the results will include entries under mounted folders which includes app folder, shared folder and team folder."
          },
          "limit": {
            "type": "number",
            "description": "The maximum number of results to return per request. Note: This is an approximate number and there can be slightly more entries returned in some cases."
          },
          "shared_link": {
            "allOf": [
              {
                "$ref": "#/components/schemas/SharedLink"
              }
            ],
            "description": "A shared link to list the contents of. If the link is password-protected, the password must be provided. If this field is present, ListFolderArg.path will be relative to root of the shared link. Only non-recursive mode is supported for shared link."
          },
          "include_property_groups": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TemplateFilterBase"
              }
            ],
            "description": "If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates."
          },
          "include_non_downloadable_files": {
            "type": "boolean",
            "description": "If true, include files that are not downloadable, i.e. Google Docs. The default for this field is True."
          }
        }
      },
      "GetMetadataArg": {
        "type": "object",
        "properties": {
          "path": {
            "type": "string",
            "pattern": "^(/(.|[\r\n])*|id:.*)|(rev:[0-9a-f]{9,})|(ns:[0-9]+(/.*)?)$",
            "description": "The path of a file or folder on Dropbox."
          },
          "include_media_info": {
            "type": "boolean",
            "description": "If true, FileMetadata.media_info is set for photo and video. The default for this field is False."
          },
          "include_deleted": {
            "type": "boolean",
            "description": "If true, DeletedMetadata will be returned for deleted file or folder, otherwise LookupError.not_found will be returned. The default for this field is False."
          },
          "include_has_explicit_shared_members": {
            "type": "boolean",
            "description": "If true, the results will include a flag for each file indicating whether or not that file has any explicit members. The default for this field is False."
          },
          "include_property_groups": {
            "allOf": [
              {
                "$ref": "#/components/schemas/TemplateFilterBase"
              }
            ],
            "description": "If set to a valid list of template IDs, FileMetadata.property_groups is set if there exists property data associated with the file and each of the listed templates."
          }
        }
      },
      "AddFileMemberArg": {
        "type": "object",
        "properties": {
          "file": {
            "description": "File to which to add members.",
            "type": "string",
            "minLength": 1
          },
          "members": {
            "description": "Members to add. Note that even an email address is given, this may result in a user being directly added to the membership if that email is the user's main account email.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MemberSelector"
            }
          },
          "custom_message": {
            "description": "Message to send to added members in their invitation.",
            "type": "string"
          },
          "access_level": {
            "$ref": "#/components/schemas/AccessLevel"
          },
          "add_message_as_comment": {
            "type": "boolean"
          }
        },
        "required": ["file", "members"]
      },
      "MemberSelector": {
        "type": "object",
        "properties": {
          "dropbox_id": {
            "description": "Dropbox account, team member, or group ID of member.",
            "type": "string",
            "minLength": 1
          },
          "email": {
            "description": "Email address of member",
            "type": "string",
            "minLength": 1
          }
        }
      },
      "AccessLevel": {
        "type": "string",
        "enum": [
          "owner",
          "editor",
          "viewer",
          "viewer_no_comment",
          "traverse"
        ]
      },
      "AddFileMemberResult": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "member": {
              "$ref": "#/components/schemas/MemberSelector",
            },
            "result": {
              "$ref": "#components/schemas/FileMemberActionIndividualResult"
            }
          }
        }
      },
      "FileMemberActionIndividualResult": {
        "type": "object",
        "properties": {
          "success": {
            "description": "Part of the response for both add_file_member and remove_file_member_v1 (deprecated). For add_file_member, indicates giving access was successful and at what AccessLevel. For remove_file_member_v1, indicates member was successfully removed from the file. If AccessLevel is given, the member still has access via a parent shared folder.",
            "$ref": "#/components/schemas/AccessLevel"
          },
          "member_error": {
            "description": "User was not able to perform this action.",
            "oneOf": [
              {
                "type": "string",
                "enum": [
                  "invalid_member",
                  "no_permission"
                ]
              },
              { "$ref": "#/components/schemas/SharingFileAccessError" },
              { "$ref": "#/components/schemas/MemberAccessLevelResult" }
            ]
          },
          "sckey_sha1": {
            "description": "The SHA-1 encrypted shared content key.",
            "type": "string"
          },
          "invitation_signature": {
            "description": "The sharing sender-recipient invitation signatures for the input member_id. A member_id can be a group and thus have multiple users and multiple invitation signatures.",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
        }
      },
      "SharingFileAccessError": {
        "type": "string",
        "enum": ["no_permission", "invalid_file", "is_folder", "inside_public_folder", "inside_osx_package"]
      },
      "MemberAccessLevelResult": {
        "type": "object",
        "properties": {
          "access_level": {
            "$ref": "#/components/schemas/AccessLevel"
          },
          "warning": {
            "type": "string"
          },
          "access_details": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/ParentFolderAccessInfo"
            }
          }
        }
      },
      "ParentFolderAccessInfo": {
        "type": "object",
        "properties": {
          "folder_name": {
            "description": "Display name for the folder.",
            "type": "string"
          },
          "shared_folder_id": {
            "description": "The identifier of the parent shared folder.",
            "type": "string"
          },
          "permissions": {
            "description": "The user's permissions for the parent shared folder.",
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/MemberPermission"
            }
          },
          "path": {
            "description": "The full path to the parent shared folder relative to the acting user's root.",
            "type": "string"
          }
        }
      },
      "MemberPermission": {
        "type": "object",
        "properties": {
          "action": {
            "$ref": "#/components/schemas/MemberAction"
          },
          "allow": {
            "description": "True if the user is allowed to take the action.",
            "type": "boolean"
          },
          "reason": {
            "$ref": "#/components/schemas/PermissionDeniedReason"
          }
        }
      },
      "MemberAction": {
        "type": "string",
        "enum": ["leave_a_copy", "make_editor", "make_owner", "make_viewer", "make_viewer_no_comment", "remove"]
      },
      "PermissionDeniedReason": {
        "oneOf": [
          {
            "type": "string",
            "enum": [
              "user_not_same_team_as_owner",
              "user_not_allowed_by_owner",
              "target_is_indirect_member",
              "target_is_owner",
              "target_is_self",
              "target_not_active",
              "folder_is_limited_team_folder",
              "owner_not_on_team",
              "permission_denied",
              "restricted_by_team",
              "user_account_type",
              "user_not_on_team",
              "folder_is_inside_shared_folder",
              "restricted_by_parent_folder",
            ]
          },
          { "$ref": "#/components/schemas/InsufficientPlan" }
        ]
      },
      "InsufficientPlan": {
        "type": "object",
        "properties": {
          "message": {
            "description": "A message to tell the user to upgrade in order to support expected action.",
            "type": "string"
          },
          "upsell_url": {
            "description": "A URL to send the user to in order to obtain the account type they need, e.g. upgrading. Absent if there is no action the user can take to upgrade.",
            "type": "string"
          }
        }
      }
    },
    "requestBodies": {
      "ListFolderRequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderArg"
            }
          }
        }
      },
      "ListFolderContinueRequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderContinueArg"
            }
          }
        }
      },
      "ListFolderLongPollRequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderLongPollArg"
            }
          }
        }
      },
      "SearchV2RequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/SearchV2Arg"
            }
          }
        }
      },
      "GetMetadataRequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GetMetadataArg"
            }
          }
        }
      },
      "AddFileMemberRequestBody": {
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AddFileMemberArg"
            }
          }
        }
      }
    },
    "responses": {
      "ListFolderErrorResponse": {
        "description": "Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderError"
            }
          }
        }
      },
      "ListFolderResultResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderResult"
            }
          }
        }
      },
      "ListFolderGetLatestCursorResultResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderGetLatestCursorResult"
            }
          }
        }
      },
      "ListFolderLongpollResultResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderLongpollResult"
            }
          }
        }
      },
      "ListFolderLongpollErrorResponse": {
        "description": "Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/ListFolderLongpollError"
            }
          }
        }
      },
      "SearchV2ResultResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/SearchV2Result"
            }
          }
        }
      },
      "SearchErrorResponse": {
        "description": "Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/SearchError"
            }
          }
        }
      },
      "GetMetadataResultResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GetMetadataResult"
            }
          }
        }
      },
      "GetMetadataErrorResponse": {
        "description": "Error",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/GetMetadataError"
            }
          }
        }
      },
      "AddFileMemberResponse": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/AddFileMemberResult"
            }
          }
        }
      }
    },
    "securitySchemes": {
      "oAuth": {
        "type": "oauth2",
        "description": "This API uses OAuth 2 with the implicit grant flow. [More info](https://www.dropbox.com/developers/documentation/http/documentation#authorization)",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://www.dropbox.com/oauth2/authorize",
            "scopes": {
              "files.metadata.read": "Read files",
              "sharing.write": "Update sharing settings"
            }
          },
          "authorizationCode": {
            "authorizationUrl": "https://www.dropbox.com/oauth2/authorize",
            "tokenUrl": "https://api.dropboxapi.com/oauth2/token",
            "scopes": {
              "files.metadata.read": "Read files",
              "sharing.write": "Update sharing settings"
            }
          }
        }
      }
    }
  }
} as const;
