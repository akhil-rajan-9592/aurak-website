import React from 'react'
import QuickLinks from '../Components/Footer/QuickLinks'
import AurakCampus from '../Components/Footer/AurakCampus'

const Footer = () => {
    return (
        <div className="grid grid-cols-12 w-full">
            <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-8 col-span-8 min-h-[500px]">
                <QuickLinks/>
            </div>
            <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 col-span-4 min-h-[500px]">
                <AurakCampus/>
            </div>
        </div>
    )
}

export default Footer