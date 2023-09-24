import React from 'react'
import "./Skillbar.css"
function Skillbar() {
  return (
    <div className='skillbar'>
      {/* Skill Bars ในแต่ละ breakpoint  */}
      <div className='mt-40 '>
          <h1 className="text-3xl text-center text-white font-bold">My Skills</h1>
    </div>
    <div className="  py-8 gap-5 grid">
         <div className='skill'>
            {/* Skill Bar 1  */}
            <div className="mb-4 mx-20 sm:mx-40 lg:mx-72">
                <div className="grid grid-cols-2 text-white ">
                    <span className="font-semibold">HTML</span>
                    <p className="grid justify-end">90%</p>
                  </div>
                <div className="bg-gray-200 h-4 rounded-full mt-1">
                    <div className="bg-yellow-500 h-4 rounded-full animate-skill" style={{width:"90%"}}></div>
                </div>
            </div>

            {/* Skill Bar 2  */}
            <div className="mb-4 mx-20 sm:mx-40 lg:mx-72">
                <div className="grid grid-cols-2 text-white ">
                    <span className="font-semibold">CSS</span>
                    <p className="grid justify-end">70%</p>
                  </div>
                <div className="bg-gray-200 h-4 rounded-full mt-1">
                    <div className="bg-sky-600 h-4 rounded-full animate-skill" style={{width:"70%"}}></div>
                </div>
            </div>

            {/* Skill Bar 3  */}
            <div className="mb-4 mx-20 sm:mx-40 lg:mx-72">
                <div className="grid grid-cols-2 text-white ">
                    <span className="font-semibold">JAVASCRIPT</span>
                    <p className="grid justify-end">50%</p>
                  </div>
                <div className="bg-gray-200 h-4 rounded-full mt-1">
                    <div className="bg-yellow-200 h-4 rounded-full animate-skill" style={{width:"50%"}}></div>
                </div>
            </div>

            {/* Skill Bar 4  */}
            <div className="mb-4 mx-20 sm:mx-40 lg:mx-72">
                <div className="grid grid-cols-2 text-white ">
                    <span className="font-semibold">PHP</span>
                    <p className="grid justify-end">5%</p>
                  </div>
                <div className="bg-gray-200 h-4 rounded-full mt-1">
                    <div className="bg-purple-800 h-4 rounded-full animate-skill" style={{width:"5%"}}></div>
                </div>
            </div>

             {/* Skill Bar 5  */}
             <div className="mb-4 mx-20 sm:mx-40 lg:mx-72">
                <div className="grid grid-cols-2 text-white ">
                    <span className="font-semibold">React</span>
                    <p className="grid justify-end">50%</p>
                  </div>
                <div className="bg-gray-200 h-4 rounded-full mt-1">
                    <div className="bg-sky-500 h-4 rounded-full animate-skill" style={{width:"50%"}}></div>
                </div>
            </div>
          </div>  
    </div>
    </div>
  )
}

export default Skillbar
