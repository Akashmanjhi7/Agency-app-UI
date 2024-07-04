import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='lg:max-w-screen-lg m-auto w-full'>

      {/* Section 1 */}

      <section className='flex flex-col-reverse gap-12 justify-between items-center w-full mt-8 lg:flex-row md:flex-row '>
        <div className='lg:w-1/2 px-6'>
          <h3 className='text-lg'>We are the best Quick notes provider</h3>
          <h1 className='text-4xl font-bold my-3 text-[#5479F7]'>BCA QuickNotes Hub</h1>
          <p className='tracking-tight leading-6'>
            Welcome to BCA QuickNotes Hub! Your ultimate destination for comprehensive, easy-to-understand study notes tailored specifically for BCA students. Simplify your learning with expertly curated resources covering all aspects of your coursework, ensuring academic success. Join us and empower your educational journey with top-quality notes designed to help you excel in your studies.
          </p>
          <div className="button mt-8 gap-5 flex">
            <Link to="/contact" className='bg-[#5479F7] px-3 py-2 border-2 border-[#5479F7] rounded-md hover:border-white duration-200  '><button>Connect Now</button></Link>
            <Link to="/service" className='bg-[rgb(39 39 42)] px-3 py-2 border-2 border-white rounded-md hover:border-[#5479F7] hover:text-[#5479F7] duration-200  '><button>Learn More</button></Link>
          </div>
        </div>

        {/* hero image */}

        <div className='lg:w-[40%] w-[75%] '>
          <img src="/images/images/home.png" alt="Home PNG" />
        </div>

      </section>

      {/* Section 2 */}

      <section className='bg-[#F4F3FF] w-1/2 lg:w-full mx-auto lg:max-w-screen-lg  text-black  flex flex-col lg:flex-row justify-between items-center px-9 py-8 rounded-lg  mt-16 '>

        <div className='flex flex-col items-center border-b-2 py-4 lg:border-r-2 lg:border-b-0 border-black px-8 w-1/4 shrink-0'>
          <h1 className='text-3xl font-bold' >10+</h1>
          <p>Private Insitutes</p>
        </div>

        <div className='flex flex-col items-center border-b-2 py-4 lg:border-r-2 lg:border-b-0 border-black px-8 w-1/4 shrink-0'>
          <h1 className='text-3xl font-bold' >400+</h1>
          <p>College Students </p>
        </div>

        <div className='flex flex-col items-center border-b-2 py-4 lg:border-r-2 lg:border-b-0 border-black px-8 w-1/4 shrink-0'>
          <h1 className='text-3xl font-bold' >6</h1>
          <p className='text-center'>Well Known Instructors</p>
        </div>

        <div className='flex flex-col items-center w-1/4 shrink-0 py-4 '>
          <h1 className='text-3xl font-bold' >24/7</h1>
          <p>Service</p>
        </div>


      </section>

      {/* Section 3 */}

      <section className='flex flex-col-reverse gap-12 justify-between items-center w-full mt-24 lg:flex-row md:flex-row  '>

       {/* hero image */}

       <div className='lg:w-[40%] w-[75%]'>
          <img src="/images/images/design.png" alt="Home PNG" />
        </div>


        <div className='lg:w-1/2 px-6 '>
          <h3 className='text-lg'>We are here to help you</h3>
          <h1 className='text-4xl font-bold my-3 text-[#5479F7]'>Get Started Today</h1>
          <p className='tracking-tight leading-6'>
          Ready to take the first step towards a more efficient and secure Future ? Contact us today for a free consultation and let's discuss how BCA QuickNotes Hub can help your Studies  in the digital age.
          </p>
          <div className="button mt-8 gap-5 flex">
            <Link to="/contact" className='bg-[#5479F7] px-3 py-2 border-2 border-[#5479F7] rounded-md hover:border-white duration-200  '><button>Connect Now</button></Link>
            <Link to="/service" className='bg-[rgb(39 39 42)] px-3 py-2 border-2 border-white rounded-md hover:border-[#5479F7] hover:text-[#5479F7] duration-200  '><button>Learn More</button></Link>
          </div>
        </div>

       
      </section>
      
    </main>
  )
}

export default Home
