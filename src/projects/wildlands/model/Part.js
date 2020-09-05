import { Model } from '@nozbe/watermelondb'
import { field, children } from '@nozbe/watermelondb/decorators'

export default class Part extends Model {
  static table = 'parts'
  static associations = {
    set_memberships: { type: 'has_many', foreignKey: 'part_id' },
  }

  @field('name') name
  @field('sku') sku
  @children('set_memberships') setMemberships
}
