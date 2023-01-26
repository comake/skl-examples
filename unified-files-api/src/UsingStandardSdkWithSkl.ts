import { StandardSDK } from '@comake/standard-sdk-js';
import * as dotenv from 'dotenv';
import { combineSchemas } from './Util';

dotenv.config();

const schemaFiles = [
  './skl-schemas/entities.json',
  './skl-schemas/mappings.json',
  './skl-schemas/nouns.json',
  './skl-schemas/verbs.json'
];
const env = {
  GOOGLE_DRIVE_ACCESS_TOKEN: process.env.GOOGLE_DRIVE_ACCESS_TOKEN!,
  BOX_ACCESS_TOKEN: process.env.BOX_ACCESS_TOKEN!,
  DROPBOX_ACCESS_TOKEN: process.env.DROPBOX_ACCESS_TOKEN!,
};

(async function(): Promise<void> {
  // Get contents of schema files, combine and frame them, replace stubbed env vars with real values
  const schemas = await combineSchemas(schemaFiles, env);

  // Build our Standard SDK
  const standardSDK = StandardSDK.build({
    skqlOptions: { type: 'memory', schemas },
  });

  // Share a file in Google Drive
  const googleDriveResponse = await standardSDK.skql.verb.share({
    account: 'https://example.com/data/GoogleDriveAccount',
    entity: {
      '@type': 'http://skl.standard.storage/File',
      '@id': 'http://example.com/data/abc123',
      'http://skl.standard.storage/integration': { '@id': 'https://skl.standard.storage/integrations/GoogleDrive' },
      'http://skl.standard.storage/sourceId': 'abc123'
    },
    permission: 'editor',
    emailAddress: 'adler@example.com'
  });

  // Share a file in Box
  const boxResponse = await standardSDK.skql.verb.share({
    account: 'https://example.com/data/BoxAccount',
    entity: {
      '@type': 'http://skl.standard.storage/File',
      '@id': 'http://example.com/data/abc123',
      'http://skl.standard.storage/integration': { '@id': 'https://skl.standard.storage/integrations/Box' },
      'http://skl.standard.storage/sourceId': 'abc123'
    },
    permission: 'editor',
    emailAddress: 'adler@example.com'
  });

  // Share a file in Dropbox
  const dropboxResponse = await standardSDK.skql.verb.share({
    account: 'https://example.com/data/DropboxAccount',
    entity: {
      '@type': 'http://skl.standard.storage/File',
      '@id': 'http://example.com/data/abc123',
      'http://skl.standard.storage/integration': { '@id': 'https://skl.standard.storage/integrations/Dropbox' },
      'http://skl.standard.storage/sourceId': 'abc123'
    },
    permission: 'editor',
    emailAddress: 'adler@example.com'
  });
})();
