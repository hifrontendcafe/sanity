import { MdSchool } from 'react-icons/md';

export default {
  title: 'Mentor',
  name: 'mentor',
  type: 'document',
  icon: MdSchool,
  preview: {
    select: {
      title: 'name',
      subtitle: 'status',
      media: 'photo',
    },
  },
  orderings: [
    {
      title: 'Status',
      name: 'status',
      by: [
        { field: 'status', direction: 'asc' },
        { field: 'name', direction: 'asc' },
      ],
    },
    {
      title: 'Name',
      name: 'name',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
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
      validation: (Rule) => Rule.max(280),
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
      title: 'Twitter',
      name: 'twitter',
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
    {
      title: 'Notion Id',
      name: 'notionId',
      description:
        'The id of the mentor page on the notion database https://www.notion.so/hifrontendcafe/Datos-de-mentors-38f10db7e5084b339fd2fbde123d420e',
      type: 'string',
    },
  ],
  initialValue: {
    isActive: true,
  },
};
