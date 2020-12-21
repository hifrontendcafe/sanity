import { GoProject } from 'react-icons/go';

export default {
  name: 'cmyk',
  type: 'document',
  title: 'CMYK',
  icon: GoProject,
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripcion',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      validation: (Rule) => Rule.required(),
      options: {
        disableAlpha: true,
      },
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'demo',
      title: 'Demo',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
};
