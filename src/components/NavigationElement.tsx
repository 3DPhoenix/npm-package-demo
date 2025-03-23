'use client'

import { PropsWithChildren } from 'react'

export default function NavigationElement({
  children
}: Readonly<PropsWithChildren>) {
  return (
    <div className='text-center'>
      <div className='inline-block text-center scale-100 transition-all duration-100 hover:scale-110 [&>*]:px-5'>
        {children}
      </div>
    </div>
  )
}
