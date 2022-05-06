import { RiArticleLine } from 'react-icons/ri';

export default {
  title: 'Documento',
  name: 'docs',
  type: 'document',
  icon: RiArticleLine,
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Content',
      description:
        'Guía de markdown https://www.markdownguide.org/cheat-sheet/',
      name: 'content',
      type: 'markdown',
    },
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
