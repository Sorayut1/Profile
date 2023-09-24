import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="mt-28">
      <div className="grid justify-center ">
        <div className="box">
          <h1 className="text-3xl text-center font-bold mt-5">Contact</h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-10">
            <div className=" flex justify-center gap-5">
              <img src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.15752-9/379652406_2006933469670904_7471539186457569041_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeETv_ml32r2yuo8EAG8bs8fac1BXvSiQKxpzUFe9KJArB1eIZUM1D2MRmVlMzmoiSrlw1Tu3p94Yo337zpWUyjE&_nc_ohc=t-kJyARKwmcAX9P61BE&_nc_ht=scontent.fbkk5-5.fna&oh=03_AdS30-Hcb3QPid8BAY3LiqklhfwRZSchcQT1od1btAnnog&oe=6537A1B2"className="cursor-pointer" id="fackbook" alt="" />
              <p className="text-white mt-2 font-bold ">Facebook</p>
            </div>
            <div className=" flex justify-center gap-5 mt-5 sm:mt-0 mr-10 sm:mr-0 ">
            <img src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/379640000_691775709675487_8356869203782267895_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGMpJEcynAm5Vo5gPkeGO0cOF17C-_KJlU4XXsL78omVUpaoQ3UkHfxKH6z3m8OaP2TwsrFUgMrph89v8BqCRf4&_nc_ohc=CtuRaVn_pyAAX8JbzAd&_nc_ht=scontent.fbkk5-6.fna&oh=03_AdTAdaEKBCDw0Ex_lE2cX0EgYu0m4YdmkPH2beqN0uxbpw&oe=653790CA" className="cursor-pointer"id="line" alt="" />
            <p className="text-white mt-2 font-bold">Line</p>
            </div>
            <div className=" flex justify-center gap-5 mt-5 sm:mt-0 mr-5 sm:mr-0 ">
            <img src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t1.15752-9/379641507_2459899777525099_454691886943532002_n.png?stp=cp0_dst-png&_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGERORSgutZFI1SmEs6mUtYkakgdSsdpOGRqSB1Kx2k4QyeTGYhw3Yo-982HhKcTzOCAIRSvzGb7MIAHcP0c8pi&_nc_ohc=QD85go_IlrgAX_vLUFA&_nc_ht=scontent.fbkk5-1.fna&oh=03_AdSNOPK8Td-YZ61mpDmDqp1qc7EHRtQRmok-id6g-2KWvw&oe=65379055" className="cursor-pointer"id="gmail" alt="" />
            <p className="text-white mt-2 font-bold">Gmail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
