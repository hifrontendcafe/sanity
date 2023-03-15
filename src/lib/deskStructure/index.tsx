import { createClient } from '@sanity/client';
import { StructureBuilder } from 'sanity/desk';
import { dataset, projectId } from '../../../sanity.env';
import { contentTree } from './contentTree';
import { eventsTree } from './eventsTree';
import { initiativesTree } from './initiativesTree';
import { peopleTree } from './peopleTree';
import { settingsTree } from './settingsTree';

// TODO: Make it reusable?
export const client = createClient({
  apiVersion: '2022-01-22',
  dataset,
  projectId,
});

export default (S: StructureBuilder) =>
  S.list()
    .title('Vamo’ el FEC')
    .items([
      settingsTree(S),
      S.divider(),
      peopleTree(S),
      eventsTree(S),
      initiativesTree(S),
      contentTree(S),
      // FIXME: Schema types and IDs issues with the assets tree.
      // assetsTree,
      // ...S.documentTypeListItems(),
    ]);
