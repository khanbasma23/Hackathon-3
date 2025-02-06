export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule) => 
        Rule.required().max(100).error('Product name is required and cannot exceed 100 characters.')
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'URL-friendly identifier for the product.',
      options: {
        source: 'name',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required().error('Slug is required for product identification.')
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Detailed description of the product.',
      validation: (Rule) => 
        Rule.required().min(20).max(500).error('Description must be between 20 and 500 characters.')
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price',
      validation: (Rule) => 
        Rule.required().min(0).error('Product price must be a positive value.')
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      description: 'Percentage discount on the product.',
      validation: (Rule) =>
        Rule.min(0).max(100).error('Discount percentage must be between 0 and 100.')
    },
    {
      name: 'priceWithoutDiscount',
      type: 'number',
      title: 'Price Without Discount',
      description: 'Original price of the product before discount.',
      readOnly: true,
      initialValue: (doc) => {
        if (doc.discountPercentage && doc.discountPercentage > 0) {
          return doc.price / (1 - doc.discountPercentage / 100);
        }
        return doc.price; // Prevent division by zero
      },
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Average rating of the product.',
      validation: (Rule) =>
        Rule.min(0).max(5).precision(1).error('Rating must be between 0 and 5.')
    },
    {
      name: 'ratingCount',
      type: 'number',
      title: 'Rating Count',
      description: 'Total number of ratings received by the product.',
      validation: (Rule) => Rule.min(0).error('Rating count must be a non-negative number.')
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Add tags such as "new arrival", "bestseller", or "limited edition".',
      validation: (Rule) => Rule.min(1).error('At least one tag is required.')
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Available sizes for the product (e.g., S, M, L, XL, XXL).',
      validation: (Rule) => Rule.min(1).error('At least one size is required.')
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      description: 'High-quality image of the product.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Product image is required.')
    },
    {
      name: 'seoTitle',
      type: 'string',
      title: 'SEO Title',
      description: 'Title for SEO optimization (max 60 characters).',
      validation: (Rule) => Rule.max(60).error('SEO title cannot exceed 60 characters.')
    },
    {
      name: 'seoDescription',
      type: 'text',
      title: 'SEO Description',
      description: 'Meta description for SEO optimization (max 160 characters).',
      validation: (Rule) => Rule.max(160).error('SEO description cannot exceed 160 characters.')
    },
  ],
};
