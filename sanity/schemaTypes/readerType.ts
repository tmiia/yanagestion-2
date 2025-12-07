import {defineField, defineType} from 'sanity'

export const readerType = defineType({
  name: 'reader',
  title: 'Reader Animation',
  type: 'document',
  fields: [
    defineField({
      name: 'paragraphs',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'speed',
      type: 'number',
      initialValue: 1,
    }),
  ],
})