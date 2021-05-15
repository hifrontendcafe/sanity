import languages from './languages';

const types = ['string', 'text'];

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export default types.map((type) => ({
  title: `Localized ${capitalize(type)}`,
  name: `locale${capitalize(type)}`,
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: languages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type,
    fieldset: lang.isDefault ? null : 'translations',
  })),
}));
