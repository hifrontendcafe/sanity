import { BsBookHalf } from 'react-icons/bs';

export function contentTree(S) {
  return S.listItem()
    .title('Contenido')
    .icon(BsBookHalf)
    .child(
      S.list()
        .title('Contenido')
        .items([
          S.listItem()
            .title('Documentos')
            .schemaType('docs')
            .child(S.documentTypeList('docs').title('Documentos')),
          S.listItem()
            .title('Posts')
            .schemaType('post')
            .child(S.documentTypeList('post').title('Posts')),
          S.listItem()
            .title('Featured cards')
            .schemaType('featuredCards')
            .child(S.documentTypeList('featuredCards').title('Cards')),
          S.listItem()
            .title('Páginas')
            .schemaType('page')
            .child(S.documentTypeList('page').title('Páginas')),
          S.listItem()
            .title('Tecnologías')
            .schemaType('technology')
            .child(S.documentTypeList('technology').title('Tecnologías')),
          S.listItem()
            .title('Roles')
            .schemaType('role')
            .child(S.documentTypeList('role').title('Roles')),
          S.listItem()
            .title('Seniorities')
            .schemaType('seniority')
            .child(S.documentTypeList('seniority').title('Seniorities')),
            S.listItem()
            .title('Pasos de mentorías')
            .schemaType('steps')
            .child(S.documentTypeList('steps').title('Pasos')),
        ]),
    );
}
