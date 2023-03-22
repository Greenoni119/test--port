import React from 'react'
import {AiFillGithub,AiOutlineLaptop} from "react-icons/ai"
  import Image from 'next/image';
  import bnm from '../public/bnm.png';
  import foody from '../public/foody.png';
  import csm from '../public/csm.png';
  import ogps from '../public/ogps.png';
  
const Portfolio = () => {
  return (
    <div>
        
          <div name='Projects' className='h-screen items-center bg-stone-700 w-full pt-60 dark:bg-violet-900 pb-40'>
          
 <div className='max-w-screen-2xl mx-auto p-4 flex flex-col justify-center w-full h-full text-neutral-400'>
 
<div className=''>
                <p className='text-3xl font-bold inline border-b-4 border-orange-500 text-neutral-500 py-2 sm:text-5xl dark:border-cyan-500 dark:text-rose-800'>
                  Projects
                </p>
                
              </div>
                  

        
              <div className=' pt-10 grid grid-cols-2 gap-3 max-screen-md lg:grid-cols-4'>
                    
                      <div className=' shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-cyan-500'>
                     <Image src={csm} alt="image of the computer science homepage" className='rounded-md duration-200 '/>
                     <h1 className='py-3 text-xs text-center sm:text-lg'>Computer Science Club </h1>
                     <div className='flex items-center justify-center '>
                       <button className=' m-4 text-4xl duration-200 hover:text-orange-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://csmcomputerscienclub.com" target="_blank" rel="noreferrer"><AiOutlineLaptop /></a></button>
                       <button className=' m-4 text-4xl duration-200 hover:text-green-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://github.com/Greenoni119/cs-club-website" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
                     </div>
                   </div>
                  
                    <div className='shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-cyan-500'>
                     <Image src={foody} alt="image of foody homepage" className='rounded-md duration-200 '/>
                     <h1 className='py-3 text-xs text-center sm:text-lg'>Foody</h1>
                     <div className='flex items-center justify-center '>
                  
                       <button className='  m-4 text-4xl duration-200 hover:text-orange-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://foody-teal.vercel.app/" target="_blank" rel="noreferrer"><AiOutlineLaptop /></a></button>
                       <button className='   m-4 text-4xl duration-200 hover:text-green-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://github.com/Greenoni119/Foody" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
                     </div>
                   </div>

                      
  
                      <div className=' shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-cyan-500'>
                     <Image src={ogps} alt="image of OGPS homepage" className='rounded-md duration-200 '/>
                     <h1 className='py-3 text-xs text-center sm:text-lg'>Old Guys Pool Service</h1>
                     <div className='flex items-center justify-center '>
                  
                       <button className='  m-4 text-4xl duration-200 hover:text-orange-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://old-guys-pool-service.vercel.app" target="_blank" rel="noreferrer"><AiOutlineLaptop /></a></button>
                       <button className='   m-4 text-4xl duration-200 hover:text-green-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://github.com/Greenoni119/--Old-Guys-Pool-Service" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
                     </div> 
                  </div>
  
                <div className=' shadow-md shadow-orange-500 rounded-xl hover:scale-105 duration-200 dark:shadow-cyan-500'>
                     <Image src={bnm} alt="image of boards n more homepage" className='rounded-md duration-200 '/>
                     <h1 className='py-3 text-xs text-center sm:text-lg'>COMING SOON</h1>
                     
                     <div className='flex items-center justify-center '>
                  
                       
                       <button className='   m-4 text-4xl duration-200 hover:text-green-400 hover:scale-105 md:text-4xl dark:text-white dark:hover:text-rose-800'><a href="https://github.com/Greenoni119/skateshop" target="_blank" rel="noreferrer"><AiFillGithub /></a></button>
                     </div>
                   </div>
                   
                   
              </div>
                
            </div>

          </div>

    </div>
  )
}

export default Portfolio