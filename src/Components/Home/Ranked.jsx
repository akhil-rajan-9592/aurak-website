import React from 'react'

const Ranked = () => {
    return (
        <div className="grid grid-cols-6 w-full">
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 col-span-3 bg-primary text-white">
                <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44">
                    <div className="flex flex-col items-start gap-10 my-10">
                        <p className='font-bold text-lg leading-6'>Ranked</p>
                        <div className="flex items-center gap-5">
                            <p className='font-bold text-7xl leading-6'>#11</p>
                            <div className='border border-gray-100 w-10'></div>
                            <p className='font-normal text-sm leading-6'>RS Ranking 2022</p>
                        </div>
                        <p className='font-normal text-lg leading-6'>IN THE UNITED ARAB EMIRATES</p>
                    </div>
                </div>
            </div>
            <div className="sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 col-span-3 bg-box-gray text-white">
                <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44">
                    <div className="flex flex-col items-start gap-10 my-10">
                        <p className='font-bold text-lg leading-6'>Ranked</p>
                        <div className="flex items-center gap-5">
                            <p className='font-bold text-7xl leading-6'>#49</p>
                            <div className='border border-gray-100 w-10'></div>
                            <p className='font-normal text-sm leading-6'>RS Ranking 2022</p>
                        </div>
                        <p className='font-normal text-lg leading-6'>IN THE ARAB REGION</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranked