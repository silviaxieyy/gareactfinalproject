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
        <h1 className='font-russo-one text-center mt-5 text-4xl font-bold text-gray-400'>Welcome to Join us</h1>
        <div className='flex flex-row justify-center items-center mt-5'>    
          <div className='flex flex-col p-4 text-2xl  mx-40 rounded-lg bg-blue-100'>
            <form 
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className='mt-6 w-full'
            >
              <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                <label className="text-violet11 w-[90px] text-left whitespace-nowrap text-2xl" htmlFor="first-name">
                  First Name
                </label>
                <input 
                  type="text" placeholder="First Name"
                  id="first-name" 
                  {...register("first_name", {required: true, max: 2, maxLength: 15})}
                  
                />
              </fieldset>
              <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                <label className="text-violet11 w-[90px] text-left whitespace-nowrap text-2xl" htmlFor="last-name">
                    Last Name
                </label>
                <input type="text" 
                  placeholder="Last Name" 
                  id="last-name" 
                  {...register("last_name", {required: true, max: 20, min: 2})} />
              </fieldset>
              <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                <label className="text-violet11 w-[90px] text-left whitespace-nowrap text-2xl" htmlFor="email">
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

{/*               <fieldset className="mb-[15px] flex items-center gap-5">
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

              <fieldset className="mb-[15px] flex flex-col items-center gap-5">
                <label className="text-violet11 w-[90px] text-left whitespace-nowrap text-2xl" htmlFor="card-type">
                    Card Type
                </label>
                <select id="card-type" {...register("card_type", { required: true })}>
                  <option value="weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Annually">Anually</option>
                </select>
              </fieldset>
              <div className='flex justify-between'>
                <div>      </div>
                <input 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex justify-between rounded-md border border-transparent 
                  bg-blue-400 px-4 py-2 mx-auto text-sm font-medium text-blue-900 hover:bg-blue-200 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                />
              </div>
            </form>
          </div>
          <div className='hidden md:flex flex-col mx-40 flex-shrink-0'>
            <div className="flex flex-col w-72 h-full max-w-md px-1 py-8 mx-2 sm:px-0">
                <div className="w-full max-w-md transform mx-auto 
                  overflow-hidden rounded-2xl bg-white p-6 text-left align-middle 
                  shadow-xl transition-all">
                  <p
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    SUMMARY  
                  </p>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your have submit an join form, we will contact you soon.
                      Please choose a membership now.
                    </p>
                    {formData && (
                      <ul>
                        <li>First Name : {formData.first_name}</li>
                        <li>Last Name : {formData.last_name}</li>
                        <li>Email : {formData.email}</li>
                        <li>Card Type : {formData.card_type}</li>
                      </ul>
                    )
                    }
                  
                  </div>
                  <div className="flex flex-row mt-4">

                  </div>
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