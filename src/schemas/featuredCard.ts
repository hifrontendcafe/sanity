export default {
  title: 'Featured Cards',
  name: 'featuredCards',
  type: 'document',
  fields: [
    {
      title: 'Emoji',
      name: 'emoji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Titulo',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Descripcion',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Color',
      name: 'color',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Texto del boton',
      name: 'btnText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};
