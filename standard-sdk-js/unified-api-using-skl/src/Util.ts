import { promises as fs } from 'fs';
import type { Entity } from '@comake/standard-sdk-js';
import jsonld from 'jsonld';

export async function combineSchemas(
  filePaths: string[],
  env: Record<string, string> = {},
): Promise<Entity[]> {
  const schemas = await Promise.all(
    filePaths.map(async(filePath: string): Promise<jsonld.NodeObject[]> => {
      let schema = await fs.readFile(filePath, { encoding: 'utf8' });
      Object.keys(env).forEach((envVar: string): void => {
        schema = schema.replace(`ENV_${envVar}`, env[envVar]);
      });
      return await jsonld.expand(JSON.parse(schema));
    }),
  );
  const expandedSchema = schemas.flat();
  const nonBlankNodes = expandedSchema
    .map((schema): string | undefined => schema['@id'] as string | undefined)
    .filter((id): boolean => id !== undefined && !id.startsWith('_:'));
  const framedSchema = await jsonld.frame(
    expandedSchema,
    {
      '@context': {},
      '@id': nonBlankNodes as any,
    },
  );
  return framedSchema['@graph'] as Entity[];
}

export const env = {
  TICKETMASTER_APIKEY: process.env.TICKETMASTER_APIKEY!,
  SEATGEEK_APIKEY: process.env.TICKETMASTER_APIKEY!,
  STUBHUB_USERNAME: process.env.STUBHUB_USERNAME!,
  STUBHUB_PASSWORD: process.env.STUBHUB_PASSWORD!,
};
