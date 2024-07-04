import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='flex flex-col items-center justify-between max-w-screen-lg gap-4 mx-auto mt-12 px-2 lg:flex-row lg:px-1  '>
        <div>
        <h3>Welcome, BCA QuickNotes Hub</h3>
        <h1 className='text-4xl font-bold'>Why Choose Us?</h1>

        <p className='pt-6 text-zinc-200 leading-6 tracking-tight text-md'>Expertise: Our team consists of experienced IT professionals who are
        passionate about staying up-to-date with the latest industry trends.</p>

        <p className='pt-6 text-zinc-200 leading-6 tracking-tight text-md'>
        Customization: We understand that every student is unique. That's why
        we create solutions that are tailored to your specific needs and goals.
        </p>

        <p className='pt-6 text-zinc-200 leading-6 tracking-tight text-md'>
        Customer-Centric Approach: We prioritize your satisfaction and provide
        top-notch support to address your doubts and problems.
        </p>

        <p className='pt-6 text-zinc-200 leading-6 tracking-tight text-md'>
        Affordability: We offer competitive pricing without compromising on the
        quality of our services.
        </p>

        <p className='pt-6 text-zinc-200 leading-6 tracking-tight text-md'>
        Reliability: Count on us to be there when you need us. We're committed
        to ensuring your Study environment is reliable and available 24/7.
        </p>

        <div className="button mt-8 gap-5 flex">
            <Link to="/contact" className='bg-[#5479F7] px-3 py-2 border-2 border-[#5479F7] rounded-md hover:border-white duration-200  '><button>Connect Now</button></Link>
            <Link to="/service" className='bg-[rgb(39 39 42)] px-3 py-2 border-2 border-white rounded-md hover:border-[#5479F7] hover:text-[#5479F7] duration-200  '><button>Learn More</button></Link>
          </div>
        </div>
      {/* About image */}

      <div className='lg:w-[70%] w-[75%] '>
          <img src="/images/images/about.png" alt="About PNG" />
        </div>


       
    </section>
  )
}

export default About
