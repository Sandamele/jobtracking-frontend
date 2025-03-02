import React from 'react'
import { FaFolderOpen, FaCalendarCheck } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function WhyChooseJobTrek() {
    const iconClasses = "text-deepIndigo text-4xl";
    const whyChooseClasses = "mb-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer";
    const headingClass = "font-bold text-base lg:text-lg my-2";
    const paragraph = "text-sm lg:text-base"
  return (
    <main className='py-10 px-14 bg-gray-100 cursor-pointer'>
        <h2 className='text-2xl lg:text-3xl font-bold text-center text-deepIndigo'>Why Choose JobTrek?</h2>
        <section className='lg:flex gap-3 mt-5'>
            <div className={whyChooseClasses}>
                <div><FaFolderOpen className={iconClasses} /></div>
                <h3 className={headingClass}>Stay Organised</h3>
                <p className={paragraph}>Keep all job applications in one place with our intuitive dashboard.</p>
            </div>
            <div className={whyChooseClasses}>
                <div><FaCalendarCheck className={iconClasses} /></div>
                <h3 className={headingClass}>Interview Reminders</h3>
                <p className={paragraph}>Never miss an important interview with timely notifications.</p>
            </div>
            <div className={whyChooseClasses}>
                <div><BsGraphUp className={iconClasses} /></div>
                <h3 className={headingClass}>Insights & Analytics</h3>
                <p className={paragraph}>Track success rates and visualize your application progress.</p>
            </div>
            <div className={whyChooseClasses}>
                <div><MdEmail className={iconClasses} /></div>
                <h3 className={headingClass}>Follow-Up Reminders</h3>
                <p className={paragraph}>Get automated reminders to send follow-up emails.</p>
            </div>
        </section>
    </main>
  )
}
