import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'meals', // to call
  title: 'Meals', // to display
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Meal name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      type: 'string',
      title: 'descripition',
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Meal cost in SR (Saudi Riyals) ',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'MealImage',
      type: 'image',
      title: 'Meal Image',
      validation: (rule) => rule.required().error('Dont forget to add a picture  '),
    }),
  ],
})
