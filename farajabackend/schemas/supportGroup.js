import {defineField, defineType} from 'sanity'
import {FaUsers} from 'react-icons/fa'

export default defineType({
  name: 'supportGroup',
  title: 'Support Group',
  type: 'document',
  icon: FaUsers,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'pdf',
      title: 'Annual Calendar PDF file',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: '.pdf', // change format to be accepted only pdf file format(s) accepted
          },
        },
      ],
      validation: (Rule) => Rule.max(3), // Set the maximum number of files to be uploaded
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
})
