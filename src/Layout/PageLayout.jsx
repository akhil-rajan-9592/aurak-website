import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import MenuBar from './MenuBar'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <div>
        <Header/>
        <MenuBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default PageLayout