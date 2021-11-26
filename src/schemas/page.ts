import { RiPagesLine } from 'react-icons/ri';

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: RiPagesLine,
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'path',
      type: 'slug',
    },
    {
      title: 'Nombre del hero',
      name: 'hero',
      type: 'string',
    },
    {
      title: 'Descripción',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Link',
      name: 'doc',
      type: 'url',
    },
  ],
};
