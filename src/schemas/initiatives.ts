import { GoProject } from 'react-icons/go';

export default {
  title: 'Initiativas',
  name: 'initiative',
  type: 'document',
  icon: GoProject,
  fields: [
    {
      title: 'Emoji',
      name: 'emoji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Titulo',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Texto del boton',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
