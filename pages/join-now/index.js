import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import DashboardLayout from '../../components/Layout';
import Comfirm from '../../components/Comfirm';
import emailjs from '@emailjs/browser';

const JoinNowForm = () => {
  const { 
    register, 
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm();

  const form = useRef();

  const [isComfirmOpen, setIsComfirmOpen] = useState(false)
  const [formData, setFormData] = useState(null)


  useEffect(() => emailjs.init("Rl-c-JtkBhUn5hgG_"), []);

  const onSubmit = (data, event) => {
    setFormData(data);
    setIsComfirmOpen(true);

/*     const {first_name, last_name, email,mobile_number, card_type } = data; */

    emailjs.sendForm('service_1sf9wj1', 'template_l46463y', form.current, 'Rl-c-JtkBhUn5hgG_')
      .then((result) => {

        reset();
      }, (error) => {
        return <p>There is an error on sending an email!</p>;
      });
  }

  return (
      <DashboardLayout>
        <div className='flex flex-col items-center mt-20'>    
          <div className='p-4 rounded-lg '>
            <div className='flex justify-center items-center'>
              <h1 className='font-russo-one text-4xl font-bold text-gray-400'>Welcome to Join us</h1>
            </div>
            <form 
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className='mt-6 w-1/3'
            >
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="first-name">
                  First Name
                </label>
                <input 
                  type="text" placeholder="First Name"
                  id="first-name" 
                  {...register("first_name", {required: true, max: 2, maxLength: 15})}
                  
                />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="last-name">
                    Last Name
                </label>
                <input type="text" 
                  placeholder="Last Name" 
                  id="last-name" 
                  {...register("last_name", {required: true, max: 20, min: 2})} />
              </fieldset>
              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="email">
                    Email
                </label>
                <input 
                  type="email" 
                  id='email'
                  placeholder="Email" {...register("email", {required: true})} 
                />
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

              <fieldset className="mb-[15px] flex items-center gap-5">
                <label className="text-violet11 w-[90px] text-right text-[15px]" htmlFor="card-type">
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
                  className="border border-solid rounded-xl w-24 bg-sky-500"
                />
              </div>
            </form>
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