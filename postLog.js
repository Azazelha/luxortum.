export default {
  name: 'postLog',
  title: 'Журнал Публікацій',
  type: 'document',
  fields: [
    {
      name: 'timestamp',
      title: 'Дата',
      type: 'datetime',
    },
    {
      name: 'platform',
      title: 'Платформа',
      type: 'string',
      options: {
        list: ['instagram', 'behance']
      }
    },
    {
      name: 'status',
      title: 'Статус',
      type: 'string',
      options: {
        list: ['success', 'failed']
      }
    },
    {
      name: 'image',
      title: 'Образ',
      type: 'reference',
      to: [{ type: 'galleryImage' }],
    },
    {
      name: 'details',
      title: 'Деталі',
      type: 'text'
    }
  ]
}