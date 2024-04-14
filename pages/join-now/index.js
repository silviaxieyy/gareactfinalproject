import React, { useEffect, useState, useRef } from 'react';
import { useForm, watch } from 'react-hook-form';
import DashboardLayout from '../../components/Layout';
import Comfirm from '../../components/Comfirm';
import emailjs from '@emailjs/browser';
import { useSession } from "next-auth/react"

const JoinNowForm = () => {
  const { 
    register, 
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const form = useRef();
  const { data: session } = useSession()
  

  const [isComfirmOpen, setIsComfirmOpen] = useState(false)
  const [formData, setFormData] = useState([])


  useEffect(() => emailjs.init("Rl-c-JtkBhUn5hgG_"), []);

  const onSubmit = (data, event) => {
    
    setFormData(data);
    setIsComfirmOpen(true);

/*     const {first_name, Card Type, email,mobile_number, card_type } = data; */

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
        <div className='flex mt-5'>
          <div className='w-2/3'>
            <div className='flex flex-col justify-center p-4 text-2xl  mx-40 rounded-lg bg-blue-100'>
              <form 
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className='mt-6 w-full '
              >
                <fieldset className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl" htmlFor="first-name">
                    First Name
                  </label>
                  <input 
                    className='w-64'
                    type="text" 
                    id="first-name" 
                    {...register("first_name", {required: true, max: 2, maxLength: 15})}
                    
                  />
                </fieldset>
                <fieldset className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl" htmlFor="last-name">
                      Last Name
                  </label>
                  <input
                    className='w-64' 
                    type="text" 
                    id="last-name" 
                    {...register("last_name", {required: true, max: 20, min: 2})} />
                </fieldset>
                <fieldset className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl" htmlFor="email">
                      Email
                  </label>
                  {session ?
                    <input
                      type='email'
                      className='w-64 min-h-10 text-xl text-center'
                      defaultValue={session.user.email}
                      {...register('name', {required: true})}
                    />
                    : <input
                        type='email'
                        className='w-64 min-h-10 text-xl text-center'
                        {...register('email', {required: true})}
                      />
                  }
                </fieldset>

{/*                 <fieldset className="mb-[15px] flex items-center gap-5">
                  <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="mobile-number">
                      Mobile Number
                  </label>
                  <input 
                    type="text"
                    id="mobile-number"
                    placeholder="Mobile number" 
                    {...register("mobile_number", {
                      required: true, 
                      pattern: {
                        value: /^[0-9]{8-10}$/
                      }
                    })}
                  />
                </fieldset> */}

                <fieldset className="my-8 flex flex-row justify-center items-center gap-5">
                  <label className="text-violet11 w-32 text-left whitespace-nowrap text-2xl" htmlFor="card-type">
                      Card Type
                  </label>
                  <select 
                    id="card-type" 
                    {...register("card_type", { required: true })}
                    className='w-64 text-center'
                  >
                    <option value="weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Anually</option>
                  </select>
                </fieldset>
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
          <div className='w-1/3'>
            <div className="w-full max-w-md transform mx-5 
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
                  Your have submit an join form, we will contact you soon.
                  Please choose a membership now.
                </p>
                {formData && (
                  <ul>
                    <li className='mt-5 text-xl'>First Name : {formData.first_name}</li>
                    <li className='mt-5 text-xl'>Last Name : {formData.last_name}</li>
                    <li className='mt-5 text-xl'>Email : {formData.email}</li>
                    <li className='mt-5 text-xl'>Card Type : {formData.card_type}</li>
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