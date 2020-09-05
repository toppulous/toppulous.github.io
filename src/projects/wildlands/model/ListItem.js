import { Model } from '@nozbe/watermelondb'
import { field, relation, action } from '@nozbe/watermelondb/decorators'

export default class ListItem extends Model {
  static table = 'list_items'
  static associations = {
    lists: { type: 'belongs_to', key: 'list_id' },
  }

  @field('quantity')
  quantity
  @field('is_painted')
  isPainted
  @relation('lists', 'list_id')
  list
  @relation('sets', 'set_id')
  set;

  @action async setQuantity(quantity) {
    await this.update((listItem) => {
      listItem.quantity = quantity
    })
  }

  @action async setIsPainted(isPainted) {
    await this.update((listItem) => {
      listItem.isPainted = isPainted
    })
  }
}
