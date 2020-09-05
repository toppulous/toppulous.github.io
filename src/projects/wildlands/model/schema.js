import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const dfSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'parts',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'sku', type: 'string', isIndexed: true },
      ],
    }),
    tableSchema({
      name: 'set_memberships',
      columns: [
        { name: 'part_id', type: 'string', isIndexed: true },
        { name: 'set_id', type: 'string', isIndexed: true },
        { name: 'part_quantity', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'sets',
      columns: [
        { name: 'sku', type: 'string', isIndexed: true },
        { name: 'classification', type: 'string' },
        { name: 'biome', type: 'string' },
        { name: 'cost', type: 'number' },
        { name: 'painted_cost', type: 'number', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'set_images',
      columns: [
        { name: 'number', type: 'string' },
        { name: 'set_id', type: 'string', isIndexed: true },
      ],
    }),
    tableSchema({
      name: 'lists',
      columns: [{ name: 'name', type: 'string' }],
    }),
    tableSchema({
      name: 'list_items',
      columns: [
        { name: 'list_id', type: 'string', isIndexed: true },
        { name: 'set_id', type: 'string', isIndexed: true },
        { name: 'quantity', type: 'number' },
        { name: 'is_painted', type: 'boolean', isOptional: true },
      ],
    }),
  ],
})
