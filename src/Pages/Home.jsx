import React from 'react'
import Ranked from '../Components/Home/Ranked'
import Accreditation from '../Components/Home/Accreditation'
import Blog from '../Components/Home/Blog'
import HomeBanner from '../Components/Home/HomeBanner'
import OurPrograms from '../Components/Home/OurPrograms'

const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <Ranked/>
            <OurPrograms/>
            <Blog/>
            <Accreditation/>
        </div>
    )
}

export default React.memo(Home)