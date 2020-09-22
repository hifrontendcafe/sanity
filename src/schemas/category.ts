export default {
  title: 'Categoria',
  name: 'category',
  type: 'document',
  fields: [
    {
      title: 'Titulo',
      name: 'title',
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
