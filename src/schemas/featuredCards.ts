import { AiFillHome } from 'react-icons/ai';

export default {
  title: 'Featured Cards',
  name: 'featuredCards',
  type: 'document',
  icon: AiFillHome,
  fields: [
    {
      title: 'Icono',
      name: 'icon',
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
    },
    {
      title: 'Texto del boton',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
