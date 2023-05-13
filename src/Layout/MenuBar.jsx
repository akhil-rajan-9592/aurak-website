import React from 'react'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

const MenuBar = () => {
    return (
        <div className='bg-primary w-full text-white py-5 rounded-b-[32px] relative z-10'>
            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44">
                <nav className='flex items-center justify-between gap-5'>
                    <ul className='flex flex-wrap items-center justify-between gap-9'>
                        <Link to={''}>ABOUT</Link>
                        <Link to={'/programs'}>PROGRAMS</Link>
                        <Link to={''}>JOIN AURAK</Link>
                        <Link to={''}>STUDENT SUPPORT</Link>
                        <Link to={''}>ALUMNI</Link>
                        <Link to={''}>TEACHING</Link>
                        <Link to={''}>RESEARCH</Link>
                    </ul>
                    <div className="flex items-center justify-between gap-5 ">
                        <ul className='flex flex-wrap items-center justify-between gap-9'>
                            <Link to={''}>MEDIA</Link>
                            <Link to={''}>CONTACT</Link>
                        </ul>
                        <div className="flex items-center justify-center rounded-full p-3 bg-white">
                            <SearchOutlined className='text-black font-bold'/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MenuBar