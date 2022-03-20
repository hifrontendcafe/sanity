import { MdEventNote } from 'react-icons/md';

export default {
  title: 'Canales con eventos',
  name: 'eventChannel',
  type: 'document',
  icon: MdEventNote,
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Categoría',
      name: 'category',
      type: 'string',
      options: {
        source: 'category',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Id',
      name: 'id',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
  orderings: [
    {
      title: 'Nombre, Nuevos',
      name: 'nameDesc',
      by: [{ field: 'name', direction: 'desc' }],
    },
    {
      title: 'Nombre, Viejos',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
};
