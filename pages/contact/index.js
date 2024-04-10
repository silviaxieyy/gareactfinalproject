import React from 'react'
import DashboardLayout from '../../components/Layout';
import Contacttab from '../../components/ComtactTab'

const AboutUS = () => {
  return (
    <div>
      <DashboardLayout>
      <div className='flex flex-col items-center'>
        <div className='mt-6 mb-0'>
          <h1 className='font-russo-one text-4xl font-bold text-gray-400'>Contact us</h1>
        </div>
        <Contacttab />
      </div>      
      </DashboardLayout>
    </div>
  )
}

export default AboutUS