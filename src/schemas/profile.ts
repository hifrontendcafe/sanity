import { BsFillPeopleFill } from 'react-icons/bs';

export default {
  title: 'Profile',
  name: 'profile',
  type: 'document',
  icon: BsFillPeopleFill,
  fields: [
    {
      name: 'person',
      title: 'Persona',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'role',
      title: 'Rol',
      type: 'reference',
      to: [{ type: 'role' }],
    },
    {
      name: 'seniority',
      title: 'Seniority',
      type: 'reference',
      to: [{ type: 'seniority' }],
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Activo',
      name: 'isActive',
      type: 'boolean',
    },
    {
      title: 'En búsqueda laboral',
      name: 'isAvailable',
      type: 'boolean',
    },
    {
      title: 'Ubicación',
      name: 'location',
      type: 'string',
    },
  ],
  preview: {
    select: {
      firstName: 'person.firstName',
      lastName: 'person.lastName',
      username: 'person.username',
      photo: 'person.photo',
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
  initialValue: {
    isActive: false,
  },
};
