export default {
  name: 'galleryImage',
  title: 'Образ Галереї',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Категорія',
      type: 'string',
      options: {
        list: ['dark', 'light', 'dreamy'],
      },
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'text',
    }
  ],
}