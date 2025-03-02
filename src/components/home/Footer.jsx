import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
export default function Footer() {
    const heading = "font-bold mb-3"
  return (
    <main className="py-8 px-10 text-white sm:px-16 pt-4" style={{backgroundColor: "#111827"}}>
        <section className='lg:flex justify-between'>
        <div className='mb-5 lg:mb-0'>
            <h3 className={heading}>JobTrek</h3>
            <p className="text-sm">Making job hunting organized and efficient.</p>
        </div>
        <div className='mb-5 lg:mb-0'>
            <h3 className={heading}>Contact</h3>
            <ul className="text-sm">
                <li className='mb-2'>support@jobtrek.com</li>
                <li>27-800-JOBTREK</li>
            </ul>
        </div>
        <div className='mb-5 lg:mb-0'>
            <h3 className={heading}>Follow Us</h3>
            <ul className='flex'>
                <li className='cursor-pointer'><BsTwitterX /></li>
                <li className='px-2 cursor-pointer'><FaLinkedin /></li>
                <li className='cursor-pointer'><FaFacebookF /></li>
            </ul>
        </div>
        </section>
    </main>
  )
}
