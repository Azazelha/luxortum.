export default {
  name: 'audioTrack',
  title: 'Аудіо Трек',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва Треку',
      type: 'string',
    },
    {
      name: 'file',
      title: 'Файл',
      type: 'file',
    }
  ],
}