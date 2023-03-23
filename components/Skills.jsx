import React from 'react'
import {SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiGit,
  SiMongodb,
  SiRedux,
  SiFigma, } from 'react-icons/si';
  import {FaNodeJs} from 'react-icons/fa';

const Skills = () => {
  return (
   <div>

              <div name='Skills' className=' pt-5 items-center w-full lg:h-screen bg-stone-700 dark:bg-violet-900'>
                      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-neutral-400'>

                          <div>
                          
                              <div>
                              <p className='text-4xl text-neutral-500 font-bold border-b-4 border-orange-500 p-2 inline sm:text-5xl dark:text-rose-800 dark:border-cyan-500'> Skills </p>
                              </div>
                              
                             <div><p className='py-6 text-neutral-500 text-sm sm:text-xl dark:text-white'> These are the technologies i use </p></div>
                              
                              
                          </div>
                          
                          <div className='w-full grid grid-cols-3 sm:grid-cols-3 gap-5 text-center py-2 sm:px-0'>
              
              <div className={'shadow-md hover:scale-105 duration-500 shadow-orange-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiHtml5 className='text-2xl mx-auto mt-8 lg:text-5xl dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl dark:text-whte'>HTML</p>
              </div>
                    
              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-blue-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiCss3 className='text-2xl mx-auto mt-8 lg:text-5xl dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>CSS</p>
              </div> 
            
              

              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-yellow-400 rounded-2xl dark:shadow-cyan-500'}>
              <SiJavascript className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>JAVASCRIPT</p>
              </div>
            
              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-blue-300 rounded-2xl dark:shadow-cyan-500'}>
              <SiReact className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>REACT.js</p>
              </div>
            
              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-teal-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiTailwindcss className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>TAILWIND</p>
              </div>
            
              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-purple-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiBootstrap className='text-2xl mx-auto mt-8 lg:text-5xl   dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>BOOTSTRAP</p>
              </div>

              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-gray-300 rounded-2xl dark:shadow-cyan-500'}>
              <SiNextdotjs className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>NEXT.js</p>
              </div>

              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-pink-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiAdobexd className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>ADOBE XD</p>
              </div>

              

              <div className={'shadow-md hover:scale-105 duration-500 shadow-blue-600 rounded-2xl dark:shadow-cyan-500'}>
              <SiAdobephotoshop className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>PHOTOSHOP</p>
              </div>
              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-orange-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiAdobeillustrator className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>ILLISTRATOR</p>
              </div>

              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-green-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiFigma className='text-2xl mx-auto mt-8 lg:text-5xl dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>FIGMA</p>
              </div>

              

              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-red-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiGit className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-white'>GIT</p>
              </div>


               
                <div className={'shadow-md hover:scale-105 duration-500 shadow-purple-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiRedux className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>Redux</p>
              </div>

              
              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-green-500 rounded-2xl dark:shadow-cyan-500'}>
              <FaNodeJs className='text-2xl mx-auto mt-8 lg:text-5xl dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-whte'>Node.js</p>
              </div>

              

              
                <div className={'shadow-md hover:scale-105 duration-500 shadow-green-500 rounded-2xl dark:shadow-cyan-500'}>
              <SiMongodb className='text-2xl mx-auto mt-8 lg:text-5xl  dark:text-rose-800'/>
              <p className='text-sm mt-4 lg:text-xl mb-4 dark:text-white'>Mongo DB</p>
              </div>

              
              </div>
              
              </div>
              </div>

    </div>
  )
}

export default Skills