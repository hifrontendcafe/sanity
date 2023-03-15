import { StructureBuilder } from 'sanity/desk';
import { contentTree } from './contentTree';
import { eventsTree } from './eventsTree';
import { initiativesTree } from './initiativesTree';
import { peopleTree } from './peopleTree';
import { settingsTree } from './settingsTree';

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
