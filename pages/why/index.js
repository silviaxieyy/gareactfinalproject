import React from 'react'
import DashboardLayout from '../../components/Layout'
import Link from 'next/link'

const Why = () => {
  return (
    <div>
      <DashboardLayout>
      <main>
          <div className="flex flex-col items-center mt-6">
            <h1 className="font-russo-one text-4xl font-bold text-blue-200">Boost your mood</h1>
            <h1 className="font-russo-one text-4xl font-bold text-blue-300">with Superfit</h1>
            <br />
            <h1 className="font-russo-one text-2xl font-bold text-blue-200">We're here for you feel fantastic 24/7</h1>
            <p className='w-3/5 mx-40 mt-4 text-gray-700'>We offer the most open, inclusive, empathetic, supportive fitness experience
               to every member at every level. Whether you are an absolute beginner or workout regularly, 
               our gyms are spaces that you will feel comfortable in.</p>
            
            <Link href='/join-now'>
              <button className="border border-solid rounded-md w-48 h-12 text-xl text-white bg-blue-500 mt-4 p-1">Try us for free</button>
            </Link>

            <div className="flex flex-row items-center mx-auto px-2">
              <img
                src="https://cdn.pixabay.com/photo/2021/01/04/06/21/fitness-5886573_1280.jpg"
                alt="training class"
                className="bg-cover w-1/3 mt-4 px-2"
              />

              <img
                src="https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg"
                alt="gym"
                className="bg-cover w-1/3 mt-4 px-2"
              />
              <img
                src="https://cdn.pixabay.com/photo/2023/12/19/22/46/man-8458535_1280.jpg"
                alt="gym"
                className="bg-cover w-1/3 mt-4 px-2"
              />

            </div>
            <button className="border border-solid rounded-md w-48 h-12 text-white bg-blue-400 mt-4 p-1">
              Find Your Local club
            </button>
          </div>
          
        </main>
      </DashboardLayout>
    </div>
  )
}

export default Why