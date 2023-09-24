import React from 'react'


function About() {
  return (
    
    <div className='about'>
     {/* About */}
     <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center ml-0 sm:ml-0 lg:ml-20 mt-40 gap-20 lg:gap-40">
        <div className="grid  justify-center ">
          <img
            src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/379639631_239275205780617_591496828275255679_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGMVf0nZp8QU5YDAf_Y3CdVw9pca43Al9TD2lxrjcCX1IA8hqHkXQrCiK2a-ESwyZ8v-cYMJ59nbbB4vGTRcW5D&_nc_ohc=zu60lJxCFqkAX_7K0n-&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdR4PXr65w9yjHSPDmHQ5G1eGHiOQE6l11CwgfPnS3ODig&oe=6537A26C"
            className="h-72 sm:h-96 rounded-full lg:h-auto  "
            alt=""
          />
        </div>
        <div className=" items-center ">
         <div className='text-center lg:text-start mb-0 lg:mb-0'>
              <h1 className="text-3xl sm:text-3xl text-white font-bold ">About Me</h1>
          <div className='text-white text-2xl  mt-5 sm:text-2xl'>
          <p >My Name Is Sorayut Soonseang</p>
          <p >Age : 19</p>
          <p >Gender : Male</p>
          <p >Language : Thai</p>
          <p >Phone : 012-354-1234</p>
          <p >Email: KK@gmail.com</p>
          <p >Country : Thailand</p>
          </div>
         
         </div>
        </div>
        
       
      </div>
     
    </div>
  )
}

export default About
