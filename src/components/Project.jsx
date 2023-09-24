import React from 'react'
import "./Project.css"
import Link from 'antd/es/typography/Link'
function Project() {
  return (
    <div className='project'>

        {/* Project */}
    <div className='mt-28'><h1 className="text-3xl text-center font-bold mt-20">Project</h1></div>
         <div className="grid justify-center gap-10 md:flex mt-20">
          <a href='#'>
          <div  className="bg-black w-64 h-56  md:h-60 md:w-80  cursor-pointer " id='box1'>
            <div className="grid justify-center">
            <img className="mt-5" style={{width:"70px",height:"70px"}} src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.15752-9/379641230_955845962174562_978693838700713907_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEYm0XVLR26R5Ed2jheQSjTwIfPbZfh_xTAh89tl-H_FOIN44iXHRjecYfK1H_K97VlRdYfxKhVnTZo0km3dDmC&_nc_ohc=EWCu1nCeOUIAX9zCeOK&_nc_ht=scontent.fbkk5-7.fna&oh=03_AdQtI46cKqKuWxbrwL3mbFhHQAMAi8gU0RQWbrtM3apsbA&oe=65379BA4" alt="" />
            </div>
            <p className="font-semibold text-1xl md:text-2xl text-center text-white mt-8">Website-Design And</p>
            <p className="font-semibold text-1xl md:text-2xl text-center text-white "> Responsive</p>
          </div>
          </a>
          
          <a href='https://www.figma.com/file/I0gDHvQaxnQ2VrmT4OOhWT/Web-Profile?type=design&node-id=36%3A2&mode=design&t=1Xiipn6b1SLSYTSJ-1'>
          <div className="bg-black w-64 h-56 md:h-60 md:w-80  cursor-pointer" id='box2'>
            <div className="grid justify-center">
            <img className="mt-5 h-auto " style={{width:"70px",height:"70px"}} src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.15752-9/379638791_712652724013754_7461789545289400878_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHtrnqS59oxYQwtpu5MVLw45CDKwWHt5mjkIMrBYe3maJsWQd7jYkYX3GTgdtD6OWS9tgkA85BAKb6SuBqwSmN2&_nc_ohc=bburf7wgxWkAX-yXzGk&_nc_ht=scontent.fbkk5-3.fna&oh=03_AdSioTOhV7dkbsLXHuVHpk_Eo9_siPFYgDPSgJO-rBEsvg&oe=65378A09" alt="" />
            </div>
            <p className="font-semibold text-1xl md:text-2xl text-center  text-white mt-8">Website-Design And </p>
            <p className="font-semibold text-1xl md:text-2xl text-center  text-white ">  Responsive</p>
          </div>
          </a>
         </div>
        
      
    </div>
  )
}

export default Project
