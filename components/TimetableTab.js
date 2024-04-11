import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser';

const TimetableTab = () => {
  const currentDate = new Date();
  
  const { 
    register, 
    handleSubmit,
    reset, 
    setValue,
    formState: { errors, isSubmitting } 
  } = useForm();

  const classForm = useRef();

  const handleDateChange = (date) => {
    setValue('date', date)
  }

  
  const onSubmit = (e) => {
    
    emailjs.sendForm('service_1sf9wj1', 'template_s267ry5', classForm .current, 'Rl-c-JtkBhUn5hgG_')
    .then((result) => {

      reset();
    }, (error) => {
      return <p>There is an error on sending an email!</p>;
    });
  }

  return (
    <div className='flex flex-col items-center mt-6'>
      <h1 className='font-russo-one text-4xl font-bold text-gray-400'>Book a Class</h1>
      <form 
        ref={classForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mt-4'>
          <label className='mr-6'>Class:</label>
          <select {...register('class', {required: true})}>
            <option value="" className='text-center'>-- Select a Class --</option>
            <option value="Yoga" className='text-center'>Yoga</option>
            <option value="Pilates" className='text-center'>Pilates</option>
            <option value="HIIT" className='text-center'>HIIT</option>
            <option value="CYCLE" className='text-center'>Bike</option>
          </select>
        </div>
        <div className='mt-4'>
          <label className='mr-6'>Teacher:</label>
          <select {...register('teacher', {required: true})}>
            <option value="">- Select a Teacher -</option>
            <option value="Yoga" className='text-center'>Alice</option>
            <option value="Pilates" className='text-center'>Judy</option>
            <option value="HIIT" className='text-center'>Bill</option>
            <option value="CYCLE" className='text-center'>Michael</option>
          </select>
        </div>
        <div className='mt-4'>
          <label className="text-violet11 w-[90px] text-right text-[15px] mr-6">Date:</label>
          <DatePicker
          className='text-center'
            selected={currentDate}
            onChange={handleDateChange}
            minDate={currentDate}
            dateFormat="dd-MM-YYYY"
            required
          />
        </div>
        <div className='mt-4'>
          <label>Time:</label>
          <input
            type="time"
            className='ml-5 text-center'
            {...register('time', {required: true})}
          />
        </div>
        <div className='flex justify-between mt-4'>
          <div></div>
          <button type="submit"
            className="border border-solid rounded-xl w-24 bg-sky-100"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TimetableTab;
