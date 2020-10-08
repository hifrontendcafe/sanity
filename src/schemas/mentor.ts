import { MdSchool } from 'react-icons/md';

export default {
  title: 'Mentores',
  name: 'mentor',
  type: 'document',
  icon: MdSchool,
  fields: [
    {
      title: 'Nombre',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      fields: [
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: 'Calendly',
      name: 'calendly',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'string',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'string',
    },
    {
      title: 'Temas',
      name: 'temas',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
