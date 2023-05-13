import React from 'react'
import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'

const BlogList = ({bloglist}) => {
    return (
        <div className="ml-16 mr-44">
            {
                bloglist?.length > 0 ?
                    bloglist?.map(post=>{
                        return(
                            <>
                                <div className="flex flex-col items-start gap-5">
                                    <div className="py-1 border-b-2 border-black">
                                        <p className='text-[#c43c5e]'>{post.date}</p>
                                    </div>
                                    <p className="text-xl font-semibold">{post.title}</p>
                                    <p className='text-sm font-normal'>{post.content}</p>
                                    <Link to={''} className='flex items-center gap-3 font-bold text-sm'>READ MORE <RightOutlined className='text-[#c43c5e]'/></Link>
                                </div>
                                <div className='border border-black my-6'/>
                            </>
                        )
                    })
                :
                <p>Coming Soon...</p>
            }
        </div>
    )
}

export default BlogList