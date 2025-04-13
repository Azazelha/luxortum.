export default {
  name: 'subscriber',
  title: 'Підписник',
  type: 'document',
  fields: [
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'source', title: 'Джерело', type: 'string', options: { list: ['stripe', 'patreon'] }},
    { name: 'tier', title: 'Рівень', type: 'string' },
    { name: 'active', title: 'Активний', type: 'boolean' },
    { name: 'joinedAt', title: 'Дата підписки', type: 'datetime' }
  ]
}