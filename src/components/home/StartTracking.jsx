import React from 'react'
import { Button } from '../ui/button'

export default function StartTracking() {
  return (
    <main className='bg-deepIndigo text-white py-12 text-center lg:px-0 px-5'>
        <h2 className='text-xl lg:text-2xl'>Start Tracking Your Job Search Today! 🔥</h2>
        <p className='my-5 text-xs lg:text-base'>Join thousands of job seekers who've found success with JobTrek</p>
        <Button variant="light" >Sign Up for Free</Button>
    </main>
  )
}
