import { FaUsers } from 'react-icons/fa';

export default {
  name: 'cmykParticipant',
  type: 'document',
  title: 'CMYK Participant',
  icon: FaUsers,
  fields: [
    {
      title: 'Usuario de Discord',
      name: 'discordUser',
      type: 'reference',
      to: [{ type: 'person' }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'CMYK Version',
      name: 'cmykVersion',
      type: 'string',
      options: {
        list: [
          { title: 'v1.0', value: '1' },
          { title: 'v2.0', value: '2' },
          { title: 'v3.0', value: '3' },
          { title: 'v4.0', value: '4' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'participationLevel',
      title: 'Nivel de Participación',
      type: 'string',
      options: {
        list: [
          { title: 'Nivel 1 (HTML - CSS - JavaScript)', value: 'level1' },
          {
            title: 'Nivel 2 (React.js Node.js - Librería de CSS a elección)',
            value: 'level2',
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'timeAvailability',
      title: 'Disponibilidad horaria',
      type: 'string',
      options: {
        list: [
          { title: 'Entre 2 y 4 horas semanales', value: '>2<4hours' },
          { title: 'Entre 4 y 6 horas semanales', value: '>4<6hours' },
          { title: '6 o más horas semanales', value: '>=6hours' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experience',
      title: '¿Ya tienes experiencia laboral en IT?',
      type: 'string',
      options: {
        list: [
          { title: 'Si', value: 'yes' },
          { title: 'No', value: 'no' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'aboutParticipant',
      title:
        'Contanos algo sobre vos y por qué te interesa formar parte de este proyecto',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'previousKnowledge',
      title: 'Conocimientos previos',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'otherQuestions',
      title: '¿Tenés alguna pregunta o duda que quieras comunicarnos?',
      type: 'text',
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'En revisión', value: 'revision' },
          { title: 'Rechazado', value: 'rejected' },
          { title: 'Aprobado', value: 'approved' },
        ],
      },
    },
  ],
  initialValue: {
    status: 'revision',
    cmykVersion: '4',
  },
  preview: {
    select: {
      title: 'discordUser.username',
    },
  },
};
