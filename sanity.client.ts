import { ClientConfig, createClient } from '@sanity/client';
import { apiVersion, dataset, projectId } from './sanity.env';

export const clientPreConfig = (config?: ClientConfig) =>
  createClient({
    projectId,
    dataset,
    apiVersion,
    ...config,
  });
