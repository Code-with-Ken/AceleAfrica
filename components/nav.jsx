import React from 'react'
import Link from 'next/link'
const nav = () => {
    return (
        <section className='absolute inset-0 w-full'>
            <div className="flex items-center justify-between py-4 mx-12">
                <div>
                    <p className="text-2xl font-bold">ACELEAFRICA</p>
                </div>
                <div className="flex items-center gap-4">
                    <ul className="flex gap-4 text-sm text-white">
                        <li className="hover:text-[#6EB846]"><Link href="/">Home</Link></li>
                        <li className="hover:text-[#6EB846]"><Link href="/about">About Us</Link></li>
                        <li className="hover:text-[#6EB846]"><Link href="/service">Services</Link></li>
                        <li className="hover:text-[#6EB846]"><Link href="/contact_us">Contact Us</Link></li>
                    </ul>
                    <button className="bg-[#F6D707] p-2 font-light hover:bg-[#040404] hover:text-white rounded-lg">Get Started</button>
                </div>
            </div>
        </section>
    )
}

export default nav
