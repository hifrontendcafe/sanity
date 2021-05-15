const languages = [
  {
    id: 'en',
    title: 'English',
    isDefault: true,
  },
  {
    id: 'es',
    title: 'Español',
  },
];

export const baseLanguage = languages.find((l) => l.isDefault);

export default languages;
