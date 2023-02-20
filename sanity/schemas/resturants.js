/**
 * Here we can control the Sanity GUI
 */

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'resturants',
  title: 'Resturant',
  type: 'document',
  fields: [
    // columns
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
    {
      name: 'address',
      type: 'string',
      title: 'Resturant address',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Resturant image',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Resturant rating between [1-5]',
      validation: (rule) =>
        rule.required().min(1).max(5).error('Please enter a valid rating, between [1-5]'),
    },
    {
      name: 'meals',
      type: 'array',
      title: 'Meals',
      of: [{type: 'reference', to: [{type: 'meals'}]}],
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Categories',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'latitude',
    },
  ],
})
