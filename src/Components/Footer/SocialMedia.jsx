import React from 'react'
import { LinkedinOutlined, InstagramOutlined, FacebookOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'

const SocialMedia = () => {
    return (
        <div className="flex items-center my-8 gap-5 flex-wrap">
            <div className="flex items-center justify-center rounded-full p-2 border-2">
                <FacebookOutlined className='text-white font-bold'/>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 border-2">
                <TwitterOutlined className='text-white font-bold'/>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 border-2">
                <YoutubeOutlined  className='text-white font-bold'/>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 border-2">
                <LinkedinOutlined  className='text-white font-bold'/>
            </div>
            <div className="flex items-center justify-center rounded-full p-2 border-2">
                <InstagramOutlined className='text-white font-bold'/>
            </div>
        </div>
    )
}

export default SocialMedia