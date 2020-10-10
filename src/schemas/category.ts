import { AiFillFolderOpen } from 'react-icons/ai';

export default {
  title: 'Categorias',
  name: 'category',
  type: 'document',
  icon: AiFillFolderOpen,
  fields: [
    {
      title: 'Nombre',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
