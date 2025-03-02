import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className="lg:flex mt-3  sm:mx-16 mx-5">
        <div className="flex-1 place-content-center lg:text-left text-center">
            <h1 className='text-2xl md:text-3xl lg:text-5xl text-deepIndigo font-bold'>Track Your Job Search Like a Pro!</h1>
            <p className='text-[16px] text-black mt-5'>Stay organised, manage applications, and land your dream job with JobTrek.</p>
            <div className='mt-5 lg:flex'>
              <div> <Button className="w-full">Get Started for Free</Button></div>
              <div className='lg:ml-5 lg:my-0  my-5'> <Button variant="outline" className="w-full">See How It Works</Button></div>
            </div>
        </div>
        <div className="flex-1 heroImage">
            <Image className='' src="/Screenshot 2025-02-26 at 15.40.51.png" width={300} height={600} alt="job-search" />
        </div>
    </div>
  )
}
