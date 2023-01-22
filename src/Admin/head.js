import { React,useState } from "react"; 
import { NavLink,Link} from "react-router-dom";
import Logo from '../assets/wlogo.svg';
import LogoIco from './assets/logoIco.svg';
import CalendarIco from "./assets/calendarIco.svg"
import SaveIco from "./assets/saveIco.svg"
import UserIco from "./assets/userIco.svg"
import UserImg from "./assets/userImg.png"
import Graph from '../assets/graph.png';
import '../App.css';

export default function Head() {

    const [navbar, setNavbar] = useState(false);
    const [ProfileDrop, setProfileDrop] = useState(false);

    return(

        <div className="pl-3 lg:pt-4 lg:pb-4 py-2.5 mb-3 relative z-50">
						<div className="container-fluid">
							<div className="flex flex-wrap items-center relative mb-3 lg:mb-2">
								<div className="w-1/2 flex items-center">
										<button
		                    className="py-2 rounded-md outline-none mr-2 text-bgdark hover:text-theme focus:text-theme"
		                    onClick={() => setNavbar(!navbar)}
		                >
		                   <svg width="27" height="19" viewBox="0 0 27 19">
												  <g transform="translate(-84 -23)">
												    <line id="Line_2" data-name="Line 2" x2="17" transform="translate(85.5 24.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
												    <line id="Line_3" data-name="Line 3" x2="24" transform="translate(85.5 32.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
												    <line id="Line_4" data-name="Line 4" x2="20" transform="translate(85.5 40.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
												  </g>
												</svg>

		                </button>
		                <img src={LogoIco} className="h-12 md:hidden" />
										<div className="title-set md:block hidden">
											<h3 className="text-sec"><span className="font-bold">Welcome</span> To Dashboard</h3>
										</div>
								</div>
								<div className="w-1/2">
									 <ul className="mb-0 flex justify-end items-center w-full">
									 	<li>
			                  <a href="#" className="h-11 w-11 rounded-full inline-flex items-center justify-center text-theme bg-lgtheme hover:bg-theme hover:text-white focus:bg-theme focus:text-white">
                          <svg width="13.949" height="17" viewBox="0 0 13.949 17">
                            <path d="M12.974,20.75a1.749,1.749,0,0,0,1.744-1.744H11.231A1.749,1.749,0,0,0,12.974,20.75Zm5.231-5.231V11.16c0-2.676-1.421-4.917-3.923-5.51V5.058a1.308,1.308,0,1,0-2.615,0v.593c-2.493.593-3.923,2.825-3.923,5.51v4.359L6,17.263v.872H19.949v-.872Zm-1.744.872H9.487V11.16C9.487,9,10.8,7.237,12.974,7.237S16.462,9,16.462,11.16Z" transform="translate(-6 -3.75)" fill="currentColor"/>
                          </svg>
			                  </a>
			              </li>
			              <li className="ml-3">
			                  <button 
			                  	onClick={() => setProfileDrop(!ProfileDrop)} 
			                  	className="bg-sec pl-1 pr-2 rounded-tl-3xl rounded-bl-3xl w-40 h-12 text-white font-medium inline-flex items-center justify-center hover:bg-theme focus:bg-theme">
			                  	<img src={UserImg} className="rounded-full h-10 w-10 object-cover mr-2 border border-white shadow" />
			                  	<span className="truncate text-sm">Thilak Krishna</span>
			                  	<svg viewBox="0 0 9 6" width="9" height="6"><path d="m4.5 6l-4.5-6h9z" fill="#fff" /></svg>
		                  	</button>
		                  	<div className={`py-3 bg-white rounded-2xl w-40 absolute z-10 shadow-xl mt-2 right-3 overflow-hidden ${ProfileDrop ? "block" : "hidden"}`} >
			                  	<ul>
		                  				<li>
		                  						<NavLink to='/' className="leading-4 px-4 py-3 flex items-center w-full hover:bg-light focus:bg-light">
																			<svg className="mr-1.5" width="18" height="18" viewBox="0 0 24 24" fill="none">
																				<path fillRule="evenodd" clipRule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
																				<path fillRule="evenodd" clipRule="evenodd" d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
																			</svg>
																			Profile
																	</NavLink>
		                  				</li>
		                  				<li>
		                  						<NavLink to='/' className="leading-4 px-4 py-3 flex items-center w-full hover:bg-light focus:bg-light">
																			<svg className="mr-1.5" width="18" height="18" viewBox="0 0 24 24" fill="none">
																				<path fillRule="evenodd" clipRule="evenodd" d="M12 9.5C13.3809 9.5 14.5 10.6191 14.5 12C14.5 13.3809 13.3809 14.5 12 14.5C10.6191 14.5 9.5 13.3809 9.5 12C9.5 10.6191 10.6191 9.5 12 9.5Z" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
																				<path fillRule="evenodd" clipRule="evenodd" d="M20.168 7.25025V7.25025C19.4845 6.05799 17.9712 5.65004 16.7885 6.33852C15.7598 6.93613 14.4741 6.18838 14.4741 4.99218C14.4741 3.61619 13.3659 2.5 11.9998 2.5V2.5C10.6337 2.5 9.52546 3.61619 9.52546 4.99218C9.52546 6.18838 8.23977 6.93613 7.21199 6.33852C6.02829 5.65004 4.51507 6.05799 3.83153 7.25025C3.14896 8.4425 3.55399 9.96665 4.73769 10.6541C5.76546 11.2527 5.76546 12.7473 4.73769 13.3459C3.55399 14.0343 3.14896 15.5585 3.83153 16.7498C4.51507 17.942 6.02829 18.35 7.21101 17.6625H7.21199C8.23977 17.0639 9.52546 17.8116 9.52546 19.0078V19.0078C9.52546 20.3838 10.6337 21.5 11.9998 21.5V21.5C13.3659 21.5 14.4741 20.3838 14.4741 19.0078V19.0078C14.4741 17.8116 15.7598 17.0639 16.7885 17.6625C17.9712 18.35 19.4845 17.942 20.168 16.7498C20.8515 15.5585 20.4455 14.0343 19.2628 13.3459H19.2618C18.2341 12.7473 18.2341 11.2527 19.2628 10.6541C20.4455 9.96665 20.8515 8.4425 20.168 7.25025Z" stroke="#130F26" strokeWidth="1.5" 	strokeLinecap="round" strokeLinejoin="round"/>
																			</svg>
																			Settings
																	</NavLink>
		                  				</li>
		                  				<li>
		                  						<NavLink to='/' className="leading-4 px-4 py-3 flex items-center w-full text-red-500 hover:bg-red-100 focus:bg-red-100 focus:text-white">
																			<svg className="mr-1.5" width="18" height="18" viewBox="0 0 24 24" fill="none">
																				<path d="M13 12H22M22 12L18.6667 8M22 12L18.6667 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																				<path d="M14 7V5.1736C14 4.00352 12.9999 3.08334 11.8339 3.18051L3.83391 3.84717C2.79732 3.93356 2 4.80009 2 5.84027V18.1597C2 19.1999 2.79733 20.0664 3.83391 20.1528L11.8339 20.8195C12.9999 20.9167 14 19.9965 14 18.8264V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
																			</svg>
																			Logout
																	</NavLink>
		                  				</li>
		                  		</ul>
		                  	</div>
			              </li>
									</ul>
								</div>
							</div>
						</div>
					</div>
    );
}