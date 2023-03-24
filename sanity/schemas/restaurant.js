export default {
  name: 'restaurant',
  type: 'document',
  title: 'Restaurant',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Reastaurant name',
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
      name: 'genre',
      type: 'string',
      title: 'Genre',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [
        {
          type: 'reference',
          to: [{type: 'dish'}],
        },
      ],
    },
  ],
}
