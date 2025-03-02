
import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <div className='flex justify-between navigation rounded-xl py-3 px-4  sm:mx-16 mx-5 mt-4'>
        <div className='font-medium pb-1 pt-1 sm:text-lg text-sm'>JobTrek</div>
        <ul className='flex sm:text-base text-sm'>
            <li className='pe-5 cursor-pointer pb-1 pt-1'><Link href="/">Login</Link></li>
            <li className='border pe-2 pl-2 cursor-pointer py-1 rounded-lg'><Link href="/">Sign Up</Link></li>
        </ul>
    </div>
  )
}
