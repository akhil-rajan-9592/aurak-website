import React from 'react'

const HomeBanner = () => {
    return (
        <div className="bg-[url('assets/images/academic.jpg')] bg-cover bg-center min-h-[500px] relative -mt-10 shadow-bannerbox">
            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44 py-16">
                <div className="absolute bottom-28 text-white">
                    <div className="grid grid-cols-12 gap-3 gap-y-5 w-full">
                        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 col-span-4">
                            <div className='font-bold text-5xl sm:text-4xl break-word'>YOUR FUTURE STARTS HERE</div>
                        </div>                        
                    </div>
                    <div className="absolute border sm:hidden md:hidden lg:hidden border-white bottom-2 left-[10%] w-[35%]"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner