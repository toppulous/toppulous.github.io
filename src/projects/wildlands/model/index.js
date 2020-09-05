import { dfSchema } from './schema'
import Part from './Part'
import SetMembership from './SetMembership'
import Set from './Set'
import List from './List'
import ListItem from './ListItem'
import SetImage from './SetImage'
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs'
import { Database } from '@nozbe/watermelondb'

const adapter = new LokiJSAdapter({
  dbName: 'WildlandsKickstarterDb',
  schema: dfSchema,
  useWebWorker: false,
  useIncrementalIndexedDB: true,
})

export const wildLandsDatabase = new Database({
  adapter,
  modelClasses: [Part, SetMembership, Set, SetImage, List, ListItem],
  actionsEnabled: true,
})
