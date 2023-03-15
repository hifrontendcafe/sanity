import { visionTool } from '@sanity/vision';
import { defineConfig, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import Logo from './src/components/Logo';
import deskStructure from './src/lib/deskStructure';
import schemas from './src/schemas/schema';

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  title: 'FEC',
  projectId: '0mjeop5f',
  dataset: 'production',
  plugins: [
    deskTool({ structure: deskStructure }),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: { types: schemas },
  studio: { components: { logo: Logo } },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter(
          (templateItem) => templateItem.templateId != 'settings',
        );
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'settings') {
        return prev.filter(
          ({ action }) =>
            !['unpublish', 'delete', 'duplicate'].includes(action),
        );
      }
      return prev;
    },
  },
});
