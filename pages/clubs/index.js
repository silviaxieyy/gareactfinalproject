import React from 'react';
import dynamic from 'next/dynamic';
import DashboardLayout from '../../components/Layout';
import MapMarker from '../../components/MapMarker';

const DynamicMap = dynamic(() => import("../../components/MapMarker"), {
  ssr: false,
})

const Clubs = () => {
  return (
    <div>
      <DashboardLayout>
        <div className="flex justify-center items-center mt-2">
          <div className='mt-2 mb-0'>
            <h1 className='font-russo-one text-4xl font-bold text-gray-400 mx-auto'>Club choices</h1>
          </div>
          <DynamicMap />
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Clubs