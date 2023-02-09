import { defineField, defineType } from "sanity";
import { RiKakaoTalkFill } from 'react-icons/ri';

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    icon: RiKakaoTalkFill,
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
                maxLenght: 96,
            },
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
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
            name: 'name',
            title: 'Name',
            type: 'string',
          }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
          }),
    ],

    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection
            return {...selection, subtitle: author && `by ${author}`}
        },
    },
})