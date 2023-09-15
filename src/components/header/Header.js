import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <header>
      <section className='text-firstColor bg-secondColor font-nunito'>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2 md:w-full lg:h-96 sm:h-64'>
            <div className='flex flex-col p-16'>
              <motion.p
                className='text-3xl'
                initial='hidden'
                animate='visible'
                variants={textVariants}
              >Useful tools to stimulate <br /> planning, productivity and <br /> creativity.
              </motion.p>
              <motion.p
                className='text-md mt-96 hidden md:block'
                initial='hidden'
                animate='visible'
                variants={textVariants}
              >complimentary ground shipping on U.S. orders $30+
              </motion.p>
            </div>
          </div>
          <div className='lg:w-1/2 md:w-full bg-firstColor'>
            <div className='flex items-center justify-center sm:flex-row flex-col'>
              <img className='w-full h-full' src='https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header;