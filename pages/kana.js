import React from 'react'
import Kana from '../components/Kana'
import { useRouter } from 'next/router'
import { DataContext } from '../components/Data'
import Loading from '../components/Loading'

export default () => {
  const router = useRouter()
  const params = router.asPath.split(/\?/)[1]
  const type = (params && params.split('=')[1]) || 'hiragana'

  const { setType, items } = React.useContext(DataContext)
  setType(type)

  if (!items) {
    return <Loading />
  }

  return <Kana />
}
