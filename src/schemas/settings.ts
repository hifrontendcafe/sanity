export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Menu',
      name: 'menu',
      type: 'array',
      description: 'Active items for top menu. Format: Label/page',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Navbar',
      name: 'navbar',
      type: 'array',
      description:
        'Items for navbar, could be references to pages or external urls',
      of: [
        {
          type: 'reference',
          to: [{ type: 'page' }, { type: 'externalUrl' }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'heroBackground',
      title: 'Hero Background',
      type: 'image',
      description: 'The correct resolution to upload an image is 1280x500.',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Hero words',
      name: 'heroWords',
      type: 'array',
      description: 'Words that rotate randomly in the Hero component',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Social networks',
      name: 'socialnetworks',
      type: 'object',
      fields: [
        { name: 'github', type: 'string', title: 'Github' },
        { name: 'twitter', type: 'string', title: 'Twitter' },
        { name: 'youtube', type: 'string', title: 'Youtube' },
        { name: 'linkedin', type: 'string', title: 'Linkedin' },
        { name: 'twitch', type: 'string', title: 'Twitch' },
        { name: 'instagram', type: 'string', title: 'Instagram' },
      ],
    },
    {
      title: 'CMYK Inscription',
      name: 'cmykInscription',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
  ],
};
