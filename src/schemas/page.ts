import { RiPagesLine } from 'react-icons/ri';
import componentsTypes from './components';

const seo = [
  {
    title: 'Metadata',
    name: 'metadata',
    type: 'array',
    group: 'seo',
    of: [
      {
        type: 'object',
        fields: [
          { name: 'property', type: 'string', title: 'Property' },
          { name: 'content', type: 'text', title: 'Content' },
        ],
      },
    ],
  },
  {
    name: 'seoImage',
    title: 'Imagen',
    type: 'image',
    group: 'seo',
  },
];

const components = [
  {
    title: 'Pasos',
    name: 'steps',
    group: 'components',
    type: 'array',
    of: [
      {
        type: 'object',
        preview: {
          select: {
            step: 'step',
            title: 'title',
            subtitle: 'description',
          },
          prepare({ title, subtitle, step }) {
            return {
              title: `${step} - ${title}`,
              subtitle,
            };
          },
        },
        title: 'Paso',
        fields: [
          { name: 'step', type: 'number', title: 'Paso' },
          { name: 'title', type: 'string', title: 'Título' },
          { name: 'description', type: 'text', title: 'Descripción' },
        ],
      },
    ],
    validation: (Rule) => Rule.max(3),
  },
];

export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  icon: RiPagesLine,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'components',
      title: 'Componentes',
    },
  ],
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Título',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Descripción breve',
      name: 'shortDescription',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'path',
      type: 'slug',
    },
    ...seo,
    ...components,
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
    {
      title: 'Componentes',
      group: 'components',
      name: 'components',
      type: 'array',
      of: componentsTypes.map((component) => ({ type: component.name })),
    },
  ],
};
