import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import galleryImage from './schemas/galleryImage'
import audioTrack from './schemas/audioTrack'
import postLog from './schemas/postLog'
import subscriber from './schemas/subscriber'
import emailLog from './schemas/emailLog'

export default defineConfig({
  name: 'default',
  title: 'Luxortum Studio CMS',

  projectId: 'your_project_id', // заміни на свій ID
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [galleryImage, audioTrack, postLog, subscriber, emailLog],
  },
})