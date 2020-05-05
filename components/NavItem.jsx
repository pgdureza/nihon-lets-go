import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem = ({ path, children }) => {
  const router = useRouter()
  const routerPath = router.asPath
  const isActive = routerPath === path
  return (
    <span className={`p-5 w-1/2 text-center ${isActive && 'text-red-500'}`}>
      {isActive ? (
        <span>{children}</span>
      ) : (
        <Link href="/kana" as={path}>
          <a>{children}</a>
        </Link>
      )}
    </span>
  )
}

export default NavItem
