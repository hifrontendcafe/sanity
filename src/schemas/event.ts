export default {
  title: 'Evento',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Titulo',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Categoria',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      title: 'Cover',
      name: 'cover',
      type: 'image',
    },
    {
      title: 'Fecha',
      name: 'author',
      type: 'datetime',
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    },
  ],
};
