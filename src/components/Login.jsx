import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; 
import login from '../../public/images/images/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
  const [eye, setEye] = useState(false); 
  const [userlogin, setuserlogin] = useState({
    email: "",
    password: ""
  })


  // toggele eye feature
  const handleToggle = () => {
    setEye(prevEye => !prevEye);
  };

  // handle onchange Event

  const handlechange = (e) =>{
    let name = e.target.name;
    let value = e.target.value;
    
    setuserlogin({
      ...userlogin,
      [name]: value
    })
  }

  // handle Submit

  const handleSubmit = (e) =>{
   e.preventDefault();
   console.log(userlogin)
  }

  return (
    <div className="flex flex-col justify-between items-center max-w-screen-lg m-auto pt-12 lg:gap-24 lg:flex-row md:flex-row">
      <img src={login} alt="Signup" className="lg:w-[50%] w-[45%]" />
      <div className="lg:w-[50%] md:w-[50%]">
        <h1 className="lg:text-4xl font-semibold lg:mb-12 md:mb-12 border-b-4 border-[#5479F7] w-1/2 mt-6">Login Here</h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="my-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="px-4 py-2 bg-zinc-700 outline-none border-2 border-zinc-600 rounded-sm"
            required
            placeholder="Email address"
            onChange={handlechange}
            value={userlogin.email}
          />
          <label htmlFor="password" className="my-2">
            Password
          </label>
          <div className="w-full flex items-center justify-between pr-2 bg-zinc-700 border-2 border-zinc-600 rounded-sm">
            <input
              type={eye ? "text" : "password"}
              name="password"
              className="px-4 py-2 outline-none bg-transparent flex-grow"
              required
              placeholder="Password"
              onChange={handlechange}
              value={userlogin.password}
            />
            <div onClick={handleToggle} className="cursor-pointer">
              {eye ? <EyeOff className='text-zinc-400' /> : <Eye className='text-zinc-400' />}
            </div>
          </div>
          <button className="w-1/2 mt-4 bg-[#5479F7] px-4 py-2 rounded-md">
            Login
          </button>
        </form>

        <p className='py-3 text-sm text-zinc-400 '>New to BCA Notes?<Link to="/signup" className='text-zinc-200 font-semibold'> Sign up now.</Link> </p>
      </div>
    </div>
  );
};

export default Login;
