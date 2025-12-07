import {defineField, defineType} from 'sanity'

export const folderContentType = defineType({
  name: 'folderContent',
  title: 'Folder Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'text',
    }),
  ],
})