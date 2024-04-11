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
    formState: { errors, isSubmitting } 
  } = useForm();

  const classForm = useRef();

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedClass, setSelectedClass] = useState('');

  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  
  const onSubmit = (e) => {
    

    
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Selected Class:', selectedClass);
  };

  return (
    <div className='flex flex-col items-center mt-6'>
      <h1 className='font-russo-one text-4xl font-bold text-gray-400'>Book a Class</h1>
      <form 
        ref={classForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='mt-4'>
          <label className='mr-6'>Class:</label>
          <select value={selectedClass} onChange={handleClassChange} required>
            <option value="" className='text-center'>-- Select a Class --</option>
            <option value="Yoga" className='text-center'>Yoga</option>
            <option value="Pilates" className='text-center'>Pilates</option>
            <option value="HIIT" className='text-center'>HIIT</option>
            <option value="CYCLE" className='text-center'>Bike</option>
          </select>
        </div>
        <div className='mt-4'>
          <label className='mr-6'>Teacher:</label>
          <select value={selectedClass} onChange={handleClassChange} required>
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
            selected={selectedDate}
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
            value={selectedTime}
            onChange={e => handleTimeChange(e.target.value)}
            required
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
