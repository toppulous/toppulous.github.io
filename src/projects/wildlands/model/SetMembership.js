import { Model } from '@nozbe/watermelondb'
import { field, relation } from '@nozbe/watermelondb/decorators'

export default class SetMembership extends Model {
  static table = 'set_memberships'
  static associations = {
    parts: { type: 'belongs_to', key: 'part_id' },
    sets: { type: 'belongs_to', key: 'set_id' },
  }

  @field('part_quantity') partQuantity
  @relation('parts', 'part_id') part
  @relation('sets', 'set_id') set;
}
