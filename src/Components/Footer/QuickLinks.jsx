import React from 'react'
import { Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'

const QuickLinks = () => {
    return (
        <div className='bg-primary w-full text-white py-16'>
            <div className="sm:ml-5 md:ml-7 lg:ml-28 xl:ml-36 ml-44 mr-16">
                <div className="flex justify-between  flex-wrap gap-y-5 w-full py-10 border-b-2 min-h-[400px]">
                    <div className='w-2/4'>
                        <p className='font-bold text-3xl'>QUICK LINKS</p>
                        <ul className='flex flex-wrap items-center justify-between gap-y-5 my-10'>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Enquire Now</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Leadership</Link>
                            <Link to={'/programs'} className='sm:w-full md:w-full lg:w-full w-1/2'>Apply Now</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Alumni</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Student Portal</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Campus Directory</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Faculty Portal</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Library</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>About AURAK</Link>
                            <Link to={''} className='sm:w-full md:w-full lg:w-full w-1/2'>Academic Calendar</Link>
                        </ul>
                    </div>
                    <div className='w-2/4'>
                        <div className="flex justify-end flex-col">
                            <p className='font-bold text-3xl'>STUDY AT AURAK </p>
                            <ul className='flex flex-wrap flex-col items-start justify-between gap-y-5 my-10'>
                                <Link to={''} className='w-1/2'>Bachelors</Link>
                                <Link to={'/programs'} className='w-1/2'>Masters</Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <SocialMedia/>
                <p className='text-xs mt-12 text-gray-300'>Copyright © 2023 American University of Ras Al Khaimah. All rights reserved</p>
            </div>
        </div>
    )
}

export default QuickLinks