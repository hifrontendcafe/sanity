import { colorInput } from '@sanity/color-input';
import { visionTool } from '@sanity/vision';
import { defineConfig, definePlugin, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import Logo from './src/components/Logo';
import deskStructure from './src/lib/deskStructure';
import schemas from './src/schemas/schema';

const devOnlyPlugins = [visionTool()];

const sharedConfig = definePlugin({
  name: 'shareConfig',
  plugins: [
    deskTool({ structure: deskStructure }),
    colorInput(),
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

export default defineConfig([
  {
    name: 'production-workspace',
    title: 'FEC',
    subtitle: 'Production',
    projectId: '0mjeop5f',
    dataset: 'production',
    basePath: '/production',
    plugins: [sharedConfig()],
  },
  {
    name: 'development-workspace',
    title: 'FEC',
    subtitle: 'Development',
    projectId: '0mjeop5f',
    dataset: 'develop',
    basePath: '/development',
    plugins: [sharedConfig()],
  },
]);
