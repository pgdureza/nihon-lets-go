import React from 'react'
import Kana from '../components/Kana'
import { useRouter } from 'next/router'
import { DataContext } from '../components/Data'
import Loading from '../components/Loading'
import { queryStringtoObject } from '../utils'

export default () => {
  const router = useRouter()
  const params = router.asPath.split(/\?/)[1]
  const type = queryStringtoObject(params).type || 'hiragana'

  const { setType, items } = React.useContext(DataContext)
  setType(type)

  if (!items) {
    return <Loading />
  }

  return <Kana />
}
