import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Front-end Engineer Design', value: 'frontend' },
          { title: 'Languages', value: 'languages' },
          { title: 'Database', value: 'database' },
          { title: 'Back-end', value: 'backend' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'React icon name (e.g., FaReact, SiFirebase)',
    }),
    defineField({
      name: 'iconColor',
      title: 'Icon Background Color',
      type: 'string',
      description: 'Tailwind color or hex code (e.g., bg-[#61dafb] or bg-blue-500)',
    }),
    defineField({
      name: 'textColor',
      title: 'Icon Text Color',
      type: 'string',
      description: 'Text color class (e.g., text-black, text-white)',
      initialValue: 'text-white',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order within category',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
  },
})
