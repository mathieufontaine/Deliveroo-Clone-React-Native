export default {
  name: 'featured',
  type: 'document',
  title: 'Featured',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      of: [
        {
          type: 'reference',
          to: [{type: 'restaurant'}],
        },
      ],
    },
  ],
}
