'use client'

import { usePathname } from 'next/navigation'
import NavBar from '../../components/Navbar'

export default function NavbarClient() {
  const pathName = usePathname()
  const navRoutesExample = [
    {
      path: '',
      pathname: 'Hallo',
    },
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
