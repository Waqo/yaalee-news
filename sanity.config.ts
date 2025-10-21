import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_API_DATASET || 'production';

export default defineConfig({
  name: 'yaalee-post',
  title: 'Yaalee Post CMS',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [],
  },
});
