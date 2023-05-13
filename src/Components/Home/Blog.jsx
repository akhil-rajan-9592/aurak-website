import React from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import blogpost from '../../assets/images/blog-post.png'
import BlogList from './BlogList'
import { blogList } from '../../Utils/bloglistData'
const Blog = () => {
    return (
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-3 xl:col-span-3 col-span-3 bg-blog-bg text-black">
            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44 py-16">
                <div className="relative">
                    <div className="grid grid-cols-12 gap-3 gap-y-5 w-full">
                        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4 col-span-4">
                            <div className='font-bold text-5xl sm:text-4xl break-word'>LATEST NEWS <br/>& EVENTS</div>
                        </div>
                        <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-8 col-span-8">
                            <div className="flex flex-wrap gap-5 items-center justify-between p-3">
                                <button className='text-black px-10 py-1 rounded-3xl border-[#8d9399] border-2'>VIEW ALL</button>
                                <div className="flex flex-wrap items-center gap-4">
                                    <button className='bg-[#c43c5e] text-white px-10 py-1 rounded-3xl border-white '>NEWS</button>
                                    <button className='text-black px-10 py-1 rounded-3xl border-[#8d9399] border-2'>EVENTS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute border sm:hidden md:hidden lg:hidden border-black bottom-2 right-0 w-[75%]"></div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 gap-y-5 w-full">
                <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-6">
                    <div className="flex flex-col">
                        <img src={blogpost} alt="Blog Thumb" />
                        <div className='bg-[#c43c5e] w-full text-white py-5'>
                            <div className="sm:mx-5 md:mx-7 lg:mx-28 xl:mx-36 mx-44 py-16">
                                <div className="flex flex-col items-start gap-5">
                                    <div className="py-1 border-b-2 border-white">
                                        <p>09-01-2022</p>
                                    </div>
                                    <p className="text-xl font-semibold">Enterpreneurship Talk</p>
                                    <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus enim voluptate! Obcaecati, ad quod quam dolorem adipisci nostrum temporibus corporis iste vero in, distinctio qui ullam quasi voluptatem ratione.</p>
                                    <Link to={''} className='flex items-center gap-3 font-bold text-sm'>READ MORE <RightOutlined/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-6">
                    <BlogList bloglist={blogList}/>
                </div>
            </div>
        </div>
    )
}

export default Blog