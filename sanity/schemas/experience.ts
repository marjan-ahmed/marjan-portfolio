import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'technology',
      title: 'Technology',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'iconUrl',
      title: 'Icon URL',
      type: 'url',
      description: 'CDN URL for technology icon (e.g., devicons)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color or Tailwind color (e.g., #6cb6e7, bg-[#6cb6e7])',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order (lower numbers appear first)',
    }),
  ],
  preview: {
    select: {
      title: 'technology',
      order: 'order',
    },
    prepare(selection) {
      const { title, order } = selection
      return {
        title,
        subtitle: `Order: ${order || 'Not set'}`,
      }
    },
  },
})
