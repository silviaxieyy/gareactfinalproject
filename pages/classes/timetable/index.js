import { useState } from 'react'
import DashboardLayout from '../../../components/Layout'
import TimetableTab from '../../../components/TimetableTab'


const Timetable = () => {

  return (
    <div>
      <DashboardLayout>
        <div className="flex justify-center items-center mt-6">
            <div className="flex flex-row items-center mx-auto px-2">
              <img
                src="https://cdn.pixabay.com/photo/2017/01/20/11/44/yoga-1994667_1280.jpg"
                alt="YOGA class"
                className="bg-cover w-1/4 mt-4 px-5"
              />

              <img
                src="https://cdn.pixabay.com/photo/2017/01/03/07/52/weights-1948813_1280.jpg"
                alt="Pilates"
                className="bg-cover w-1/4 mt-4 px-5"
              />
              <img
                src="https://cdn.pixabay.com/photo/2018/04/04/16/45/kettlebell-3290303_960_720.jpg"
                alt="HIIT"
                className="bg-cover w-1/4 mt-4 px-5"
              />
              <img
                src="https://cdn.pixabay.com/photo/2016/05/14/03/24/girl-in-the-gym-1391368_1280.jpg"
                alt="CYCLING"
                className="bg-cover w-1/4 mt-4 px-5"
              />
            </div>
          </div>
        <TimetableTab />
      </DashboardLayout>
    </div>
  )
}

export default Timetable