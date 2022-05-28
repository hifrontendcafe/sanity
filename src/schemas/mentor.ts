import { MdSchool } from 'react-icons/md';

export default {
  title: 'Mentor',
  name: 'mentor',
  type: 'document',
  icon: MdSchool,
  fields: [
    {
      name: 'persona',
      title: 'Persona',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Estado',
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Activo', value: 'ACTIVE' },
          { title: 'No disponible', value: 'NOT_AVAILABLE' },
          { title: 'Inactivo', value: 'INACTIVE' },
          { title: 'Fuera del programa', value: 'OUT' },
        ],
      },
      initialValue: 'ACTIVE',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Web / Portfolio',
      name: 'web',
      type: 'url',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Github',
      name: 'github',
      type: 'url',
    },
    {
      title: 'Temas',
      name: 'topics',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'topic' }],
          description: 'What topic do you want to help with?',
        },
      ],
    },
  ],
  initialValue: {
    isActive: true,
  },
};
