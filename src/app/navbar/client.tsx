'use client'

import { usePathname } from 'next/navigation'
import NavBar, { Route } from '../../components/Navbar'

export default function NavbarClient() {
  const pathName = usePathname()
  const navRoutesExample: Route[] = [
    {
      path: '/navbar',
      pathname: 'Navbar',
      pathType: ''
    },
    {
      path: '/sidebar',
      pathname: 'Sidebar',
      pathType: ''
    }
  ]

  return (
    <NavBar
      navRoutes={navRoutesExample}
      pathName={pathName}
      subtitle='asd'
      title='3D'
    />
  )
}
