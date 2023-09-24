
import { Link } from "react-scroll";
import "./Home.css"

function Home() {
  return (
    <div className="home">
      
      <div className="grid justify-center  ">
        <div className="grid grid-cols-1 xl:gap-20 lg:gap-10 items-center  lg:grid-cols-2">
          <div className="grid justify-center md:order-first  xl:order-last lg:order-last">
            <img
              className="xl:h-auto lg:h-auto  sm:h-96 h-72  rounded-full grid  items-center max-h-screen overflow-hidden  max-items-center mt-10"
              src="https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/379639631_239275205780617_591496828275255679_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGMVf0nZp8QU5YDAf_Y3CdVw9pca43Al9TD2lxrjcCX1IA8hqHkXQrCiK2a-ESwyZ8v-cYMJ59nbbB4vGTRcW5D&_nc_ohc=zu60lJxCFqkAX_7K0n-&_nc_ht=scontent.fbkk5-4.fna&oh=03_AdR4PXr65w9yjHSPDmHQ5G1eGHiOQE6l11CwgfPnS3ODig&oe=6537A26C"
              alt=""
            />
          </div>
          <div className=" grid lg:ml-auto ">
            <div className="text-3xl xl:text-5xl md:text-5xl sm:text-4xl font-bold text-white mt-5 xl:text-start lg:text-start text-center">
              <p>HELLO WORLD</p>
            </div>
            <div className="text-2xl sm:text-2xl md:text-3xl  text-center font-bold ">
            <div className=" xl:text-start  lg:text-start  mt-5" id="textneno">
              <h1>MR Sorayut Soonseang</h1>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white  mt-6  xl:text-start lg:text-start ">
              <p>Welcome to the profile website.</p>
            </div>
            </div>
            <div className="xl:justify-start lg:justify-start xl:mt-10 mt-10 grid justify-center">
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} >
                <button id="button" className="w-60  sm:w-72 rounded-2xl  px-5 py-2.5 text-center mr-2 mb-2">
                  <p className="font-bold text-white">About</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
      {/* <Outlet /> */}
      
{/* icon */}
      {/* <i className="fa-brands fa-facebook" style={{color:" #0a19f0"}}></i> */}
    </div>
  );
}

export default Home;
