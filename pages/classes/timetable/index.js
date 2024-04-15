import { useState } from 'react'
import DashboardLayout from '../../../components/Layout'
import TimetableTab from '../../../components/TimetableTab'


const Timetable = () => {

  return (
    <div>
      <DashboardLayout>
      <h1 className='font-russo-one text-4xl text-center mt-10 font-bold text-gray-400'>Book a Class</h1>
        <div className='flex'>
          <div className='w-1/3 flex-col lg:flex hidden md:hidden sm:hidden'>
          <div className='h-full'>
            <img
                  src="https://cdn.pixabay.com/photo/2017/01/20/11/44/yoga-1994667_1280.jpg"
                  alt="YOGA class"
                  className="bg-cover mt-4 mx-5 px-5"
            />
          </div>
          <div className='h-full'>
            <img
              src="https://cdn.pixabay.com/photo/2017/01/03/07/52/weights-1948813_1280.jpg"
              alt="Pilates"
              className="bg-cover mt-4 mx-5 px-5"
            />
          </div>
        </div>

          <div className='w-1/3 sm:w-full'>
            <TimetableTab />
          </div>
          <div className='w-1/3 flex-col lg:flex hidden sm:hidden'>
            <div className='h-full'>
              <img
                src="https://cdn.pixabay.com/photo/2018/04/04/16/45/kettlebell-3290303_960_720.jpg"
                alt="HIIT"
                className="bg-cover mt-4 mr-5 px-5"
              />
            </div>
            <div className='h-full'>
              <img
                src="https://cdn.pixabay.com/photo/2016/05/14/03/24/girl-in-the-gym-1391368_1280.jpg"
                alt="CYCLING"
                className="bg-cover mt-4 mr-5 px-5"
              />
            </div>
          </div>
        </div>

      </DashboardLayout>
    </div>
  )
}

export default Timetable