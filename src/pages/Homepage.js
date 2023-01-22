import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import { useState } from "react";
import logo from '../assets/wlogo.svg';
import '../App.css';
import '../input.css';
import "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
import Sec1Img from '../assets/sec1.png';
import AboutImg from '../assets/image2.jpg';
import RentalImg from '../assets/image3.jpg';
import DropImg from '../assets/image4.png';
import CoaImg from '../assets/image6.png';
import w1 from '../assets/w1.png';
import w2 from '../assets/w2.png';
import w3 from '../assets/w3.png';
import w4 from '../assets/w4.png';
import w5 from '../assets/w5.png';
import w6 from '../assets/w6.png';
import w7 from '../assets/w7.png';
import w8 from '../assets/w8.png';
import gl1 from '../assets/gl1.png';
import gl2 from '../assets/gl2.png';
import gl3 from '../assets/gl3.png';
import gl4 from '../assets/gl4.png';
import gl5 from '../assets/gl5.png';
import gl6 from '../assets/gl6.png';
import gl7 from '../assets/gl7.png';
import gl8 from '../assets/gl8.png';
import shape from '../assets/shape.png';
import play from '../assets/play.svg';
import Icon01 from '../assets/icon01.svg';
import Icon02 from '../assets/icon02.svg';
import Icon03 from '../assets/icon03.svg';
import map from '../assets/map.png';
import Titleshape from '../assets/title.svg';
import User from '../assets/username.svg';
import Password from '../assets/password.svg';
import Call from '../assets/call.svg';
import Email from '../assets/email.svg';
import Apple from '../assets/apple.svg';
import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/twitter.svg';
import Google from '../assets/google.svg';
import Envelope from '../assets/envelope.svg';
import Hand from '../assets/hand.svg';
import Top from '../assets/top.svg';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    const [memberTab, setMemberTab] = useState(1);
    const [memberSubTab, setMemberSubTab] = useState(1);

    const [showLoginModal, setLoginModal] = useState(false);
    const [showSignupModal, setSignupModal] = useState(false);
    const [showSignModal, setSignModal] = useState(false);

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


      useEffect(() => {
        Aos.init({duration:2000});
      }, []);
   

    // const goToTop = () => {
    //     window.scrollTo({
    //         top: 0, left:0,
    //         behavior: "smooth",
    //     });
    // };


  return (
    <>
  


    <section className='py-12 bg-gray-200 bg-center bg-cover h-1/6 scroll-smooth' id="home">
        <div className='container mx-auto'>
            <div className='flex flex-wrap items-center mx-3'>
                <div className='lg:w-1/2 w-full' data-aos="fade-right">
                    <h1 className='mb-4 md:text-5xl text-3xl font-bold text-sec text-uppercase'>WELCOME TO WINGS BADMINTON CLUB</h1>
                    <div className='text-base text-sec text-justify mb-8'>Our Club Vision is to Identify young athletes and energetic players. We coach our players to learn the foundation and techniques of badminton to transform their next level to participate in international tournaments.</div>
                    <a href="#" className="border border-solid  border-theme text-theme py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white"  onClick={() => setSignModal(true)}>Join Our Club</a>
                </div>   
                <div className='lg:w-1/2 w-full'>
                    <img src={Sec1Img} className="w-full rounded-lg z-10 pl-3" />
                </div>                 
            </div> 
        </div>        
    </section>

    <section className='plan-sec md:py-20 py-10 relative text-justify scroll-smooth' id='about'>
        <div className='container mx-auto'>
            <div className='flex flex-wrap items-center flex-col-reverse lg:flex-row'>
                <div className='lg:w-1/2 w-full px-3  mb-8 lg:mb-0' data-aos="fade-right">
                    <div className="relative flex items-center md:mt-0 mt-4">
                        <img src={AboutImg} className="w-full rounded-lg z-10 pl-3" />  
                        <div className="w-full h-full bg-theme rounded-lg absolute h-4/5"></div>
                    </div>
                    <div className="flex justify-end">
                    <a href="#" className="w-fit border border-solid  border-theme text-theme py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white md:hidden block mt-4"  onClick={() => setSignModal(true)}>Join Our Club</a>
                    </div>
                </div>
                <div className='lg:w-1/2 w-full px-3' data-aos="fade-left">
                    <div className='sec-title'>
                        <h2 className='text-justify text-3xl font-bold text-theme'><span className='text-sec'>About</span> Us</h2>
                        <img src={Titleshape} className="mb-4"></img>
                    </div>
                    <p className='text-base text-sec text-justify mb-3'>Wings Badminton Club is born in 2022, birth given by Thilak Krishnamoorthy who is passionate about sports from school-going age. Our Club is located in Ontario, Mississauga hot city of Canada, Club has an approximate area of 14,000 Square feet with a ceiling height of 25 feet and approved BWF certified Grade:1 Elite 10 Courts with 0.8mm thickness.  </p>
                    <ul className='sec2 text-base text-sec mb-8'>
                    <li className="flex mb-3">Our badminton courts provide good strengthen, crystal sand pattern, high wear resistance, bending resistance and high protection for players.</li>
                    <li className="flex mb-3">To identify, nurture and sharpen inside an individual for sports while molding the performance for a winning streak and make winning a habit.</li>
                    <li className="flex mb-3">To ensure each Players enjoy a consistently excellent badminton sports experience.</li>
                    </ul>
                    <a href="#" className="w-fit border border-solid  border-theme text-theme py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white md:block hidden"  onClick={() => setSignModal(true)}>Join Our Club</a>
                </div>                    
            </div> 
        </div>  
        <img src={shape} className="absolute right-10 bottom-10"/>      
    </section>
       
       <section className="sec-3 bg-cover bg-center pt-16 pb-4 text-justify scroll-smooth" id='courtrentals'>
            <div className="container mx-auto">
                <div className="flex flex-wrap lg:flex-row">
                    <div className="lg:w-1/2 w-full px-3 text-white pb-8" data-aos="fade-right">
                        <div className="md:mb-4 mb-2">
                            <h2 className="text-4xl font-bold text-white">Court <span className="text-theme">Rentals</span></h2>
                            <img src={Titleshape} />
                        </div>
                        <p className="mb-3">Challenge your family or friends to a friendly game or organize a corporates tournament. Our badminton courts are available for rental to all public players, professionals and Corporates. To book our court please use our advance online booking system or call our front office @778-881-1132 Monday to Friday 10am to 10pm and Saturday and Sunday 10am to 6pm.</p>
                        <p className="mb-3">BOOKING RULES – MAX OF 6 PLAYERS ONLY ALLOWED PER COURT.</p>
                        <p className="mb-8">CANCELLATION POLICY – 24 HOURS IN ADVANCE ALLOWED.</p>
                        <a href="#" className="w-fit md:block hidden border border-solid  border-theme text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white"  onClick={() => setLoginModal(true)}>Book Your Slot</a>
                
                    </div>
                    <div className="lg:w-1/2 w-full px-3 flex justify-center" data-aos="fade-left">
                        <div className="relative h-full md:mb-0 mb-4">
                          {/* <div className="h-40"></div> */}
                          <table className="tb-bg md:min-w-500 p-3 md:text-sm text-xs border-12 border-white text-center md:-mb-24 mb-4">
                            <thead>
                              <tr className="text-white text-lg font-semibold p-4">
                                <td className="py-4 md:px-4 px-1">Date</td>
                                <td className="py-4 md:px-4 px-1">Time</td>
                                <td className="py-4 md:px-4 px-1">Hourly Rate</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="p-4">
                                <td className="py-2 md:px-4 px-1 text-theme font-semibold">Weekdays</td>
                                <td className="py-2 md:px-4 px-1 text-white">06.00AM to 09.00AM</td>
                                <td className="py-2 md:px-4 px-1 text-white">$20.00 + Tax</td>
                              </tr>
                              
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">09.00AM to 04.00PM</td>
                                <td className="py-2 md:px-4 px-1">$15.00 + Tax</td>
                              </tr>
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">04.00PM to 12.00PM</td>
                                <td className="py-2 md:px-4 px-1">$20.00 + Tax</td>
                              </tr>
                              
                              <tr className="p-4">
                                <td className="py-2 md:px-4 px-1 text-theme font-semibold">Weekend</td>
                                <td className="py-2 md:px-4 px-1 text-white">06.00AM to 01.00PM</td>
                                <td className="py-2 md:px-4 px-1 text-white">$20.00 + Tax</td>
                              </tr>
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">01.00PM to 04.00PM</td>
                                <td className="py-2 md:px-4 px-1">$15.00 + Tax</td>
                              </tr>
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">04.00PM to 11.00PM</td>
                                <td className="py-2 md:px-4 px-1">$20.00 + Tax</td>
                              </tr>
                              <tr className="p-4">
                                <td className="py-2 md:px-4 px-1 text-theme font-semibold">Holidays</td>
                                <td className="py-2 md:px-4 px-1 text-white">06.00AM to 04.00PM</td>
                                <td className="py-2 md:px-4 px-1 text-white">$15.00 + Tax</td>
                              </tr>
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">06.00PM to 10.00PM</td>
                                <td className="py-2 md:px-4 px-1">$15.00 + Tax</td>
                              </tr>
                              <tr className="p-4 text-white">
                                <td className="py-2 md:px-4 px-1"></td>
                                <td className="py-2 md:px-4 px-1">10.00PM to 12.00PM</td>
                                <td className="py-2 md:px-4 px-1">$15.00 + Tax</td>
                              </tr>
                            </tbody>
                          </table>
                            {/* <img src={RentalImg} className="h-96 border-8 border-solid border-white lg:absolute left-0 lg:-bottom-12 w-full" /> */}
                            <img src={Hand} className="w-16 h-16 lg:absolute lg:-bottom-7 lg:-left-6  md:block hidden" />
                            <div className="flex justify-end">
                            <a href="#" className="border border-solid  border-theme text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white md:hidden block mt-4">Book Your Slot</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="h-24"></div>

        <section className='sec-4 py-12 bg-cover bg-bottom text-justify ' id='dropin'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap flex-col-reverse lg:flex-row items-center'>
                    <div className='lg:w-1/2 w-full px-3 lg:mb-0' data-aos="fade-right">
                        <img src={DropImg} className="w-full text-center border-8"></img>
                        <div className="flex justify-end">
                        <a href="#" className="w-fit border border-solid  border-white text-white py-2 px-8 rounded-full hover:bg-white hover:text-theme focus:bg-theme focus:text-white md:hidden block mt-4"  onClick={() => setLoginModal(true)}>Drop-In</a>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3' data-aos="fade-left">
                        <div className='sec-title '>
                            <h2 className='text-left text-3xl font-bold text-white'>Drop<span className="text-sec">-In</span></h2>
                            <img src={Titleshape} className="mb-4 invert-100 brightness-0"></img>
                        </div>
                        <p className='text-left text-base text-white text-justify mb-3'>If you don’t have your friends or family to play with you? don’t worry we have a drop-in program that will help to play with your new friends in a group of max 6 players.</p>
                        <ul className='text-left text-base text-white mb-8'>
                        <li className="flex text-justify mb-3">Min we need 4 playing to sign up drop-in program at the selected time slot, if less than 4 players we will cancel the booking and refund your money back to your wallet.</li>
                        <li className="flex text-justify mb-3">We allow 48 hours window to cancel your booking before starting the game.</li>
                        <li className="flex text-justify mb-3">Each session will be 2 hours with 1Court and Max 6 Players.</li>
                        </ul>
                        <a href="#" className="w-fit border border-solid  border-white text-white py-2 px-8 rounded-full hover:bg-white hover:text-theme focus:bg-theme focus:text-white md:block hidden"  onClick={() => setLoginModal(true)}>Drop-In</a>
                    </div>   
                </div> 
            </div>           
        </section>

        <section className="plan-sec md:py-20 py-10" id='membership'>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full px-3 text-center md:mb-8 mb-2">
                        <h2 className="text-4xl font-bold text-sec">Membership <span className="text-theme">Plans</span></h2>
                        <img src={Titleshape} className="inline-flex" />
                    </div>
                    
                    <div className="w-full px-3" data-aos="fade-up">
                        <div className="tab w-full">
                          <ul
                            className="flex list-none flex-wrap mb-12 md:mb-6 p-1 flex-row max-w-md mx-auto bg-white rounded-full shadow-xl"
                            role="tablist"
                          >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a
                                className={
                                  "text-lg font-medium px-5 py-3 rounded-full block leading-normal " +
                                  (memberTab === 1 ? "text-white bg-theme font-semibold"
                                                        : "text-sec")
                                }
                                onClick={e => {
                                  e.preventDefault();
                                  setMemberTab(1);
                                  e.stopPropagation();
                                  setMemberSubTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                              >
                                Early Bird
                              </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                              <a
                                className={
                                  "text-lg font-medium px-5 py-3 rounded-full block leading-normal " +
                                  (memberTab === 2 ? "text-white bg-theme font-semibold"
                                                        : "text-sec")
                                }
                                onClick={e => {
                                  e.preventDefault();
                                  setMemberTab(2);
                                  e.stopPropagation();
                                  setMemberSubTab(1);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                              >
                                  Evening Bird
                              </a>
                            </li>
                          </ul>
                          <div className="relative flex flex-col min-w-0 break-words">
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={memberTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className="flex flex-wrap">
                                            <div className="md:flex w-full">
                                              <ul
                                                className="md:my-3 w-full md:max-w-182 md:border-r border-b md:border-b-0 border-theme flex flex-wrap"
                                                role="tablist"
                                              >
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 1
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(1);                                                                                                                    
                                                      e.stopPropagation();
                                                      setMemberTab(1);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub1"
                                                    role="tablist"
                                                  >
                                                    Monthly
                                                  </a>
                                                </li>
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 2
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(2);
                                                      e.stopPropagation();
                                                      setMemberTab(1);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                      Quarterly
                                                  </a>
                                                </li>
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 3
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(3);
                                                      e.stopPropagation();
                                                      setMemberTab(1);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                      Half Yearly
                                                  </a>
                                                </li>
                                                <li className="flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 4
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(4);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                    Yearly
                                                  </a>
                                                </li>
                                              </ul>
                                              <div className="relative flex flex-col min-w-0 break-words w-full plans bg-contain bg-no-repeat bg-center rounded-lg shadow-xl">
                                                <div className="px-4 py-10 flex-auto">
                                                  <div className="tab-content tab-space">
                                                    <div className={memberSubTab === 1 ? "block" : "hidden"} id="linksub1">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Monthly) </b>Monday to Friday (6 AM to 4 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Early Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white" >Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 2 ? "block" : "hidden"} id="linksub2">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Quarterly) </b>Monday to Friday (6 AM to 4 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Early Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white">Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 3 ? "block" : "hidden"} id="linksub3">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Half Yearly) </b>Monday to Friday (6 AM to 4 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Early Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white" >Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 4 ? "block" : "hidden"} id="linksub4">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Yearly) </b>Monday to Friday (6 AM to 4 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Early Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white">Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={memberTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className="flex flex-wrap">
                                            <div className="md:flex w-full">
                                              <ul
                                                className="md:my-3 w-full md:max-w-182 md:border-r border-b md:border-b-0 border-theme flex flex-wrap"
                                                role="tablist"
                                              >
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 1
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(1);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub1"
                                                    role="tablist"
                                                  >
                                                    Monthly
                                                  </a>
                                                </li>
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 2
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(2);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                      Quarterly
                                                  </a>
                                                </li>
                                                <li className="md:mb-4 flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 3
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(3);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                      Half Yearly
                                                  </a>
                                                </li>
                                                <li className="flex-auto text-center">
                                                  <a
                                                    className={
                                                      "text-lg font-medium px-5 py-2 border-2 border-r-0 border-solid rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-bl-full block leading-normal " +
                                                      (memberSubTab === 4
                                                        ? "text-white bg-theme border-theme font-semibold"
                                                        : "text-sec border-white")
                                                    }
                                                    onClick={e => {
                                                      e.preventDefault();
                                                      setMemberSubTab(4);
                                                    }}
                                                    data-toggle="tab"
                                                    href="#linksub2"
                                                    role="tablist"
                                                  >
                                                    Yearly
                                                  </a>
                                                </li>
                                              </ul>
                                              <div className="relative flex flex-col min-w-0 break-words w-full plans bg-contain bg-no-repeat bg-center rounded-lg shadow-xl">
                                                <div className="px-4 py-10 flex-auto">
                                                  <div className="tab-content tab-space">
                                                    <div className={memberSubTab === 1 ? "block" : "hidden"} id="linksub1">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Monthly) </b>Monday to Friday (5 PM to 10 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p>
                                                        </div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Evening Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white" >Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 2 ? "block" : "hidden"} id="linksub2">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Quarterly) </b>Monday to Friday (5 PM to 10 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Evening Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white" >Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 3 ? "block" : "hidden"} id="linksub3">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Half Yearly) </b>Monday to Friday (5 PM to 10 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Evening Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white">Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div className={memberSubTab === 4 ? "block" : "hidden"} id="linksub4">
                                                    <div className='flex flex-wrap items-center'>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p className="mb-3"><b>Plan : (Yearly) </b>Monday to Friday (5 PM to 10 PM)</p>
                                                            <p className="mb-3"><b>Subscription Amount : </b>35 CAD</p>
                                                            <p className="mb-3"><b>Plan for :</b> Signal Adult</p>
                                                            <p className="mb-5"><b>Facility :</b> Badminton</p></div>
                                                        <div className='lg:w-1/2 w-full px-3 lg:mb-0'>
                                                            <p><b>Evening Bird Description : </b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                                        </div>
                                                        <div className='w-full mt-3 md:mt-0 flex justify-end'>
                                                          <a href="/MembershipPlans" className="bg-sec text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white">Get Started</a>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    </div>
                                                </div>
                                              </div>
                                            </div>
                                        </div>
                                    </div>                                       
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

        <section className='sec-6 py-12 lg:bg-fit bg-cover bg-bottom text-justify' id='coaching'>
            <div className='container mx-auto'>
                    <div className='flex flex-wrap items-center'>
                    <div className='lg:w-1/2 w-full px-3' data-aos="fade-right">
                        <div className='sec-title '>
                            <h2 className='text-left text-3xl font-bold text-white'>Coaching <span className="text-theme">Class</span></h2>
                            <img src={Titleshape} className="mb-4"></img>
                        </div>
                        <p className='text-left text-base text-white text-justify mb-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                        <p className='text-left text-base text-white text-justify mb-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                        <p className='text-left text-base text-white text-justify mb-2'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                        <p className='text-left text-base text-white text-justify mb-8'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
                        <a href="#" className="w-fit border border-solid border-theme text-white py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white md:block hidden">Learn More</a>
                    </div>
                    <div className='lg:w-1/2 w-full px-3' data-aos="fade-left">
                        <img src={CoaImg} className="w-full text-center"></img>
                        <div className="flex justify-end">
                        <a href="#" className="w-fit border border-solid border-theme text-theme py-2 px-8 rounded-full hover:bg-theme hover:text-white focus:bg-theme focus:text-white md:hidden block mt-4">Learn More</a>
                        </div>
                    </div>
                </div>  
                <div className="h-5"></div>
              

            </div>          
        </section>

        <section className='sec-7 py-12' id="gallery" >
            <div className='container mx-auto'>
                <div className='flex flex-wrap items-center justify-center'>
                    <div className='w-full text-center md:mb-8 mb-2'>
                        <h2 className='text-3xl font-bold text-theme'><span className='text-sec'>Our</span> Gallery</h2>
                        <img src={Titleshape} className="mb-4 inline-flex"></img>
                    </div>
                    <div className="relative text-center" data-aos="fade-up">
                        <div className="flex md:gap-4 gap-1 mb-1 md:mb-4">
                          <div>
                            <a data-fancybox href={w1}>
                              <img className="" src={gl1} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w2}>
                              <img className="" src={gl2} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w3}>
                              <img className="" src={gl3} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w4}>
                              <img className="" src={gl4} />
                            </a>
                          </div>
                        </div>
                        <div className="flex md:gap-4 gap-1 mb-1 md:mb-4">
                          <div>
                            <a data-fancybox href={w5}>
                              <img className="" src={gl5} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w6}>
                              <img className="" src={gl6} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w7}>
                              <img className="" src={gl7} />
                            </a>
                          </div>
                          <div>
                            <a data-fancybox href={w8}>
                              <img className="" src={gl8} />
                            </a>
                          </div>
                          </div>   
                          <div className="absolute bg-theme border-8 border-white text-white -bottom-2 right-0 py-4 px-10"><a data-fancybox href={w8}>View More</a></div>                     
                    </div>                                  
                </div>
            </div>
        </section>

        <section className='py-9 bg-sec scroll-mt-16' id='contactus' >
        <div className='container mx-auto'>
          <div className='sec-title px-3'>
            <h2 className='text-left text-3xl font-bold text-white'>Get In <span className="text-theme">Touch</span></h2>
            <img src={Titleshape} className="mb-4"></img>
          </div>
          <div className='flex flex-wrap items-end'>
            <div className='lg:w-8/12 px-4'>
              <div className='flex flex-wrap justify-between mb-4'>
              
              <div className="lg:w-4/12 w-full flex items-center mb-5 lg:mb-0">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon02} className="h-5" /> 
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">Address</h4>
                      <a href="#" className="text-sm text-white text-white hover:text-theme">105, Letty AveBrampton, ON L6Y 5E1</a>
                  </div>
              </div>
              <div className="lg:w-4/12 w-full flex items-center mb-5 lg:mb-0">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon03} className="h-5" /> 
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">Email ID</h4>
                      <a href="mailto:vanessa@wingsbadmintonclub.ca" className="text-sm text-white text-white hover:text-theme">vanessa@wingsbadmintonclub.ca</a>
                  </div>
              </div>
              <div className="lg:w-4/12 w-full flex items-center">
                  <div className="mr-3">
                      <span className="h-10 w-10 bg-theme inline-flex items-center justify-center rounded-full">
                          <img src={Icon01} className="h-5" />   
                      </span>
                  </div>
                  <div>
                      <h4 className="text-sm text-stone-500">Call us</h4>
                      <a href="tel:7788811132" className="text-sm text-white hover:text-theme text-md">(+1)778-881-1132</a>
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
              <div className="grid gap-6 grid-cols-1">
                  <div>
                      <input type="text" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your name" />
                  </div>
                  <div>
                      <input type="text" className="h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your number" />
                  </div> 
                  <div>
                      <input type="email" className="h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700  placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Enter your email" />
                  </div> 
                  <div>
                      <textarea rows="8" type="email" className="w-full px-3 py-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-700 placeholder-gray-400 hover:border-theme focus:border-theme" placeholder="Write your message" />
                  </div> 
                  <button type="submit" className="h-14 rounded-full text-lg text-white bg-theme hover:bg-sec hover:border-2 border-theme ">Submit</button>
              </div>
          </form>
            </div>
          </div>
          
        </div>
          
        </section>

        {/* <div className="w-full absolute bottom-10 sticky right-0 flex justify-end">
          <button className="tpbtn z-10" onClick={goToTop}><img src={Top} /></button>
        </div> */}

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
                      
                      <NavLink exact="true" to="/Booking" className="login flex items-center justify-center relative h-14 text-lg text-white rounded-lg bg-theme mt-3">LOGIN
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
        
        
    </>
  );
}


 export default App;
