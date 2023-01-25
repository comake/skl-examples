import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';

dotenv.config();

import boxOpenapi from './openapi-specs/BoxOpenapi';
import dropboxOpenapi from './openapi-specs/DropboxOpenapi';
import googleDriveOpenapi from './openapi-specs/GoogleDriveOpenapi';

(async function(): Promise<void> {
  // Built our Standard SDK
  const standardSDK = StandardSDK.build({
    apiSpecs: {
      googledrive: { type: 'openapi', value: googleDriveOpenapi },
      box: { type: 'openapi', value: boxOpenapi },
      dropbox: { type: 'openapi', value: dropboxOpenapi },
    },
  });

  // Create a new Permission in Google Drive to share a file
  const googleDriveResponse = await standardSDK.googledrive['drive.permissions.create'](
    {
      fileId: 'abc123',
      role: 'writer',
      type: 'user',
      emailAddress: 'adler@example.com'
    },
    { accessToken: process.env.GOOGLE_DRIVE_ACCESS_TOKEN }
  );
  console.log(JSON.stringify(googleDriveResponse.data));

  // Create a new Collaboration in Box to share a file
  const boxResponse = await standardSDK.box.post_collaborations(
    {
      role: 'editor',
      accessible_by: {
        type: 'user',
        login: 'adler@example.com'
      },
      item: {
        type: 'file',
        id: 'abc123'
      }
    },
    { accessToken: process.env.BOX_ACCESS_TOKEN }
  );
  console.log(JSON.stringify(boxResponse.data));

  // Add a file member in Drpobox to share a file
  const dropboxResponse = await standardSDK.dropbox.AddFileMember(
    {
      access_level: 'editor',
      file: 'abc123',
      members: [
        { email: 'adler@example.com' },
      ]
    },
    { accessToken: process.env.DROPBOX_ACCESS_TOKEN }
  );
  console.log(JSON.stringify(dropboxResponse.data));
})();
