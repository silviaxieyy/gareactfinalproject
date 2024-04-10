import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-gradient-to-r from-cyan-100 to-blue-100">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout