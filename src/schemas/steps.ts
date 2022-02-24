import { GiTeacher } from 'react-icons/gi';

export default {
  title: 'Componente de pasos',
  name: 'steps',
  type: 'document',
  icon: GiTeacher,
  fields: [
    {
      title: 'Pasos',
      name: 'steps',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Objects',
          fields: [
            { name: 'step', type: 'string', title: 'Paso' },
            { name: 'title', type: 'string', title: 'Título' },
            { name: 'description', type: 'text', title: 'Descripción' },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};
