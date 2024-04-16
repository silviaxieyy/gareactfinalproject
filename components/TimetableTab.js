import React, { useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';
import { useSession} from "next-auth/react"

const TimetableTab = () => {
  const currentDate = new Date();
  const { data: session } = useSession()
  
  
  const { 
    register, 
    handleSubmit,
    reset, 
    setValue,
    watch,
    formState: { errors, isSubmitting } 
  } = useForm();

  const classForm = useRef();

  const handleDateChange = (date) => {
    setValue('date', date)
  }

  
  const onSubmit = (data) => {
    data.email = session?.user.email;
    data.name = session?.user.name;
    console.log(data.email)
    console.log(data.name)
    console.log(classForm.current)

    emailjs.sendForm('service_1sf9wj1', 'template_s267ry5', classForm.current, 'Rl-c-JtkBhUn5hgG_')
    .then((result) => {

      reset();
    }, (error) => {
      return <p>There is an error on sending an email!</p>;
    });
  }

  return (
    <div className='flex flex-col items-center mt-6'>
      <form 
        ref={classForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='flex flex-row mt-4'>
          <label className='flex w-24 mr-6 my-4 text-2xl'>Class:</label>
          <select 
            {...register('class', {required: true})}
            className='w-64 h-14 text-2xl'
          >
            <option value="" className='text-center'>-- Select a Class --</option>
            <option value="Yoga" className='text-center'>Yoga</option>
            <option value="Pilates" className='text-center'>Pilates</option>
            <option value="HIIT" className='text-center'>HIIT</option>
            <option value="Bike" className='text-center'>Bike</option>
          </select>
        </div>
        <div className='flex flex-row mt-4'>
          <label className='flex w-24 mr-6 my-4 text-2xl'>Teacher:</label>
          <select 
            {...register('teacher', {required: true})}
            className='w-64 h-14 text-2xl text-center'
          >
            <option value="">-- Select a Teacher --</option>
            <option value="Alice" className='text-center'>Alice</option>
            <option value="Judy" className='text-center'>Judy</option>
            <option value="Bill" className='text-center'>Bill</option>
            <option value="Michael" className='text-center'>Michael</option>
          </select>
        </div>
        <div className='flex flex-row mt-4'>
          <label className="flex w-24 mr-6 my-4 text-2xl">Date:</label>
          <DatePicker
            selected={watch('date')}
            className='w-64 h-14 text-2xl text-center'
            {...register('date', { required: true })}
            onChange={handleDateChange}
            minDate={currentDate}
            dateFormat="dd-MM-yyyy"
            required
          />
        </div>
        <div className='flex flex-row mt-4'>
          <label className='flex w-24 mr-6 my-4 text-2xl'>Time:</label>
          <input
            type="time"
            className='w-64 h-14 text-2xl text-center'
            {...register('time', { required: true })}

          />
        </div>
        <div className='flex flex-row mt-4'>
          <label className='flex w-24 mr-6 my-4 text-2xl'>Email:</label>
          {session ?
            <input 
              type='email'
              className='w-64 min-h-10 text-2xl text-center'
              defaultValue={session.user.email}
              {...register('email', {required: true})}
            />
            : <input
                type='email'
                className='w-64 h-14 text-2xl text-center'
                {...register('email', {required: true})}
              />
          }
        </div>
        <div className='flex flex-row mt-4'>
          <label className='flex w-24 mr-6 my-4 text-2xl'>Name:</label>
          {session ?
            <input 
              type='text'
              className='w-64 h-14 text-2xl text-center'
              defaultValue={session.user.name}
              {...register('name', {required: true})}
            />
            : <input
                type='text'
                className='w-64 h-14 text-2xl text-center'
                {...register('name', {required: true})}
              />
          }
        </div>
        <div className='flex justify-between mt-6'>
          <div></div>
          <button type="submit"
            className="border border-solid rounded-xl w-48 text-2xl h-14 bg-sky-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimetableTab;
