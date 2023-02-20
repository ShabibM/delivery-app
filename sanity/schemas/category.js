import {defineField, defineType} from 'sanity'

export default defineType({
  // Define the table
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    // Define the Columns
    defineField({
      name: 'category',
      title: 'Category name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
    }),
  ],
})
