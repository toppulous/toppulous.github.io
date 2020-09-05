import { Model } from '@nozbe/watermelondb'
import { field, children } from '@nozbe/watermelondb/decorators'

export default class Set extends Model {
  static table = 'sets'
  static associations = {
    set_memberships: { type: 'has_many', foreignKey: 'set_id' },
    set_images: { type: 'has_many', foreignKey: 'set_id' },
  }
  @field('sku') sku
  @field('classification') classification
  @field('biome') biome
  @field('cost') cost
  @field('painted_cost') paintedCost

  @children('set_memberships') setMemberships
  @children('set_images') setImages
}
