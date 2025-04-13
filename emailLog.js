export default {
  name: 'emailLog',
  title: 'Email Розсилка',
  type: 'document',
  fields: [
    { name: 'subject', title: 'Тема', type: 'string' },
    { name: 'body', title: 'Повідомлення', type: 'text' },
    { name: 'recipients', title: 'Кількість Отримувачів', type: 'number' },
    { name: 'image', title: 'Образ', type: 'reference', to: [{ type: 'galleryImage' }] },
    { name: 'sentAt', title: 'Дата Надсилання', type: 'datetime' }
  ]
}