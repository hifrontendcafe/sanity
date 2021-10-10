import { GrArticle } from 'react-icons/gr';

export default {
  title: 'Documento',
  name: 'docs',
  type: 'document',
  icon: GrArticle,
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
      name: 'content',
      type: 'markdown',
    },
  ],
};
