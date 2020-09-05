import { Model } from '@nozbe/watermelondb'
import { field, children, action } from '@nozbe/watermelondb/decorators'

export default class List extends Model {
  static table = 'lists'
  static associations = {
    list_items: { type: 'has_many', foreignKey: 'list_id' },
  }

  @field('name') name
  @children('list_items') items

  @action async setName(name) {
    await this.update((list) => {
      list.name = name
    })
  }

  @action async addItem(set, quantity, isPainted) {
    return await this.collections.get('list_items').create((listItem) => {
      listItem.list.set(this)
      listItem.set.set(set)
      listItem.quantity = quantity
      listItem.isPainted = isPainted
    })
  }

  async markAsDeleted() {
    await this.items.destroyAllPermanently()
    await super.markAsDeleted()
  }
}
