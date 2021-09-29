import { BiUserCircle } from 'react-icons/bi';
import { timezones } from '../lib/timezones';

export default {
  name: 'person',
  type: 'document',
  title: 'Persona',
  icon: BiUserCircle,
  fields: [
    {
      name: 'discordID',
      title: 'ID de Discord',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'username',
      title: 'Usuario de Discord',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/(.*)#(\d{4})/, {
            name: 'Usuario de discord',
            invert: false,
          })
          .error('Usuario incorrecto. Ej: Usuario#1234'),
    },
    {
      name: 'firstName',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Apellido',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Mail',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'timezone',
      title: 'Zona Horaria',
      type: 'string',
      options: {
        list: timezones.map((tz) => ({ title: tz.text, value: tz.text })),
      },
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Portfolio',
      name: 'portfolio',
      type: 'url',
    },
    {
      title: 'GitHub',
      name: 'github',
      type: 'url',
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'url',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      title: 'Team FEC',
      name: 'fecTeam',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      username: 'username',
      photo: 'photo',
    },
    prepare(selection) {
      const { firstName, lastName, username, photo } = selection;
      return {
        title: username,
        subtitle: `${firstName || ''} ${lastName || ''}`,
        media: photo,
      };
    },
  },
  orderings: [
    {
      title: 'Nombre',
      name: 'firstNameAsc',
      by: [{ field: 'first_name', direction: 'asc' }],
    },
    {
      title: 'Usuario',
      name: 'usernameAsc',
      by: [{ field: 'username', direction: 'asc' }],
    },
  ],
};
