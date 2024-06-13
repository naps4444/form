import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {register, handleSubmit, formState:{errors}, reset} = useForm();

const onSubmit = (formData)=>{
console.log(formData);
reset()
}

  return (
    <>
      <div className='container w-full hero  h-full m-auto lg:my-10 '>

        <div className='md:w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2 justify-center items-center'>

        
        <div className='px-8 md:px-16 lg:px-0'>
          <h1 className='font-bold text-3xl text-white text-center tracking-wider mt-20 lg:mt-0  lg:text-4xl lg:w-12/12 lg:text-left lg:ms-3 xl:w-10/12 xl:ms-6'>Learn to code by watching others</h1>
          <p className='text-white text-center mt-4 lg:w-12/12 lg:text-lg lg:text-left lg:ms-4 xl:ms-6'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
          but understanding how developers think is invaluable. </p>
        </div>

        <div className='mb-12'>

          <div className="form-top bg-[#332870dc] py-5 px-6 rounded-xl mt-6 w-10/12 mx-auto shadow-2xl">
          <p className='text-white text-center'> <span className='font-bold'>Try it free 7 days</span> then $20/mo. thereafter</p>
          </div>

          <div className='mt-4 w-10/12 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className='p-8 rounded-xl bg-white flex flex-col gap-4 shadow-2xl'>

              <div className='border-2 rounded   h-11 bg-white'>
              <input {...register("firstname")} type="text" placeholder='First Name' className='p-2 outline-0 justify-center w-full placeholder-black'/>
              </div>

              <div className='border-2 rounded h-11 bg-white'>
              <input {...register("lastname")} type="text" placeholder='Last Name' className='outline-0 p-2 justify-center w-full placeholder-black' />
              </div>

              <div className='border-2 rounded  h-11 bg-white'>
              <input {...register("email")} type="email" placeholder='Email Address' className=' outline-0 p-2 justify-center w-full placeholder-black'/>
              </div>
              
              <div className='border-2 rounded  h-11 bg-white'>
              <input {...register("password")} type="password" placeholder='Password' className='p-2 outline-0 justify-center w-full placeholder-black'/>
              </div>

              <div className=' rounded  h-11 bg-white shadow-2xl'>
                <button type='submit' className='bg-[#32b37b] hover:bg-[#119e61]  text-white text-sm w-full h-full rounded'>CLAIM YOUR FREE TRIAL</button>
              </div>
 
              <div className='w-12/12 px-2 mx-auto'>
                <p className='text-center text-xs'>By clicking the button, you are agreeing to our <span className='text-[#ff5757] font-bold'>Terms and Services</span> </p>
              </div>

            </form>
          </div>

        </div>

        </div>

      </div>
    </>
  )
}

export default App
