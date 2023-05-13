import React from 'react'
import { ArrowRightOutlined, SearchOutlined } from '@ant-design/icons'

const OurPrograms = () => {
    return (
        <div className="relative w-full text-white">
            <div className="absolute top-10 w-full">
                <div className='font-bold text-5xl sm:text-4xl break-word text-center'>YOUR FUTURE STARTS HERE</div>
            </div>
            <div className="flex items-center w-ull">
                <div className="bg-[url('assets/images/students.jpg')] bg-cover bg-center min-h-[500px] shadow-topbannerbox relative w-1/2">
                    <div className="flex items-center gap-10 absolute bottom-20 right-0 bg-box-gray rounded-l-[40px] px-10 py-5">
                        <div className="flex items-center justify-center rounded-full p-3 border border-white">
                            <ArrowRightOutlined rotate={-30} className='text-white font-bold'/>
                        </div>
                        <p>Bachelors</p>
                    </div>
                </div>
                <div className="bg-[url('assets/images/programs.jpg')] bg-cover bg-center min-h-[500px] shadow-topbannerbox relative w-1/2">
                    <div className="flex items-center gap-10 absolute bottom-20 left-0 bg-primary rounded-e-[40px] px-10 py-5">
                        <div className="flex items-center justify-center rounded-full p-3 border border-white">
                            <ArrowRightOutlined rotate={-30} className='text-white font-bold'/>
                        </div>
                        <p>Masters</p>
                    </div>
                    <div className="flex items-center gap-10 absolute bottom-20 right-0 bg-box-gray rounded-l-[40px] px-10 py-5">
                        <div className="flex items-center justify-center rounded-full p-3 ">
                            <SearchOutlined className='text-primary font-bold'/>
                        </div>
                        <p>Search Program Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurPrograms