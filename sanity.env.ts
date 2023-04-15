const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '0mjeop5f';

const YYYY_MM_DD = new Date().toLocaleDateString('fr-CA');
const apiVersion = process.env.SANITY_STUDIO_API_VERSION || YYYY_MM_DD;

export { dataset, projectId, apiVersion };
