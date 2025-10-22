import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '0hjxglhl';
const dataset = process.env.SANITY_API_DATASET || 'production';

export default defineConfig({
  name: 'yaalee-post',
  title: 'Yaalee Post CMS',
  projectId,
  dataset,
  basePath: '/admin',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
