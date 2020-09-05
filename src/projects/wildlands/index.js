import React from 'react'
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider'
import { wildLandsDatabase } from './model'

function Wildlands() {
  return (
    <DatabaseProvider database={wildLandsDatabase}>
      <div> test wildlands </div>
    </DatabaseProvider>
  )
}

export default Wildlands
