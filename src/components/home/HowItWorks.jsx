import React from 'react'
import { BsFillPersonPlusFill } from "react-icons/bs";
import { FaTrophy, FaBell, FaPlus } from "react-icons/fa6";

export default function HowItWorks() {
    const section = "flex flex-col items-center text-center mb-5";
    const iconClasses = "bg-deepIndigo-light text-deepIndigo text-4xl p-2 w-12 h-12 rounded-full";
    const heading = "font-bold lg:text-lg my-2 text-center text-deepIndigo";
    const paragraph = "text-center text-sm lg:text-base";
    return (
        <main className='py-10 px-14'>
            <h2 className='text-center font-bold text-2xl lg:text-3xl text-deepIndigo'>How it works?</h2>
            <section className='lg:flex gap-10 mt-5 justify-center'>

                <div className={section}>
                    <BsFillPersonPlusFill className={iconClasses} />
                    <h3 className={heading}>Create an Account</h3>
                    <p className={paragraph}>Sign up and set up your job search preferences</p>
                </div>

                <div className={section}>
                    <FaPlus className={iconClasses} />
                    <h3 className={heading}>Add Applications</h3>
                    <p className={paragraph}>Log your job applications effortlessly</p>
                </div>

                <div className={section}>
                    <FaBell className={iconClasses} />
                    <h3 className={heading}>Track & Get Reminders</h3>
                    <p className={paragraph}>Stay updated with schedules and offers</p>
                </div>

                <div className={section}>
                    <FaTrophy className={iconClasses} />
                    <h3 className={heading}>Land Your Dream Job</h3>
                    <p className={paragraph}>Apply smarter and get hired faster</p>
                </div>

            </section>
        </main>
    );
}
