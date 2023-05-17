import {defineField, defineType} from 'sanity';
import { RiPsychotherapyLine } from "react-icons/ri";

export default defineType({
  name: 'therapy',
  title: 'Complementary Therapies',
  type: 'document',
  icon: RiPsychotherapyLine,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
    }),
  ],
})
