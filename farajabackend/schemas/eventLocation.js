import {defineField, defineType} from 'sanity';
import { GoLocation } from 'react-icons/go'

export default defineType({
  name: 'eventLocation',
  title: 'Event Location',
  type: 'document',
  icon: GoLocation,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name'
    },
  },
})
