import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meals', // to call
  title: 'Meals', // to display
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Resturant name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'desc',
      type: 'string',
      title: 'descripition',
      validation: (rule) => rule.max(300),
    },
  ],
})
