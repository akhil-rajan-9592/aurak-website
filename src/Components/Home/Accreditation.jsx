import React from 'react'
import caa from '../../assets/images/caa.png'
import abet from '../../assets/images/abet.png'
import abet2 from '../../assets/images/abet2.png'
import institute from '../../assets/images/institute.png'

const Accreditation = () => {
    return (
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 col-span-3 bg-box-gray text-white">
            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44 py-16 flex flex-col gap-y-10">
                <div className="flex">
                    <p className='font-bold text-7xl sm:text-4xl break-all'>ACCREDITATION</p>
                </div>
                <div className="flex items-center flex-wrap justify-between my-10">
                    <img src={caa} alt="CAA" />
                    <img src={abet} alt="abet" />
                    <img src={abet2} alt="abet2" />
                    <img src={institute} alt="institute" />
                </div>
            </div>
        </div>
    )
}

export default Accreditation