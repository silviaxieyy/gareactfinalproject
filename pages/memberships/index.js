import React from 'react'
import DashboardLayout from '../../components/Layout'
import MembershipTabs from '../../components/MembershipTabs'

const Memberships = () => {
  return (
    <div>
      <DashboardLayout>
        <div className='flex flex-row'>
          <div className='flex flex-col items-center w-full'>
            <div className='mt-4 mb-0'>
              <h1 className='font-russo-one text-4xl font-bold text-gray-400'>Memberships Options</h1>
            </div>
            <MembershipTabs />
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Memberships