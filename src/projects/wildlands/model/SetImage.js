import { Model } from '@nozbe/watermelondb'
import { field, relation } from '@nozbe/watermelondb/decorators'

export default class SetImage extends Model {
  static table = 'set_images'
  static associations = {
    sets: { type: 'belongs_to', key: 'set_id' },
  }
  @field('number') number
  @relation('sets', 'set_id') set;
}
