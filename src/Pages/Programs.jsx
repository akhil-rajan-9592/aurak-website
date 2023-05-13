import React from 'react'
import Banner from '../Components/Programs/Banner'

const Programs = () => {
    return (
        <>
            <Banner/>
            <div className='bg-white w-full text-black min-h-[300px] py-16'>
                <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44">
                    <div className='font-bold text-5xl sm:text-4xl break-word'>IT'S THE PLACE YOU CAN LEARN <br/>& GROW</div>
                    <p className='my-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eveniet delectus asperiores nisi nam natus est. Corrupti voluptas, ad aliquid inventore maiores, vero est officia obcaecati commodi repellendus voluptatibus earum.</p>
                </div>
            </div>
        </>
    )
}

export default Programs