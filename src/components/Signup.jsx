import React, { useState } from 'react'
import registrationimg from "../../public/images/images/register.png"
const Signup = () => {

  const [user, setuser] = useState(
    {
      username: "",
      email:"",
      phone:"",
      password:"",
    }
  )

const handlechange = (e)=>{
  let name = e.target.name;
  let value = e.target.value;

  setuser({
...user,  
    [name]:value
  })
}


const handleSubmit = (e)=>{
  e.preventDefault();
  alert(user)
  console.log(user)
}

  return (
    <div className='flex  justify-between items-center lg:max-w-screen-lg md:max-w-screen-lg m-auto pt-12 flex-col lg:flex-row md:flex-row'>
      <img src={registrationimg} alt="image" className='w-[50%]' />

      <div className='lg:w-[50%] md:w-[50%] mt-4  '>
        <h1 className='text-4xl font-semibold mb-8 border-b-4 border-[#5479F7]  w-2/3'>Registration Form</h1>

        <form action=""  onSubmit={handleSubmit} className='flex-col flex '>

          <label htmlFor='username' className='my-2'>Username</label>

          <input 
          type="text" name="username"  className='px-4 py-2 bg-zinc-700 outline-none border-2  border-zinc-600 rounded-sm '
          required placeholder='Enter your username'
          value={user.username}
          onChange={handlechange}
           />
          
          <label htmlFor='email' className='my-2'>Email</label>

          <input 
          type="email" name="email" className='px-4 py-2 bg-zinc-700 outline-none border-2  border-zinc-600 rounded-sm '
          required placeholder='Enter your email'
          value={user.email}
          onChange={handlechange}
           />
          
          <label htmlFor='number' className='my-2'>Phone</label>

          <input 
          type="number" name="phone"  className='px-4 py-2 bg-zinc-700 outline-none border-2  border-zinc-600 rounded-sm '
          required placeholder='Enter your Phone no.'
          value={user.number}
          onChange={handlechange}
           />
          
          <label htmlFor='password' className='my-2'>Password</label>

          <input 
          type="password" name="password" 
           className='px-4 py-2 bg-zinc-700 outline-none border-2  border-zinc-600 rounded-sm ' 
          required placeholder='Enter your Password'
          value={user.password}
          onChange={handlechange}
           />

          <button className='bg-[#5479F7] rounded-sm mt-8 py-3 w-1/2 ' >Register Now </button> 
        </form>
      </div>
    </div>
  )
}

export default Signup
