import React from 'react'

const AurakCampus = () => {
  return (
    <div className='bg-gray-bg w-full text-black py-16 h-full'>
        <div className=" mx-16">
            <div className="flex flex-col justify-between items-start w-full py-10 border-b-2 border-black min-h-[400px]">
                <p className='font-bold text-3xl'>AURAK CAMPUS</p>
                <div className="flex flex-col items-start my-5">
                    <p className='font-bold text-lg leading-6'>AURAK</p>
                    <p className='font-normal text-sm leading-6'>Ras al Khaimah, UAE</p>
                    <p className='font-normal text-sm leading-6'>PO Box: 10021</p>
                </div>
                <div className="flex items-center gap-10 flex-wrap">
                    <div className="flex flex-col items-start">
                        <p className='font-bold text-lg leading-6'>Tel</p>
                        <p className='font-normal text-sm leading-6'>+ 971 7 2210 900</p>
                    </div>
                    <div className="flex flex-col items-start">
                        <p className='font-bold text-lg leading-6'>Fax</p>
                        <p className='font-normal text-sm leading-6'>+ 971 7 2210 300</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-10 my-8 flex-wrap">
                <div className="flex flex-col items-start">
                    <p className='font-bold text-lg leading-6'>Email</p>
                    <p className='font-normal text-sm leading-6'>info@aurak.ac.ae</p>
                </div>
                <div className="flex flex-col items-start">
                    <p className='font-bold text-lg leading-6'>Admissions</p>
                    <p className='font-normal text-sm leading-6'>admissions@aurak.ac.ae</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AurakCampus