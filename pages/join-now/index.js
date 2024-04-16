import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../components/Layout';
import Comfirm from '../../components/Comfirm';
import emailjs from '@emailjs/browser';
import { useSession } from "next-auth/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const JoinNowForm = () => {
  const { 
    register, 
    handleSubmit,
    reset,
    setValue,
    watch, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const form = useRef();
  const { data: session } = useSession()
  const full_name = session?.user?.name;
  
  console.log(full_name)  

  const [isComfirmOpen, setIsComfirmOpen] = useState(false)
  const [formData, setFormData] = useState([])


  useEffect(() => emailjs.init("Rl-c-JtkBhUn5hgG_"), []);

  const onSubmit = (data, event) => {
    setFormData(data);
    setIsComfirmOpen(true);

/*     const {first_name, term, email,mobile_number, card_type } = data; */

    emailjs.sendForm('service_1sf9wj1', 'template_l46463y', form.current, 'Rl-c-JtkBhUn5hgG_')
      .then((result) => {

        reset();
      }, (error) => {
        return <p>There is an error on sending an email!</p>;
      });
  }

  return (
      <DashboardLayout>
        <h1 className='font-russo-one text-center mt-5 text-4xl font-bold text-gray-400'>
          Welcome to Join us
        </h1>
        <div className='flex mt-3 mx-10'>
          <div className='lg:w-2/3 md:min-w-96 sm:min-w-64'>
            <div className='flex flex-col justify-center p-4 text-2xl
              mx-20 w-3/5 rounded-lg bg-blue-100'>
              <form 
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className='w-full'
                noValidate
              >
                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                    Full Name
                  </label>
                  {session ?
                    <input 
                      type='text'
                      className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-xl text-center'
                      defaultValue={session.user.name}
                      {...register('name', {required: true})}
                    />
                    : <input
                        type='text'
                        className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-xl text-center'
                        {...register('name', {required: true})}
                      />
                  }
                </div>

                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                      Email
                  </label>
                  {session ?
                    <input
                      type='email'
                      id='email'
                      className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-xl text-center'
                      defaultValue={session.user.email}
                      {...register('email', {required: true})}
                    />
                    : <input
                        type='email'
                        className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-xl text-center'
                        {...register('email', {required: true})}
                      />
                  }
                </div>

{/*                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                      Mobile
                  </label>
                  <input 
                    type="tel"
                    id="mobile-number"
                    className='w-3/5 min-h-10 text-xl text-center'
                    placeholder="Mobile number"
                    pattern="^\d{10}$" 
                    {...register("mobile_number", {required: true})}
                    noValidate
                  />
                </div> */}

                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                    Gender
                  </label>
                  <select 
                    id="gender" 
                    {...register("gender", { required: true })}
                    className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-center'
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                
                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                    Date of Birth
                  </label>
                  <div className='min-h-12 text-xl text-center'>
                    <DatePicker
                      className='lg:w-80 md:w-48 sm:w-32 min-h-12 w-64 text-xl text-center'
                      selected={watch('date')}
                      {...register('date', { required: true })}
                      onChange={(date) => setValue('date', date)}
                      dateFormat="dd-MM-yyyy"
                      showYearDropdown
                      scrollableYearDropdown
                      showMonthDropdown
                      scrollableMonthDropdown
                      yearDropdownItemNumber={60}
                      minDate={new Date(1950, 0, 1)}
                      maxDate={new Date(2006, 11, 31)}
                      required
                    />
                  </div>
                 </div>

                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                    State
                  </label>
                  <select 
                    id="state" 
                    {...register("state", { required: true })}
                    className='lg:w-80 md:w-64 sm:w-48 min-h-12 w-64 text-center'
                  >
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="NSW">NSW</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                  </select>
                </div>

                <div className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl">
                      Term
                  </label>
                  <select 
                    id="term" 
                    {...register("term", { required: true })}
                    className='lg:w-80 md:w-64 sm:w-48 min-h-12 text-center'
                  >
                    <option value="weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                  </select>
                </div>
                <div className='flex justify-between'>

                  <button 
                    disabled={isSubmitting}
                    className="inline-flex justify-between rounded-md  
                    bg-blue-500 p-2 mx-auto text-2xl text-blue-900 hover:bg-blue-300 
                    focus-visible:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='w-1/3 mx-10'>
            <div className="lg:w-full md:max-w-md transform mx-5 
              overflow-hidden rounded-2xl bg-white p-6 text-left align-middle 
              shadow-xl transition-all">
              <p
                as="h3"
                className="text-2xl text-center leading-6 text-gray-900"
              >
                SUMMARY  
              </p>
              <div className="mt-2">
                <p className="text-xl mt-5 text-gray-500">
                  Your have submitted a join form, we will contact you soon.
                  Please choose a membership now.
                </p>
                {formData && (
                  <ul>
                    <li className='mt-5 text-xl'>Full Name : {session ? session.user.name : formData.name}</li>
                    <li className='mt-5 text-xl'>Email : {session ? session.user.email : formData.email}</li>
                    <li className='mt-5 text-xl'>Gender : {watch('gender')}</li>
                    <li className='mt-5 text-xl'>Date of Birth : {watch('date')?.toLocaleDateString()}</li>
                    <li className='mt-5 text-xl'>State : {watch('state')}</li>
                    <li className='mt-5 text-xl'>Term : {watch('term')}</li>
                  </ul>
                )
                }
              
              </div>
              <div className="flex flex-row mt-4">

              </div>
            </div>
          </div>
        </div>

        <Comfirm 
        isOpen={isComfirmOpen}
        onClose={() => setIsComfirmOpen(false)} 
        formData={formData}
      />
        

      </DashboardLayout>
  );
}
export default JoinNowForm;