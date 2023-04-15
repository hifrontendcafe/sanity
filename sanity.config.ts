import { colorInput } from '@sanity/color-input';
import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { WorkspaceOptions, defineConfig, definePlugin, isDev } from 'sanity';
import { deskTool } from 'sanity/desk';
import CMYKParticipationDatatable from './plugins/cmyk-participation-datatable';
import { projectId } from './sanity.env';
import Logo from './src/components/Logo';
import deskStructure from './src/lib/deskStructure';
import schemas from './src/schemas/schema';

const devOnlyPlugins = isDev ? [visionTool()] : [];

const sharedConfig = definePlugin({
  name: 'shareConfig',
  plugins: [
    deskTool({ structure: deskStructure }),
    colorInput(),
    dashboardTool({ widgets: [CMYKParticipationDatatable] }),
    ...devOnlyPlugins,
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

const devWorkspace: WorkspaceOptions = {
  name: 'development-workspace',
  title: `FEC - Development`,
  subtitle: 'Development',
  projectId,
  dataset: 'develop',
  basePath: '/development',
  plugins: [sharedConfig()],
};
const prodWorkspace: WorkspaceOptions = {
  name: 'production-workspace',
  title: `FEC ${isDev ? '- Production' : ''}`,
  subtitle: 'Production',
  projectId,
  dataset: 'production',
  basePath: '/production',
  plugins: [sharedConfig()],
};

const workspaces = isDev ? [devWorkspace, prodWorkspace] : [prodWorkspace];

export default defineConfig(workspaces);
