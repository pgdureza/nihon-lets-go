import React from 'react'
import Vocabulary from '../components/Vocabulary'
import { DataContext } from '../components/Data'

export default () => {
  const { setType } = React.useContext(DataContext)
  setType('vocabulary')
  return <Vocabulary />
}
