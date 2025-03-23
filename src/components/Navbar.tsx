'use client'

import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export type Route<TPathType = string> = {
  path: string
  pathname: string
  pathType?: TPathType
}

const Background = styled.div`
  background-color: var(--primary-color);
  box-shadow: 0 1px 8px rgb(0 0 0 / 30%);
`

interface NavbarProps {
  className?: string
  /** Url for an icon. If undefined the Image-tag is hidden. */
  iconUrl?: string
  /** Actual pathName to highlight active Link in Navbar */
  pathName: string
  /** route-objects to show in navigation as links with display title*/
  navRoutes: Array<Route>
  /** title to display in Navbar */
  title: string
  /** subtitle to display in Navbar */
  subtitle?: string
}

/**
 * Navbar
 */
export default function Navbar({
  className,
  iconUrl,
  navRoutes,
  subtitle,
  title,
  pathName
}: Readonly<NavbarProps>) {
  return (
    <Background className={'NavBar pt-2 ' + className}>
      <div className='flex flex-col'>
        <div className='w-full mb-2 align-middle flex flex-col sm:justify-center sm:gap-2  sm:flex-row '>
          <div className='align-middle text-center'>
            {iconUrl && (
              <Image
                className='inline-block py-2 w-auto h-12'
                src={iconUrl}
                alt='Icon'
                width={32}
                height={32}
              />
            )}
            <h2 className='inline text-center align-middle'>{title}</h2>
          </div>
          <div className='hidden mx-3 sm:visible text-center'></div>
          <h3 className='inline self-center'>{subtitle}</h3>
        </div>
        <div className='self-center overflow-hidden'>
          <ul className='flex flex-row flex-wrap'>
            {navRoutes.map((route, index) => {
              return (
                <li
                  className='hover:bg-stone-900 flex-1 text-center'
                  key={route.pathname}
                >
                  <Link
                    className='flex justify-center px-3 font-bold text-link min-w-40 min-h-10
                    hover:text-linkHover transform transition duration-200 hover:scale-110 '
                    href={{ pathname: route.path }}
                  >
                    <span
                      className={
                        ' inline self-center ' +
                        classNames({
                          ' text-white ':
                            !!pathName &&
                            !!route.path &&
                            pathName.toLowerCase() === route.path.toLowerCase()
                        })
                      }
                    >
                      {route.pathname}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Background>
  )
}
