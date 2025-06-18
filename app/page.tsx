'use client';
import React, { useState } from 'react';

function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  return (
    <header className="bg-white w-full z-50 shadow sticky top-0">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-52 py-4">
        <a href="#"><img className="h-14 w-auto" src="./image4.webp" alt="company logo" /></a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
          aria-label="Open main menu"
          aria-expanded={open}
        >
          <svg className="w-8 h-8 text-blue-950" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <nav className="hidden lg:flex items-center space-x-8 text-gray-700 relative font-bold">
          <a href="#" className="text-blue-950 relative transition-colors duration-200 hover:text-red-600 group px-4 py-2 font-bold">Home</a>
          <div className="relative group">
            <button className="text-blue-950 cursor-pointer flex items-center px-4 py-2 group-hover:text-red-600 transition font-bold">About Us
              <svg className="ml-2 w-6 h-6 text-gray-500 group-hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-3 min-w-[20rem] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50 py-5 px-6 flex flex-col space-y-2 font-bold">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Who we are</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">What we do</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Why Speedlink</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Meet our Team</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Our Partners & Clients</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-blue-950 cursor-pointer flex items-center px-4 py-2 group-hover:text-red-600 transition font-bold">Services
              <svg className="ml-1 w-4 h-4 text-gray-500 group-hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-3 min-w-[16rem] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50 py-5 px-6 flex flex-col space-y-2 font-bold">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">IT Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Networking Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Technical Security</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Cloud Services</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Digital Marketing</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Certified Training</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-blue-950 cursor-pointer flex items-center px-4 py-2 group-hover:text-red-600 transition font-bold">Case Study
              <svg className="ml-1 w-4 h-4 text-gray-500 group-hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-3 min-w-[16rem] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50 py-5 px-6 flex flex-col space-y-2 font-bold">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Integration Of Secured And Reliable Examination Platform</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Hybrid Learning Environment</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-blue-950 cursor-pointer flex items-center px-4 py-2 group-hover:text-red-600 transition font-bold">Product
              <svg className="ml-1 w-4 h-4 text-gray-500 group-hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-3 min-w-[16rem] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50 py-5 px-6 flex flex-col space-y-2 font-bold">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Digi School</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Speeducation</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">SpeedERP</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">SpeedAdmit</a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-blue-950 cursor-pointer flex items-center px-4 py-2 group-hover:text-red-600 transition font-bold">Resources
              <svg className="ml-1 w-4 h-4 text-gray-500 group-hover:text-red-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-3 min-w-[16rem] bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-auto transition-opacity z-50 py-5 px-6 flex flex-col space-y-2 font-bold">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Blog</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Tech News</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Gallery</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded">Download Bronchure</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-8">
            <button className="p-2 rounded-full hover:bg-gray-100 transition" aria-label="Search">
              <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold transition">
              Get in touch
            </a>
          </div>
        </nav>
      </div>
      <nav className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-[999] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between px-4 py-4 shadow-md bg-white">
          <a href="#"><img className="h-12" src="./image4.webp" alt="logo" /></a>
          <button onClick={() => setOpen(false)} className="p-2 rounded-md" aria-label="Close menu">
            <svg className="w-8 h-8 text-blue-950" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-2 px-6 pt-6 text-blue-950 text-lg font-bold">
          <a href="#" className="py-2 border-b border-gray-100" onClick={() => setOpen(false)}>Home</a>
          <button className="flex justify-between items-center w-full py-2 border-b border-gray-100" onClick={() => setDropdown(dropdown === "about" ? null : "about")}>
            <span>About Us</span>
            <svg className={`w-4 h-4 ml-2 ${dropdown === "about" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${dropdown === "about" ? "block" : "hidden"} pl-4`}>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Who we are</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>What we do</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Why Speedlink</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Meet our Team</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Our Partners & Clients</a>
          </div>
          <button className="flex justify-between items-center w-full py-2 border-b border-gray-100" onClick={() => setDropdown(dropdown === "services" ? null : "services")}>
            <span>Services</span>
            <svg className={`w-4 h-4 ml-2 ${dropdown === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${dropdown === "services" ? "block" : "hidden"} pl-4`}>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>IT Services</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Networking Services</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Technical Security</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Cloud Services</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Digital Marketing</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Certified Training</a>
          </div>
          <button className="flex justify-between items-center w-full py-2 border-b border-gray-100" onClick={() => setDropdown(dropdown === "case" ? null : "case")}>
            <span>Case Study</span>
            <svg className={`w-4 h-4 ml-2 ${dropdown === "case" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${dropdown === "case" ? "block" : "hidden"} pl-4`}>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Integration Of Secured And Reliable Examination Platform</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Hybrid Learning Environment</a>
          </div>
          <button className="flex justify-between items-center w-full py-2 border-b border-gray-100" onClick={() => setDropdown(dropdown === "product" ? null : "product")}>
            <span>Product</span>
            <svg className={`w-4 h-4 ml-2 ${dropdown === "product" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${dropdown === "product" ? "block" : "hidden"} pl-4`}>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Digi School</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Speeducation</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>SpeedERP</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>SpeedAdmit</a>
          </div>
          <button className="flex justify-between items-center w-full py-2 border-b border-gray-100" onClick={() => setDropdown(dropdown === "resources" ? null : "resources")}>
            <span>Resources</span>
            <svg className={`w-4 h-4 ml-2 ${dropdown === "resources" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`${dropdown === "resources" ? "block" : "hidden"} pl-4`}>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Blog</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Tech News</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#" className="block py-1" onClick={() => setOpen(false)}>Download Bronchure</a>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <button className="p-2 rounded-full hover:bg-gray-100 transition" aria-label="Search">
              <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <a href="#" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold transition">
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

const Page = () => (
  <>
    <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 sm:px-6 md:px-10 lg:px-20 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
      <div className="flex justify-center sm:justify-start items-center space-x-3">
        <a href="#" className="bg-white/10 hover:bg-white/20 rounded-md p-2 transition">
          <img src="./facebook.png" alt="Facebook logo" className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <a href="#" className="bg-white/10 hover:bg-white/20 rounded-md p-2 transition">
          <img src="./twitter icon.svg" alt="Twitter logo" className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <a href="#" className="bg-white/10 hover:bg-white/20 rounded-md p-2 transition">
          <img src="./linkedin.svg" alt="LinkedIn logo" className="h-5 w-5 md:h-6 md:w-6" />
        </a>
        <a href="#" className="bg-white/10 hover:bg-white/20 rounded-md p-2 transition">
          <img src="./instagram.svg" alt="Instagram logo" className="h-5 w-5 md:h-6 md:w-6" />
        </a>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3">
        <a href="tel:+2349167716220" className="flex items-center bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 space-x-2 transition">
          <img src="./phone.svg" alt="Phone icon" className="h-4 w-4 md:h-5 md:w-5" />
          <span className="text-sm md:text-base">+2349167716220</span>
        </a>
        <a href="mailto:info@speedlinkng.com" className="flex items-center bg-white/10 hover:bg-white/20 rounded-md px-3 py-1.5 space-x-2 transition">
          <img src="./message.svg" alt="Message icon" className="h-4 w-4 md:h-5 md:w-5" />
          <span className="text-sm md:text-base">info@speedlinkng.com</span>
        </a>
      </div>
    </div>
    <ResponsiveNavbar />
  
      <div className="relative w-screen h-[800px] flex items-center justify-center overflow-hidden">
        <video
          src="./backgroundv.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, filter: 'none' }}
        />
        {/* Light blue overlay */}
        <div
          className="absolute inset-0 "
          style={{
            background: 'rgba(37, 99, 235, 0.25)', // Tailwind blue-600 at 25% opacity
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 2 }}>
          <div className="flex flex-col items-center justify-center text-center">
        <span className="text-white text-5xl md:text-7xl font-bold text-center drop-shadow-lg max-w-[80%] leading-tight z-10 mb-40">
          <b>
        We provide comprehensive IT<br />
        solutions that makes businesses standout
          </b>
        </span>
        <button
          className="mt-12 px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold rounded-xl flex items-center gap-4 shadow-lg pointer-events-auto transition-all duration-200 relative z-30 hover:scale-95"
        >
          IT Solutions and Services
          <svg
            className="w-8 h-8 ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
          </div>
          <span className="text-white text-lg md:text-2xl font-medium mt-4 opacity-90 absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        We’re a team of IT experts who help you transform and scale your organization
          </span>
        </div>
      </div>



      <div className='w-screen h-[80vh] relative ' >
        <img src="./image12.jpg" alt="white background" className='w-full h-full object-cover absolute top left-0 z-0' />

        <div className="relative z-15 flex justify-between items-start h-full px-80 pt-12 text-red-700">
          {/*left hand side  */}
          <div className=" pr-49 text-left">
          <h1 className="text-sm  font-bold mb-8 whitespace-nowrap">
            SPEEDLINK HI-TECH SOLUTIONS LIMITED
          </h1>
          <p className="text-blue-950 text-5xl font-bold whitespace-nowrap">
           A complete Solution <br/> IT provider
          </p>
          <p className='pt-3 text-gray-600'>Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems provider,<br />
             known for providing clients with Enterprise world-class solutions addressing their local business needs. 
             We deliver positive, rapid and the best return on investment “ROI” solutions for our customers.</p>
          <p>
            



          </p>
          <button className="mt-6 flex items-center space-x-2 px-4 py-2 bg-[#ffe5b4] hover:bg-yellow-400 text-black rounded transition duration-300">
          
          <span>Join on Telegram</span>
          <img src="./telegram.png" alt="Telegram" className="w-5 h-5" />
          

         
          </button>
          </div>

          {/* right hand side */}

          <div className="pr-79 text-right">
          <img 
          src="image1.jpg" 
          alt="colleagues" 
          className="w-[500px] max-w-screen-2xl h-[400px] object-cover rounded-tl-[60px] rounded-tr-lg rounded-br-[60px]" 
          />

        </div>
        

        </div>
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-[1000px] h-[180px] bg-blue-800 z-0 flex items-center justify-between px-12">


        {/* Left: Image Box */}
        <div className="w-[160px] h-[140px] bg-white rounded-2xl shadow-lg flex items-center justify-center">
        <img src="./image2.jpg" alt="Pearson logo" />
        </div>

        {/* Center: Text */}
        <div className="text-center text-white -mt-4">
        <h2 className="text-xl font-semibold">Pursue Your Certification Dreams with Speedlink!</h2>
        <p className="text-xl mt-1">We're now an official Pearson VUE testing center!</p>
        </div>


        {/* Right: Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md transition">
        Get Certified
        </button>
        </div>
      </div>


      {/*third part */}
  <div className="relative w-screen h-200 overflow-hidden">
  {/* Background Image */}
  <img
    src="./new.png"
    alt="background"
    className="absolute top-0 left-0 w-full h-full object-fill z-0 "
  />

  {/* Optional dark overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0"></div>

  {/* Content */}
 <div className="relative w-screen h-screen overflow-hidden">
  {/* Background Image */}
  <img
    src="./new.png"
    alt="background"
    className="absolute top-0 left-0 w-full h-full object-fill z-0 "
  />

  {/* Optional overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5 z-0"></div>

  {/* Main flex container */}
  <div className="relative z-10 flex h-full w-full px-10 pt-25 items-start justify-center gap-20">
    
    {/* Left Side */}
   <div className="flex-1 text-white max-w-sm">
  <h1 className="text-3xl font-bold text-red-600 mb-2">Services We Offer</h1>
  <p className="text-lg text-black mb-2">We offer a wide range of services designed to meet your goals.</p>
  <ul className="pl-5 py-4 space-y-4 text-black font-bold">
  <li className="group relative cursor-pointer">
    <a href="#" className="hover:text-blue-600 transition duration-200">IT Services</a>
    
    
  </li>

  <li><a href="#" className="hover:text-blue-600 transition duration-200">Network Services</a></li>
  <li><a href="#" className="hover:text-blue-600 transition duration-200">Technical Security</a></li>
  <li><a href="#" className="hover:text-blue-600 transition duration-200">Digital Marketing</a></li>
  <li><a href="#" className="hover:text-blue-600 transition duration-200">Cloud Services</a></li>
  <li><a href="#" className="hover:text-blue-600 transition duration-200">Collaboration System</a></li>
</ul>

</div>


    {/* Right Side */}
  
  <div className="flex group">
  {/* Left side goes here (with IT Services link) */}
  
  {/* Right Side */}
  <div className="flex-1 text-white max-w-sm relative ">
    <button className="mt-6 flex items-center space-x-2 px-7 py-4 bg-[#ffe5b4] hover:bg-yellow-400 text-black rounded transition duration-300">
      <span>Join on Telegram</span>
      <img src="./telegram.png" alt="Telegram" className="w-4 h-4" />
    </button>

    <div className="relative w-[500px] h-[400px] mt-10 rounded-3xl overflow-hidden">
      <img 
        src="./image29.jpg" 
        alt="colleagues" 
        className="w-full h-full object-cover rounded-3xl "
      />
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/40 to-blue-600/40 z-10"></div>

      <button className="absolute bottom-4 left-8 z-20 flex items-center space-x-2 px-9 py-4 text-black rounded shadow-md bg-blue-500 transform hover:scale-95 transition duration-300 ease-in-out">
        <span>Explore More</span>
        <span className="text-lg">→</span>
      </button>
    </div>
  </div>
</div>
  </div>
</div>
</div>



{/* Fourth section */}
  <div className="w-full bg-white py-16  px-6 text-center">
  <h2 className="-ml-200 text-4xl font-bold text-blue-950 mb-2">Industries We Serve</h2>
  <p className="-ml-161 text-gray-500 mb-10">
    Perfect Blend of Innovation & Ideation Of Solutions For Every Industry.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
    
    {/* Box 1 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image3.png" alt="Retail" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Retail, Ecommerce</p>
    </div>

    {/* Box 2 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image14.png" alt="Education" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Education & e-learning</p>
    </div>

    {/* Box 3 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image15.png" alt="Healthcare" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Healthcare & Fitness</p>
    </div>

    {/* Box 4 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image16.png" alt="Social Networking" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Social Networking</p>
    </div>

    {/* Box 5 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image22.png" alt="Logistics" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Logistics & Distribution</p>
    </div>

    {/* Box 6 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image17.png" alt="Government" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Government Institutions</p>
    </div>

    {/* Box 7 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image18.png" alt="Real Estate" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Real Estate</p>
    </div>

    {/* Box 8 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image19.png" alt="Travel" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Travel & Hospitality</p>
    </div>

    {/* Box 9 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image20.png" alt="Food" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">Food & Restaurant</p>
    </div>

    {/* Box 10 */}
    <div className="bg-white shadow-md hover:shadow-lg transition rounded-xl p-6 flex flex-col items-center space-y-3">
      <img src="./image21.png" alt="On-Demand" className="w-10 h-10" />
      <p className="text-gray-800 font-semibold text-sm text-center">On-Demand Solutions</p>
    </div>
  </div>
</div>

{/*Fourth Part */}
<div className="bg-gradient-to-b from-blue-800 to-red-600 w-full min-h-[900px] px-6 py-10">
  {/* Text Section */}
  <div className="flex justify-center mb-10">
    <div className="text-center space-y-4 max-w-3xl">
      <h1 className="text-lg font-semibold text-white">Our Products</h1>
      <h1 className="text-4xl font-bold text-white break-words">
        Comprehensive IT SOLUTIONS that sets your business apart
      </h1>
      <h1 className="text-lg font-medium text-white">Bringing Speed to your business</h1>
    </div>
  </div>

  {/* Cards Grid */}
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center group relative">
  {/* Card Container */}
  {/*card one*/}

    <div className="bg-gray-100 rounded-xl shadow-md overflow-visible w-[300px] relative z-10">
      <img src="./image23.jpg" alt="Card 1" className="w-full h-78 object-cover rounded-t-xl" />
      <div className="p-4 cursor-pointer">
        <h1 className="text-lg font-semibold text-black flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-blue-600">
          <img src="./gcap.png" alt="Cap" className="w-6 h-6 transition duration-300" />
          DIGISCHOOL
        </h1>
      </div>
      <div className="absolute top-full left-0 w-full  bg-white p-4 rounded-b-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg text-gray-600 text-center">
          Comprehensive solution for administration, documentation, tracking, reporting, and automation for primary and secondary schools.
        </p>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-44">
      View All Products
    </button>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center group relative">
    <div className="bg-gray-100 rounded-xl shadow-md overflow-visible w-[300px] relative z-10">
      <img src="./image24.jpg" alt="Card 2" className="w-full h-78 object-cover rounded-t-xl" />
      <div className="p-4 cursor-pointer">
        <h1 className="text-lg font-semibold text-black flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-blue-600">
          <img src="./institution.png" alt="Icon 2" className="w-6 h-6 transition duration-300" />
          SPEEDUCATION
        </h1>
      </div>
      <div className="absolute top-full left-0 w-full  bg-white p-4 rounded-b-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg text-gray-600 text-center">
         All in one learning management system for colleges and higher institutions
        

        </p>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-34">
      View All Products
    </button>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center group relative">
    <div className="bg-gray-100 rounded-xl shadow-md overflow-visible w-[300px] relative z-10">
      <img src="./image25.jpg" alt="Card 3" className="w-full h-78 object-cover rounded-t-xl" />
      <div className="p-4 cursor-pointer">
        <h1 className="text-lg font-semibold text-black flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-blue-600">
          <img src="./speed.png" alt="Icon 3" className="w-6 h-6 transition duration-300" />
          SPEED ERP SOLUTION
        </h1>
      </div>
      <div className="absolute top-full left-0 w-full bg-white p-4 rounded-b-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-lg text-gray-600 text-center">
         Managing routine business operations like accounting, purchasing, project management, risk management, and compliance

        </p>
      </div>
    </div>
    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-44">
      View All Products
    </button>
  </div>
  </div>
</div>
<div className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto space-y-16">

    {/* Header and Button */}
   <div className="flex flex-col md:flex-row mt-20 justify-between items-start md:items-center">
  <div className="mb-4 md:mb-0">
    <h2 className="text-4xl font-bold text-gray-900">Case Studies</h2>
    <p className="text-gray-600 mt-2 max-w-xl">
      We’re proud to have helped build innovative solutions solving complex problems across varying industries. Check out what we’ve been up to.
    </p>
  </div>

  <button className="bg-[#f5f0e4] text-gray-800 px-9 py-4 rounded-md shadow text-sm transition ml-auto mr-auto md:ml-0 hover:bg-yellow-400 duration-300 hover:text-white">
  See more of our work <span className="ml-1">🚀</span>
</button>
 
</div>



    {/* Case Study 1 */}
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-pink-100 via-pink-50 to-white rounded-xl overflow-hidden shadow-md">
      <div className="p-8 md:w-1/2">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Integration of a secured and reliable examination platform</h3>
        <p className="text-gray-700 text-lg mb-6">
          We built a hitch-free proctoring software for the School of Public Health, University of Port Harcourt that offers students and test takers the freedom to take a proctored exam at any time in any given location...
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          View Case Study &rsaquo;
        </button>
      </div>
      <img src="./image26.jpg" alt="Case Study 1" className="md:w-1/2 object-cover h-full" />
    </div>

    {/* Case Study 2 */}
    <div className="flex flex-col md:flex-row-reverse bg-gradient-to-b from-cyan-100 to-cyan-200 rounded-xl overflow-hidden shadow-md">

      <div className="p-8 md:w-1/2">
        <h3 className="text-4xl font-bold text-gray-900 mb-4">Hybrid Learning Facility</h3>
        <p className="text-gray-700 text-lg mb-6">
          We developed a platform that can accommodate students remotely while maintaining in-person participation, helping schools adapt to hybrid models.
        </p>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          View Case Study &rsaquo;
        </button>
      </div>
      <img src="./image27.jpg" alt="Case Study 2" className="md:w-1/2 object-cover h-full" />
    </div>

  </div>
  <div className="mt-24 px-4 md:px-16">
  {/* Header */}
  <div className="text-center mb-12">
    <p className="text-red-600 font-semibold">Our Blog</p>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Insights & Expertise</h2>
    <p className="text-gray-600 mt-3">Explore Our Blog for Expert Insights and Industry Trends</p>
  </div>

  {/* Blog List */}
  <div className="space-y-10 ">
  {/* Blog Item 1 */}
  <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden max-w-3xl mx-auto">
  <div className="overflow-hidden group">
    <img
      src="./image28.jpg"
      alt="Blog Cover"
      className="w-full md:w-[280px] h-[400px] object-contain transition-transform duration-500 group-hover:scale-120"
    />
  </div>
  
  <div className="p-4 flex flex-col justify-center -mt-70 flex-1">
    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-full mb-1">
      <span className='text-gray-400'>Uncategorized</span>
    </span>
    <h3 className="text-base font-semibold text-gray-700">Empowering the Next Generation of Women in Tech</h3>
    <p className="text-xs text-gray-500 mt-1">🖊 Admin Speedlink • 📅 April 21, 2025 • 💬 No Comments</p>
    <p className="text-gray-500 mt-2 text-sm line-clamp-2">
      In a world increasingly driven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...
    </p>
  </div>
</div>

</div>

    {/* Blog Item 2 */}
    <div className="flex flex-col md:flex-row bg-white rounded-md py-3.5 shadow-md overflow-hidden max-w-3xl mx-auto">
  <div className="overflow-hidden group ">
    <img
      src="./stem.jpg"
      alt="Blog Cover"
      className="w-full md:w-[280px] h-[400px] object-contain transition-transform duration-500 group-hover:scale-120"
    />
  </div>
  
  <div className="p-4 flex flex-col justify-center -mt-70 flex-1">
    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-full mb-1">
      <span className='text-gray-400'>Uncategorized</span>
    </span>
    <h3 className="text-base font-semibold text-gray-700">Why We need more women in STEM now</h3>
    <p className="text-xs text-gray-500 mt-1">🖊 Admin Speedlink • 📅 April 21, 2025 • 💬 No Comments</p>
    <p className="text-gray-500 mt-2 text-sm line-clamp-2">
      STEM: Science, technology, engineering, and mathematics shapes how we live, work, and solve problems every day. Yet, despite the growing demand for …
    </p>
  </div>
</div>

{/* Blog Item 3 */}
  <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden max-w-3xl mx-auto">
  <div className="overflow-hidden group">
    <img
      src="./soft skills.jpg"
      alt="Blog Cover"
      className="w-full md:w-[280px] h-[400px] object-cover transition-transform duration-500 group-hover:scale-120"
    />
  </div>
  
  <div className="p-4 flex flex-col justify-center -mt-70 flex-1">
    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-full mb-1">
      <span className='text-gray-400'>Uncategorized</span>
    </span>
    <p className="text-xs text-gray-700 mt-1">🖊 Admin Speedlink • 📅 April 21, 2025 • 💬 No Comments</p>
    <p className="text-gray-500 mt-2 text-sm line-clamp-2">
      In a world increasingly driven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...
    </p>
  </div>
</div>

{/*blog Item 4*/}

<div className="flex flex-col md:flex-row bg-white py-3.5 rounded-md shadow-md overflow-hidden max-w-3xl mx-auto">
  <div className="overflow-hidden group">
    <img
      src="./team.jpg"
      alt="Blog Cover"
      className="w-full md:w-[280px] h-[400px] object-cover transition-transform duration-500 group-hover:scale-120"
    />
  </div>
  
  <div className="p-4 flex flex-col justify-center -mt-70 flex-1">
    <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-full mb-1">
      <span className='text-gray-400'>Uncategorized</span>
    </span>
    <h3 className="text-base font-bold text-gray-700">Why Hands-On Learning Is More Effective Than Theory</h3>
    <p className="text-xs text-gray-500 mt-1">🖊 Admin Speedlink • 📅 April 21, 2025 • 💬 No Comments</p>
    <p className="text-gray-500 mt-2 text-sm line-clamp-2">
      In a world increasingly driven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...
    </p>
  </div>
</div>
  </div>

  <div className="w-full">

</div>
{/* Technology Stack Section */}
<div className=' w-full -px-16'>
<section className="h-[380px] bg-[#333333]  py-28 text-center text-white">
    <h2 className="text-gray-600 text-4xl font-semibold mb-4">Technology stack</h2>
    <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-8"></div>

<div className="flex justify-center">
  <div className="relative group w-[700px] overflow-hidden">
    <div className="flex gap-8 w-max transition-transform duration-700 ease-in-out group-hover:translate-x-[-300px]">
      {/* Visible Images (1-10) */}
      <img src="./csharp.png" alt="C#" className="h-12 grayscale invert" />
      <img src="./android.png" alt="Android" className="h-12 grayscale invert" />
      <img src="./postgre.png" alt="PostgreSQL" className="h-12 grayscale invert" />
      <img src="./node.png" alt="Node.js" className="h-12 grayscale invert" />
      <img src="./gulp.png" alt="Gulp" className="h-12 grayscale invert" />
      <img src="./react.png" alt="React" className="h-12 grayscale invert" />
      <img src="./css.png" alt="CSS" className="h-12 grayscale invert" />
      <img src="./python.png" alt="Python" className="h-12 grayscale invert" />
      <img src="./php.png" alt="PHP" className="h-12 grayscale invert" />
      <img src="./csharp.png" alt="C# Again" className="h-12 grayscale invert" />

      {/* Hidden Images (11+) */}
      <img src="./android.png" alt="Hidden Android" className="h-12 grayscale invert" />
      <img src="./postgre.png" alt="Hidden PostgreSQL" className="h-12 grayscale invert" />
      <img src="./node.png" alt="Hidden Node.js" className="h-12 grayscale invert" />
    </div>
  </div>
</div>




  </section>

  {/* Top Clients Section */}
  <section className="bg-white py-12 text-center">
    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Top Clients</h2>
    <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-4"></div>
    <p className="text-lg text-gray-600 mb-8">Meet our happy clients</p>

   <div className="flex justify-center">
  <div className="relative group w-[1000px] overflow-hidden">
    <div className="flex gap-12 w-max transition-transform duration-700 ease-in-out group-hover:-translate-x-[300px]">
      {/* Visible Images */}
      <img src="./image7.png" alt="Client 1" className="h-14 object-contain" />
      <img src="./image8.png" alt="Client 2" className="h-14 object-contain" />
      <img src="./image9.png" alt="Client 3" className="h-14 object-contain" />
      <img src="./image10.png" alt="Client 4"className="h-14 object-contain" />
      <img src="./image5.png" alt="Client 5" className="h-14 object-contain" />
      <img src="./image6.png" alt="Client 6" className="h-14 object-contain" />

      {/* Hidden by default, shown when hovered */}
      <img src="./image7.png" alt="Client 1 clone" className="h-14 object-contain" />
      <img src="./image8.png" alt="Client 2 clone" className="h-14 object-contain" />
    </div>
  </div>
</div>
  </section>
</div>
</div>





          

 <footer className="bg-slate-950 text-white  py-12 px-6 md:px-20 text-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div className="bg-slate-800 rounded-2xl p-6 space-y-6 w-full md:w-78">
        <div>
       <img src="./image4.webp" alt="Speedlink Logo" className="w-44" loading="lazy" />
        </div>
        <p className="text-gray-200 leading-relaxed text-lg">
         Providing ICT solutions that make businesses stand out. We can provide you with the highest levels of technical expertise, strategic thinking, and hands-on skills.
       </p>
      </div>


        {/* Services */}
       <div className='bg-slate-800 rounded-2xl p-6 space-y-6 w-full md:w-78'>
  <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
  <ul className="space-y-4 text-gray-300">

    {["Digital Services", "Cloud Services", "Networking Services", "Certified Training"].map((item, i) => (
      <li key={i}>
        <details className="group transition-all duration-300 overflow-hidden">
          <summary className="flex items-center gap-2 cursor-pointer list-none">
            <span className="text-lg">▸</span> {item}
          </summary>
          <div className="h-4 group-open:h-4 transition-all duration-300"></div> {/* fake dropdown space */}
        </details>
      </li>
    ))}

  </ul>
</div>


        {/* Quick Links */}
        <div className='bg-slate-800   rounded-2xl p-6 space-y-6 w-full md:w-78'>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> Our Products</li>
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> Case Studies</li>
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> Who we are</li>
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> Why choose us</li>
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> What we do</li>
            <li className="flex items-center gap-2"><span className="text-lg">▸</span> Meet our Team</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='bg-slate-800 rounded-2xl p-6 space-y-6 w-full md:w-78'>
          <h3 className="text-lg font-semibold mb-4">Locate us</h3>
          <p className="text-gray-300 mb-4">
            Road 6 Extension, Okey Wali Estate,<br />
            Rumuologu, Port Harcourt, Rivers State
          </p>

          <div className="space-y-3 mb-4">
            <a href="tel:+2349167716220" className="block bg-slate-800 text-gray-300 px-3 py-2 rounded">
              📞 +2349167716220
            </a>

            <a href="mailto:info@speedlinkng.com" className="block bg-slate-800 text-gray-300 px-3 py-2 rounded">
              ✉️ info@speedlinkng.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 text-sm">
            <a href="#" className="bg-slate-800 p-2 rounded text-white"><img src='./facebook.png' alt='facebook logo' /></a>
            <a href="#" className="bg-slate-800 p-2.5 mt-1 rounded text-white"><img src='./twitter icon.svg' alt='twitter logo' /></a>
            <a href="#" className="bg-slate-800 p-2 rounded text-white"><img src='./youtube.png' alt='youtube logo' /></a>
            <a href="#" className="bg-slate-800 p-2 rounded text-white"><img src='./instagram.svg' alt='instagram logo' /></a>
            <a href="#" className="bg-slate-800 p-2.5 rounded text-white"><img src='./linkedin.svg' alt='linkedin logo' /></a>
          </div>
        </div>
      </div>



      {/* Scroll to top button */}
      <div className="fixed bottom-4 right-4">
        <a href="#top" className="bg-slate-800 p-2 rounded shadow-md">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </div>

    </footer>
    {/* Main Footer */}


{/* Final Footer (Separate Background) */}
<div className="border-t bg-[#1e293b] py-4 text-center text-gray-400 text-xs">
  Copyright © 2022 - 2025 Speedlink Hi-TECH Solutions Limited
</div>


  </>
);

export default Page;