import {defineField, defineType} from 'sanity'
import {SlCalender} from 'react-icons/sl'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: SlCalender,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      name: 'eventIn',
      title: 'Event In (Nairobi or Eldoret)',
      type: 'reference',
      to: {type: 'eventLocatedIn'},
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'string',
    }),
    defineField({
      name: 'eventLocation',
      title: 'Event Location',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Event Main Image',
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
      name: 'dateCreated',
      title: 'Date and Time Created',
      type: 'datetime',
    }),
    defineField({
      name: 'organizedBy',
      title: 'Organized By',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'sponsorImages',
      title: 'Sponsor Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
              options: {
                hotspot: true, // Enable hotspot to allow image cropping
              },
            },
            {
              title: 'Alt Text',
              name: 'altText',
              type: 'string',
              description: 'Alternative text for accessibility',
            },
            {
              title: 'Caption',
              name: 'caption',
              type: 'string',
              description: 'Caption for the image',
            },
          ],
        },
      ],
    }),
  ],
})
