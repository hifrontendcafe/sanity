export default function resolveProductionUrl(document) {
  return `${process.env.SANITY_STUDIO_WEB_URL}/api/preview?secret=${process.env.SANITY_STUDIO_SECRET}`;
}
