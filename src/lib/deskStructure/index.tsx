import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import sanityClient from 'part:@sanity/base/client';
import { eventsTree } from './eventsTree';
import { initiativesTree } from './initiativesTree';
import { contentTree } from './contentTree';
import { settingsTree } from './settingsTree';
import { peopleTree } from './peopleTree';
import assetsTree from './assetsTree';

export const client = sanityClient.withConfig({ apiVersion: '2022-01-22' });

export default () =>
  S.list()
    .title('Vamo’ el FEC')
    .items([
      settingsTree(S),
      S.divider(),
      peopleTree(S),
      eventsTree(S),
      initiativesTree(S),
      contentTree(S),
      assetsTree,
      // ...S.documentTypeListItems(),
    ]);
