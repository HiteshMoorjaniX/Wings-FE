import {React, useState} from "react";
import { NavLink,useLocation } from "react-router-dom";
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from "react-scroll";
import logo from '../assets/wlogo.svg';
import '../App.css';
import Icon01 from '../assets/icon01.svg';
import Icon03 from '../assets/icon03.svg';
import User from '../assets/username.svg';
import Password from '../assets/password.svg';
import Email from '../assets/email.svg';
import Apple from '../assets/apple.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Google from '../assets/google.svg';
import Envelope from '../assets/envelope.svg';
import Titleshape from '../assets/title2.svg';
import Call from '../assets/call.svg';
import WingsLogo from '../assets/wings-logo.svg';


function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showLoginModal, setLoginModal] = useState(false);
  const [showSignupModal, setSignupModal] = useState(false);
  const [showSignModal, setSignModal] = useState(false);
  const [showPoliciesModal, setPoliciesModal] = useState(false);
  const location = useLocation();
  
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;

  if (window.location.pathname.startsWith('/Admin'))  return null;
  if (window.location.pathname.startsWith('/DropIn'))  return null;
  if (window.location.pathname.startsWith('/CourtRental'))  return null;
  if (window.location.pathname.startsWith('/Profile'))  return null;
  if (window.location.pathname.startsWith('/MembershipPlans'))  return null;
  if (window.location.pathname.startsWith('/MyBookings'))  return null;
  if (window.location.pathname.startsWith('/MySchedules'))  return null;
  return (
    <>
      <section className='bg-sec py-2'>
        <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='md:w-1/2 sm:w-8/12 w-full px-3 mb-3 sm:mb-0 md:block hidden'>
            <div className='flex flex-wrap sm:justify-start justify-center items-center'>
              <img src={Icon01} className='w-auto mr-2' />
              <span className='text-left text-white text-sm'>(+1)778-881-1132</span> 
              <span className='text-white mx-2'>|</span>
              <img src={Icon03} className='w-auto mr-2' />
              <span className='text-left text-white text-sm'>contact@wingsbadmintonclub.ca</span>
            </div>
          </div>
          <div className='md:w-1/2 sm:w-4/12 w-full px-3'>
          <div className="flex sm:justify-end justify-center items-center space-x-6">
              <a href="#" className="text-white hover:text-theme">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 12.157 9.874">
                    <path d="M10.908,5.842c.008.108.008.216.008.324a7.041,7.041,0,0,1-7.089,7.089A7.041,7.041,0,0,1,0,12.136a5.154,5.154,0,0,0,.6.031A4.99,4.99,0,0,0,3.7,11.1a2.5,2.5,0,0,1-2.33-1.728,3.142,3.142,0,0,0,.471.039,2.635,2.635,0,0,0,.656-.085,2.492,2.492,0,0,1-2-2.445V6.852a2.509,2.509,0,0,0,1.126.316A2.5,2.5,0,0,1,.849,3.836,7.082,7.082,0,0,0,5.986,6.443a2.813,2.813,0,0,1-.062-.571,2.494,2.494,0,0,1,4.312-1.7,4.906,4.906,0,0,0,1.581-.6,2.485,2.485,0,0,1-1.1,1.373,5,5,0,0,0,1.435-.386,5.356,5.356,0,0,1-1.25,1.288Z" transform="translate(0 -3.381)"/>
                  </svg>
              </a>
              <a href="#" className="text-white hover:text-theme">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
              </a>
              <a href="#" className="text-white hover:text-theme">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 6.114 11.415">
                <path d="M7.323,6.421,7.64,4.355H5.657V3.015A1.033,1.033,0,0,1,6.822,1.9h.9V.14A10.99,10.99,0,0,0,6.124,0a2.522,2.522,0,0,0-2.7,2.781V4.355H1.609V6.421H3.424v4.994H5.657V6.421Z" transform="translate(-1.609)"/>
              </svg>

              </a>
              <a href="#" className="text-white hover:text-theme">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 12.429 8.739">
                  <path d="M13.219,5.867a1.562,1.562,0,0,0-1.1-1.106A36.907,36.907,0,0,0,7.264,4.5a36.907,36.907,0,0,0-4.856.261,1.562,1.562,0,0,0-1.1,1.106,16.383,16.383,0,0,0-.26,3.011,16.383,16.383,0,0,0,.26,3.011,1.538,1.538,0,0,0,1.1,1.088,36.907,36.907,0,0,0,4.856.261,36.907,36.907,0,0,0,4.856-.261,1.538,1.538,0,0,0,1.1-1.088,16.383,16.383,0,0,0,.26-3.011A16.383,16.383,0,0,0,13.219,5.867ZM5.993,10.726V7.03L9.242,8.878,5.993,10.726Z" transform="translate(-1.05 -4.5)"/>
                </svg>
              </a>
              <NavLink to='/Career' className="text-white rounded-full border border-white px-3 py-1 text-sm">Career</NavLink>
          </div>
          </div>
        </div>
        </div>
      </section>
      <nav className="w-full bg-white shadow sticky -top-1 z-20">
        <div className="container mx-auto">
        <div className="justify-between md:items-center lg:flex">
          <div className="flex items-center justify-between px-3 py-1 md:py-1 lg:block">
            <Link spy to="home" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" >
              <img src={logo} className='h-11'></img>
            </Link>
            <button
              className="text-white bg-theme p-2 rounded-md  block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white"
                    viewBox="0 0 20 20"
                    fill="#fff"
                >
                    <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            )}
            </button>
          </div>
          <div
            className={`px-3 flex-1 justify-self-center lg:py-0 pb-3 pt-5 lg:block ${
              navbarOpen ? "block absolute left-0 bg-white w-full z-10 shadow-lg" : "hidden"
          }`}
            id="example-navbar-danger"
          >
            <ul className="nav-items text-base md:text-sm xl:text-base 2xl:text-lg items-center justify-end space-y-4 lg:flex lg:space-x-3 xl:space-x-6 lg:space-y-0">
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} activeClass="active" smooth={true} spy to="home" className="scroll-smooth text-black hover:text-theme cursor-pointer" offset={-70}>Home</Link>
                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="about" offset={-70}>About Us</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="courtrentals" offset={-70}>Court Rentals</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="dropin" offset={-70}>Drop-In</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="membership" offset={-70}>Membership</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="coaching" offset={-70}>Coaching</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="gallery" offset={-50}>Gallery</Link>                
              </li>
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} className="text-black hover:text-theme scroll-smooth cursor-pointer" activeClass="active" smooth={true} spy to="contactus" offset={-50}>Contact Us</Link>                
              </li>
              {/* <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)} to="/#courtrentals" className="text-black hover:text-theme scroll-smooth" style={isActive("#courtrentals") ? {color: "#ff6a00"} : {}}>Court Rentals</Link>
                <img src={Titleshape} className="invisible md:visible opacity-0 w-8 h-4 absolute" style={isActive("#courtrentals") ? {opacity: "1", width: "100%", height: "1rem", margin: "auto", position: "absolute"} : {}}/>
              </li>              
              <li className="nav-item relative">
                <Link onClick={() => setNavbarOpen(false)}  to="/#contactus" className="text-black hover:text-theme scroll-smooth" style={isActive("#contactus") ? {color: "#ff6a00"} : {}}>ContactUs</Link>
                <img src={Titleshape} className="invisible md:visible opacity-0 w-8 h-4 absolute" style={isActive("#contactus") ? {opacity: "1", width: "100%", height: "1rem", margin: "auto", position: "absolute"} : {}}/>
              </li> */}
              <li className="nav-item">
                <a onClick={() => setNavbarOpen(false)}  href="#" className="xl:min-w-120 md:min-w-88 min-w-auto inline-flex justify-center lg:text-theme lg:hover:bg-theme lg:hover:text-white hover:text-theme lg:border border-0 border-theme rounded-full lg:py-2 py-0 lg:px-5 px-0" onClick={() => setLoginModal(true)}>Login</a>
              </li>
              <li className="nav-item">
                <a onClick={() => setNavbarOpen(false)}  href="#" className="xl:min-w-120 md:min-w-88 min-w-auto inline-flex justify-center lg:border border-theme border-0 lg:bg-theme text-black lg:text-white  hover:bg-white hover:text-theme rounded-full lg:py-2 py-0 lg:px-3 px-0" onClick={() => setSignModal(true)}>Sign Up</a>
              </li>
            </ul>         
          </div>
        </div>
        </div>
      </nav>
      {showSignupModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="modal-bg bg-cover flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    SIGN UP TO WINGS BADMINTON CLUB
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setSignupModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form action="http://localhost:3000/Admin/Dashboard">
                  <div className="grid gap-4 mb-6 grid-cols-1">
                      <div>
                          {/* <label htmlFor="first_name" className="block mb-2 text-base font-semibold text-sec">Full Name</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter your full name" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={User} />
                            </span>
                          </div>
                      </div>
                      <div>
                          {/* <label htmlFor="email" className="block mb-2 text-base font-semibold text-sec">Email Id</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="email" placeholder="Enter your emailid" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={Email} />
                            </span>
                          </div>
                      </div>
                      <div>
                          {/* <label htmlFor="email" className="block mb-2 text-base font-semibold text-sec">Email Id</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="email" placeholder="Enter your phone" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={Call} />
                            </span>
                          </div>
                      </div>
                      <div>
                          {/* <label htmlFor="password" className="block mb-2 text-base font-semibold text-sec">Password</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter password" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={Password} />
                            </span>
                          </div>
                      </div>
                      <div>
                          {/* <label htmlFor="password" className="block mb-2 text-base font-semibold text-sec">Re Enter Password</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Confirm password" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={Password} />
                            </span>
                          </div>
                      </div>
                      {/* <div className="flex justify-between">
                            <div className="form-check">
                              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                              <label className="form-check-label inline-block text-sec text-sm" htmlFor="flexCheckDefault">Remember</label>
                            </div>
                            <div className ="text-theme text-sm">Forgot Password?</div>
                      </div> */}
                      <div>
                        <div className="flex w-full text-xs">
                          By creating an account, you agree to our Terms & Conditions and Privacy Policy
                        </div>
                      </div>
                      <NavLink exact="true" to="" className="login flex items-center justify-center relative h-14 text-lg text-white rounded-lg bg-theme mt-3">CREATE ACCOUNT
                          <svg width="8.227" height="14.388" viewBox="0 0 8.227 14.388" className="absolute right-5">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M16.993,13.388,11.548,7.947a1.024,1.024,0,0,1,0-1.452,1.037,1.037,0,0,1,1.457,0l6.169,6.164a1.026,1.026,0,0,1,.03,1.418l-6.194,6.207a1.028,1.028,0,1,1-1.457-1.452Z" transform="translate(-11.246 -6.196)" fill="#fff"/>
                          </svg>
                      </NavLink>
                    
                      </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex flex-wrap items-center justify-center">
                  <ul className="inline-flex gap-6">
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Google} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Facebook} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Apple} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Twitter} /></li>
                  </ul>
                </div>
                <div className="flex items-center justify-center p-6 ">
                  <button
                    className="text-sec background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setSignupModal(false)}
                  >
                    Already have an account ? Go to <a href="#"className="text-theme" onClick={() => setLoginModal(true)}>Login</a>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showSignModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="modal-bg bg-cover flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    SIGN UP TO WINGS BADMINTON CLUB
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setSignModal(false)} >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form action="http://localhost:3000/Admin/Dashboard">
                  <div className="grid gap-4 grid-cols-1">
                      <div className="leading-snug border-2 border-solid font-normal text-center bg-transparent rounded-lg text-base flex items-center justify-center h-12">
                        <img src={Google} className="mr-2" />Continue With Google  
                      </div>
                      <div className="leading-snug border-2 border-solid font-normal text-center bg-transparent rounded-lg text-base flex items-center justify-center h-12">
                        <img src={Facebook} className="mr-2" />Continue With Facebook  
                      </div>
                      <div className="leading-snug border-2 border-solid font-normal text-center bg-transparent rounded-lg text-base flex items-center justify-center h-12">
                        <img src={Apple} className="mr-2" />Continue With Apple  
                      </div>
                      <a href="#" onClick={() => setSignupModal(true)}><div className="leading-snug border-2 border-solid font-normal text-center bg-transparent rounded-lg text-base flex items-center justify-center h-12">
                        <img src={Envelope} className="mr-2" />Continue With Email  
                      </div></a>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                
                <div className="flex items-center justify-center pb-6 ">
                  <button
                    className="text-sec background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setSignModal(false)}
                  >
                    Already have an account ? Go to <a href="#"className="text-theme" onClick={() => setLoginModal(true)}>Login</a>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
        </>
      ) : null}
      {showPoliciesModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    POLICIES
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setPoliciesModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="overflow-y-scroll h-96">
                    <p className="text-black font-bold">The standard Lorem Ipsum passage, used since the 1500s</p>
                    <p className="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p className="text-black font-bold">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                    <p className="text-black mb-4">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className="text-black font-bold">1914 translation by H. Rackham</p>
                    <p className="text-black mb-4">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                    <p className="text-black font-bold">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                    <p className="text-black mb-4">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                    <p className="text-black font-bold">1914 translation by H. Rackham</p>
                    <p className="text-black mb-4">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are </p>
                    <p className="text-black font-bold">The standard Lorem Ipsum passage, used since the 1500s</p>
                    <p className="text-black mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p className="text-black font-bold">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                    <p className="text-black mb-4">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p className="text-black font-bold">1914 translation by H. Rackham</p>
                    <p className="text-black mb-4">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                    <p className="text-black font-bold">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
                    <p className="text-black mb-4">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                    <p className="text-black font-bold">1914 translation by H. Rackham</p>
                    <p className="text-black mb-4">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are </p>
                    <p className="text-black font-bold">The standard Lorem Ipsum passage, used since the 1500s</p>
                    <p className="text-black mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </div>
                </div>
            
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showLoginModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="modal-bg bg-cover flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    LOG IN TO WINGS BADMINTON CLUB
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setLoginModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form action="">
                  <div className="grid gap-4  grid-cols-1">
                      <div>
                          {/* <label htmlFor="first_name" className="block mb-2 text-base font-semibold text-sec">Username / Email Id</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter your username" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={User} />
                            </span>
                          </div>
                      </div>

                      <div>
                          {/* <label htmlFor="password" className="block mb-2 text-base font-semibold text-sec">Password</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter your password" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              <img src={Password} />
                            </span>
                          </div>
                      </div>
                      <div className="flex justify-between">
                            <div className="form-check">
                              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                              <label className="form-check-label inline-block text-sec text-sm" htmlFor="flexCheckDefault">Remember</label>
                            </div>
                            <div className ="text-theme text-sm">Forgot Password?</div>
                      </div>
                      
                      <NavLink exact="true" to="/CourtRental" className="login flex items-center justify-center relative h-14 text-lg text-white rounded-lg bg-theme mt-3">LOGIN
                          <svg width="8.227" height="14.388" viewBox="0 0 8.227 14.388" className="absolute right-5">
                            <path id="Icon_ionic-ios-arrow-forward" data-name="Icon ionic-ios-arrow-forward" d="M16.993,13.388,11.548,7.947a1.024,1.024,0,0,1,0-1.452,1.037,1.037,0,0,1,1.457,0l6.169,6.164a1.026,1.026,0,0,1,.03,1.418l-6.194,6.207a1.028,1.028,0,1,1-1.457-1.452Z" transform="translate(-11.246 -6.196)" fill="#fff"/>
                          </svg>
                      </NavLink>
                    
                      </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex flex-wrap items-center justify-center pb-4">
                  <ul className="inline-flex gap-6">
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Google} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Facebook} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Apple} /></li>
                    <li className="border-2 border-solid rounded-lg hover:border-theme p-2"><img src={Twitter} /></li>
                  </ul>
                </div>
                {/* <div className="flex items-center justify-center p-6 ">
                  <button
                    className="text-sec background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setLoginModal(false)}
                  >
                    No account ? Go to <a href="#"className="text-theme" onClick={() => setSignupModal(true)}>Sign Up</a>
                  </button>
                  
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}



export default Header;
