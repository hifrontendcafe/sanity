import { BsGear } from 'react-icons/bs';

export function settingsTree(S) {
  return S.listItem()
    .title('Settings')
    .icon(BsGear)
    .child(S.document().schemaType('settings').documentId('settings'));
}
