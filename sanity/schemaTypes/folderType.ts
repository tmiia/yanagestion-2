import {defineField, defineType} from 'sanity'
import { folderContentType } from './folderContentType'

export const folderType = defineType({
  name: 'folder',
  title: 'Folder Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
        name: 'contents',
        type: 'array',
        of: [{type: 'reference', to: [{type: folderContentType.name}]}],
    }),
    defineField({
      name: 'addContactForm',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})