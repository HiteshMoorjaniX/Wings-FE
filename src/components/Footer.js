import {React, useState} from "react";
import { NavLink,useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import '../App.css';
import '../input.css';
import Icon01 from '../assets/icon01.svg';
import Icon02 from '../assets/icon02.svg';
import Icon03 from '../assets/icon03.svg';
import wlogo from '../assets/wlogo.svg';
import map from '../assets/map.png';
import Titleshape from '../assets/title.svg';

function Footer() {
    const location = useLocation();
    const [showPoliciesModal, setPoliciesModal] = useState(false);
  if (window.location.pathname.startsWith('/Admin'))  return null;
  if (window.location.pathname.startsWith('/DropIn'))  return null;
  if (window.location.pathname.startsWith('/CourtRental'))  return null;
  if (window.location.pathname.startsWith('/Profile'))  return null;
  if (window.location.pathname.startsWith('/MembershipPlans'))  return null;
  if (window.location.pathname.startsWith('/MyBookings'))  return null;
  if (window.location.pathname.startsWith('/MySchedules'))  return null;
    return (
      <>
      {/* <section className='py-9 bg-sec'>
        <div className='container mx-auto'>
          <div className='sec-title px-3'>
            <h2 className='text-left text-3xl font-bold text-white'>Get In <span className="text-theme">Touch</span></h2>
            <img src={Titleshape} className="mb-4"></img>
          </div>
          <div className='flex flex-wrap'>
            <div className='lg:w-8/12 px-4'>
              <div className='flex flex-wrap justify-between mb-4'>
              <div className="lg:w-4/12 w-full flex items-center mb-5 lg:mb-0">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon01} className="h-5" />   
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">call us</h4>
                      <a href="#" className="text-white hover:text-theme text-md">(416) 800-7448</a>
                  </div>
              </div>
              <div className="lg:w-4/12 w-full flex items-center mb-5 lg:mb-0">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon02} className="h-5" /> 
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">Address</h4>
                      <a href="#" className="text-white text-white hover:text-theme">plot no. 71, near devraya factory, brijesh co-op. society</a>
                  </div>
              </div>
              <div className="lg:w-4/12 w-full flex items-center">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon03} className="h-5" /> 
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">Email ID</h4>
                      <a href="#" className="text-white text-white hover:text-theme">vanessa@wings.com</a>
                  </div>
              </div>
              </div>
              <div className='flex flex-wrap items-center md:mb-0 mb-4'>
                <div className='w-full'>
                  <img src={map} className="w-full" />
                </div>
              </div>
            </div>

            <div className='lg:w-4/12 px-4 w-full'>
            <form>
              <div className="grid gap-6 mb-6 grid-cols-1">
                  <div>
                      <label htmlFor="first_name" className="block mb-2 text-lg text-white">Full Name</label>
                      <input type="text" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your name" />
                  </div>
                  <div>
                      <label htmlFor="phone_no" className="block mb-2 text-lg text-white">Phone No.</label>
                      <input type="text" className="h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your number" />
                  </div> 
                  <div>
                      <label htmlFor="email" className="block mb-2 text-lg text-white">Email ID</label>
                      <input type="email" className="h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700  placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your email" />
                  </div> 
                  <div>
                      <label htmlFor="email" className="block mb-2 text-lg text-white">Message</label>
                      <textarea rows="5" type="email" className="w-full px-3 py-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Write your message" />
                  </div> 
                  <button type="submit" className="h-14 rounded-full text-lg text-white bg-theme hover:bg-sec hover:border-2 border-theme ">Submit</button>
              </div>
          </form>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-white lg:py-4 py-8 border-theme border-t-4">
          <div className="container mx-auto">
              <div className="flex flex-wrap items-center px-3">
                  <div className="lg:w-2/12 w-full mb-4 lg:mb-0 text-center lg:text-left">
                      <a href="#" className="inline-flex">
                          <img src={wlogo} className="h-11" />
                      </a>
                  </div>
                  <div className="lg:w-5/12 w-full mb-4 lg:mb-0">
                      <h5 className="font-medium text-lg text-center">" I love badminton. That's my sport! "</h5>
                  </div>
                  <div className="lg:w-5/12 w-full">
                      <form>
                          <div className="relative text-center">
                              <input type="email" className="h-12 w-full px-4 mb-4 sm:mb-0 outline-0 bg-white text-sec rounded-full border border-solid border-Neutral-400 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your email" />
                              <button type="submit" className="inline-flex items-center justify-center max-w-182 w-full sm:absolute right-0 top-0 h-full py-3 rounded-full text-lg text-white bg-theme hover:bg-sec focus:bg-sec">Subscribe</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
     
     <footer className="bg-sec text-white">
          <div className="container mx-auto">
              <div className="grid grid-cols-1 gap-8 pt-4 lg:pb-4 pb-2 px-3 md:grid-cols-3">
                  <div>
                      <p className="text-justify">Wings Badminton Club is born in 2022, birth given by Thilak Krishnamoorthy who is passionate about sports from school-going age. Our Club is located in Ontario, Mississauga hot city of Canada, Club has an approximate area of 14,000 Square feet with a ceiling height of 25 feet and approved BWF certified Grade:1.  </p>
                      <div className="flex mt-5 space-x-6">
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
                      </div>
                  </div>
                  <div>
                      <ul className="nav-items grid gap-4 grid-cols-2 lg:px-10">
                        <li className="nav-item">
                            {/* <NavLink to="/" className="f-menu text-white hover:text-theme">Home</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="home" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/About" className="f-menu text-white hover:text-theme">About Us</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="about" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>About Us</Link>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/CourtRentals" className="f-menu text-white hover:text-theme">Court Rentals</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="courtrentals" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>Court Rentals</Link>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/DropIn" className="f-menu text-white hover:text-theme">Drop-In</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="dropin" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>Drop-In</Link>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/Membership" className="f-menu text-white hover:text-theme">Membership</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="membership" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>Membership</Link>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/Coaching" className="f-menu text-white hover:text-theme">Coaching</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="coaching" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-70}>Coaching</Link>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="f-menu text-white hover:text-theme" onClick={() => setPoliciesModal(true)}>Policies</a>
                        </li>
                        <li className="nav-item">
                            {/* <NavLink to="/ContactUs" className="f-menu text-white hover:text-theme">ContactUs</NavLink> */}
                            <Link activeClass="active" smooth={true} spy to="contactus" className="scroll-smooth f-menu text-white hover:text-theme cursor-pointer" offset={-50}>Contact Us</Link>
                        </li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li className="flex items-center lg:mb-4 mb-6">
                              <div className="mr-3">
                                  <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                                      <img src={Icon01} className="h-5" />   
                                  </span>
                              </div>
                              <div>
                                  <h4 className="text-sm text-stone-500">Call Us</h4>
                                  <a href="tel:7788811132" className="text-white hover:text-theme text-md">(+1)778-881-1132</a>
                              </div>
                          </li>
                          <li className="flex items-center lg:mb-4 mb-6">
                              <div className="mr-3">
                                  <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                                      <img src={Icon02} className="h-5" /> 
                                  </span>
                              </div>
                              <div>
                                  <h4 className="text-sm text-stone-500">Address</h4>
                                  <a href="#" className="text-white text-white hover:text-theme">105, Letty AveBrampton, ON L6Y 5E1</a>
                              </div>
                          </li>
                          <li className="flex items-center">
                              <div className="mr-3">
                                  <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                                      <img src={Icon03} className="h-5" /> 
                                  </span>
                              </div>
                              <div>
                                  <h4 className="text-sm text-stone-500">Email ID</h4>
                                  <a href="mailto:vanessa@wingsbadmintonclub.ca" className="text-white text-white hover:text-theme">vanessa@wingsbadmintonclub.ca</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-slate-800 via-white to-slate-800"></div>
              <div className="text-sm py-4 text-center text-white">
                  <span>© 2023 <a href="http://wingsbadmintonclub.ca" className="hover:text-theme focus:text-theme" target="blank">Wings Badminton Club</a>. All rights reserved.</span>
              </div>
          </div>
          {showPoliciesModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-full my-6 mx-auto max-w-4xl">
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
                  <div className="overflow-y-scroll md:h-600 h-80">
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
      </footer>
     </>
  );
}

export default Footer;
