import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import deskStructure from './src/lib/deskStructure';
import schemas from './src/schemas/schema';

export default defineConfig({
  title: 'FEC',
  projectId: '0mjeop5f',
  dataset: 'production',
  plugins: [deskTool({ structure: deskStructure })],
  schema: { types: schemas },
});
