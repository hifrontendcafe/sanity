import { BiUserCircle } from 'react-icons/bi';

export default {
  name: 'author',
  type: 'document',
  title: 'Autor',
  icon: BiUserCircle,
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'picture',
      title: 'Avatar',
      type: 'image',
    },
  ],
};
