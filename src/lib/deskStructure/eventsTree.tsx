import React from 'react';
import { MdEventSeat } from 'react-icons/md';

const currentDateTime = new Date().toISOString();

export function eventsTree(S) {
  return S.listItem()
    .title('Eventos')
    .icon(MdEventSeat)
    .child(
      S.list()
        .title('Eventos')
        .items([
          S.listItem()
            .title('Eventos Proximos')
            .schemaType('event')
            .child(
              S.documentTypeList('event')
                .title('Eventos Proximos')
                .filter('_type == "event" && date >= $currentDateTime')
                .params({ currentDateTime }),
            ),
          S.listItem()
            .title('Eventos Anteriores')
            .icon(() => <MdEventSeat style={{ opacity: 0.66 }} />)
            .schemaType('event')
            .child(
              S.documentTypeList('event')
                .title('Eventos Anteriores')
                .filter('_type == "event" && date < $currentDateTime')
                .params({ currentDateTime }),
            ),

          S.listItem()
            .title('Categorias')
            .schemaType('category')
            .child(
              S.documentTypeList('category').title('Categorias de Eventos'),
            ),
          S.listItem()
            .title('Tags')
            .schemaType('tag')
            .child(S.documentTypeList('tag').title('Tags de Eventos')),
        ]),
    );
}
