'use client'
import { useState } from 'react'
import NavigationElement from '../../components/NavigationElement'
import Sidebar from '../../components/Sidebar'

export function Client() {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col h-full justify-items-stretch self-stretch '>
      <Sidebar
        open={open}
        title='Navbar'
        className='max-w-full sm:max-w-72'
        onClose={() => {
          setOpen(false)
        }}
        version='1.0.0'
      >
        <NavigationElement>
          <a className='' href='/sidebar'>
            Example
          </a>
        </NavigationElement>
        <NavigationElement>
          <a className='' href='/sidebar'>
            Two
          </a>
        </NavigationElement>
      </Sidebar>
      <button
        className='absolute right-0 top-0'
        onClick={() => {
          setOpen((prev) => !prev)
        }}
      >
        Button
      </button>
    </div>
  )
}
