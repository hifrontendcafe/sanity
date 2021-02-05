import { BiUserCircle } from 'react-icons/bi';

export default {
  name: 'person',
  type: 'document',
  title: 'Persona',
  icon: BiUserCircle,
  fields: [
    {
      name: 'firstName',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Apellido',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'username',
      title: 'Usuario',
      type: 'slug',
      options: {
        source: (doc) =>
          `${doc.first_name.toLowerCase()}${doc.last_name.toLowerCase()}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
    },
    {
      title: 'Portfolio',
      name: 'portfolio',
      type: 'url',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      username: 'username.current',
      photo: 'photo',
    },
    prepare(selection) {
      const { firstName, lastName, username, photo } = selection;
      return {
        title: `${firstName} ${lastName}`,
        subtitle: username,
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
