import { GlobalOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import React from 'react'
import mainLogo from '../assets/images/aurak-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    const items = [
        {
          label: '1st menu item',
          key: '0',
        },
        {
          label: '2nd menu item',
          key: '1',
        }
      ];
    return (
        <div className='bg-white w-full text-white py-5'>
            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44">
                <div className="grid grid-cols-12 gap-3 gap-y-5 w-full">
                    <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 col-span-4">
                        <Link to='/'>
                            <img src={mainLogo} alt="Aurak Logo" />
                        </Link>
                    </div>
                    <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-8 col-span-8">
                        <div className="flex flex-wrap gap-5 items-center justify-between">
                            <div className="flex items-center">
                                <Dropdown menu={{items}} trigger={['click']}>
                                    <div className='flex items-center gap-2'>
                                        <GlobalOutlined className='text-3xl text-black'/>
                                        <DownOutlined className='text-lg text-green-400 font-bold'/>
                                    </div>
                                </Dropdown>

                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-black font-semibold">
                                <div className='flex items-center gap-1'>
                                    <UserOutlined/>
                                    <span>STUDENT PORTAL</span>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <UserOutlined/>
                                    <span>FACULTY PORTAL</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <button className='bg-primary text-white px-5 py-2 rounded-3xl border-white border-none'>ENQUIRE NOW</button>
                                <button className='bg-primary text-white px-5 py-2 rounded-3xl border-white border-none'>APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header