import { BsFillPeopleFill } from 'react-icons/bs';
import { GoProject } from 'react-icons/go';
import { client } from './index';

export function peopleTree(S) {
  return S.listItem()
    .title('Personas')
    .icon(BsFillPeopleFill)
    .child(
      S.list()
        .title('Personas')
        .items([
          S.listItem()
            .title('Personas')
            .icon(BsFillPeopleFill)
            .schemaType('person')
            .child(S.documentTypeList('person').title('Personas')),
          S.listItem()
            .title('Mentores')
            .schemaType('mentor')
            .child(S.documentTypeList('mentor').title('Mentores')),
          S.listItem()
            .title('Perfiles')
            .schemaType('profile')
            .child(S.documentTypeList('profile').title('Perfiles')),
          S.listItem()
            .schemaType('person')
            .title('CMYK')
            .icon(GoProject)
            .child(
              S.documentTypeList('cmykParticipant').title('Participantes'),
            ),
          S.listItem()
            .title('Reactivistas')
            .schemaType('reactGroup')
            .child(
              S.documentTypeList('reactGroup')
                .title('Miembros')
                .child(async (id) => {
                  const reactGroup = await client.fetch(`*[_id == "${id}"][0]`);

                  const personIds = reactGroup.participants.map(
                    (participant) => participant._ref,
                  );
                  personIds.push(reactGroup.teamCaptain._ref);

                  return S.documentTypeList('person')
                    .filter('_id in $personIds')
                    .params({ personIds });
                }),
            ),
        ]),
    );
}