
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

export default function Dashboard() {
	const [navbar, setNavbar] = useState(false);
	const [ProfileDrop, setProfileDrop] = useState(false);

  return(
			<div className="dash wrapper flex items-stretch w-full h-screen bg-light">
				<nav id="sidebar" className={`h-full max-w-182 lg:max-w-260 w-full z-10 ${navbar ? "block w-full Fullmenu absolute md:relative" : "md:w-20 w-0 overflow-hidden  Iconmenu"}`}>
					<a href="#" className={`logo text-center flex py-4 hidden md:block ${navbar ? "px-5" : "px-3"}`} name="logo">
						<img src={Logo} className={`h-12 ${navbar ? "block" : "hidden"}`} />
						<img src={LogoIco} className={`h-12 ${navbar ? "hidden" : "block"}`} />
					</a>
					<ul className={`h-12 ${navbar ? "block" : "hidden"}`} className="sideNav b-5 text-white gap-y-2 bg-sec h-full fixed rounded-tr-3xl pt-8 flex flex-col gap-y-2 mt-16 md:mt-0">
						<li className="min-h-42 overflow-hidden md:overflow-none">
							<NavLink to='/Admin/Dashboard' className="active leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 15.634 15.634">
                  <path d="M4.5,13.186h6.948V4.5H4.5Zm0,6.948h6.948V14.923H4.5Zm8.686,0h6.948V11.448H13.186Zm0-15.634V9.711h6.948V4.5Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
                </svg>
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/Admin/Booking2' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 15.317 15.317">
                  <path d="M4.532,6.063H3V16.785a1.536,1.536,0,0,0,1.532,1.532H15.254V16.785H4.532ZM16.785,3H7.6A1.536,1.536,0,0,0,6.063,4.532v9.19A1.536,1.536,0,0,0,7.6,15.254h9.19a1.536,1.536,0,0,0,1.532-1.532V4.532A1.536,1.536,0,0,0,16.785,3Zm-.766,6.893H8.361V8.361h7.659Zm-3.063,3.063h-4.6V11.424h4.6Zm3.063-6.127H8.361V5.3h7.659Z" transform="translate(-3 -3)" fill="#fff"/>
                </svg>
								<span>Court Booking</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/Admin/Booking3' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 16.837 15.634">
								  <g transform="translate(-2.249 -3.375)">
								    <path id="Path_2218" data-name="Path 2218" d="M24.113,7.523v5.3l-8,7.655a1.713,1.713,0,0,0,1.082.462,1.872,1.872,0,0,0,1.18-.462l7.163-6.753V8.914Z" transform="translate(-6.455 -1.931)" fill="#fff"/>
								    <path id="Path_2219" data-name="Path 2219" d="M15.478,3.375H9.465l-6.753,7.05a1.538,1.538,0,0,0-.462,1.067,1.644,1.644,0,0,0,.462,1.2l4.653,4.645a1.725,1.725,0,0,0,1.082.47,1.876,1.876,0,0,0,1.176-.47l7.058-6.746V4.578Zm-1.154,3.86a1.2,1.2,0,1,1,.8-.8A1.17,1.17,0,0,1,14.325,7.235Z" fill="#fff"/>
								  </g>
								</svg>
								<span>Booking User List</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/Admin/Booking6' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
							  <svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 17.154 12.988">
	                <g transform="translate(-600.459 166.418)">
	                  <path id="Path_2265" data-name="Path 2265" d="M642.545-81.99H636.03c-.35,0-.439-.089-.439-.438,0-.467,0-.935,0-1.4a.328.328,0,0,1,.368-.376h13.066a1.3,1.3,0,0,1,.19.006.3.3,0,0,1,.282.317q.006.788,0,1.576a.3.3,0,0,1-.315.317c-.161.006-.323,0-.484,0Z" transform="translate(-33.509 -78.413)" fill="#fff"/>
	                  <path id="Path_2266" data-name="Path 2266" d="M658.4,68.813c.141-.511.278-1,.415-1.5.051-.183.113-.364.152-.549.027-.129.086-.16.211-.16q2.99.006,5.98,0c1.417,0,2.834,0,4.252,0a.2.2,0,0,1,.232.179c.167.629.347,1.255.522,1.882.012.044.02.089.032.148Z" transform="translate(-55.261 -222.261)" fill="#fff"/>
	                  <path id="Path_2267" data-name="Path 2267" d="M680.36-22.378v3.455h-4.784l.3-1.065q.313-1.123.624-2.247c.027-.1.052-.158.177-.157,1.187.005,2.373,0,3.56,0C680.272-22.389,680.311-22.382,680.36-22.378Z" transform="translate(-71.648 -137.373)" fill="#fff"/>
	                  <path id="Path_2268" data-name="Path 2268" d="M793.169-18.919v-3.459c.061,0,.117-.01.172-.01,1.158,0,2.315,0,3.473,0,.131,0,.187.033.223.167.285,1.05.581,2.1.873,3.147.014.049.024.1.038.159Z" transform="translate(-183.809 -137.375)" fill="#fff"/>
	                  <path id="Path_2269" data-name="Path 2269" d="M604.235-22.321c-.228.822-.448,1.616-.668,2.409-.346,1.243-.7,2.485-1.035,3.729a.218.218,0,0,1-.258.194c-.478-.012-.956,0-1.434-.005-.322,0-.451-.186-.341-.489q1.033-2.851,2.072-5.7c.02-.054.08-.132.122-.133C603.2-22.325,603.7-22.321,604.235-22.321Z" transform="translate(0 -137.441)" fill="#fff"/>
	                  <path id="Path_2270" data-name="Path 2270" d="M890.4-22.322c.521,0,1.027,0,1.533.007.044,0,.1.09.126.15q.813,2.223,1.619,4.448c.147.406.3.812.443,1.218.116.323-.011.5-.356.5-.49,0-.979,0-1.469,0-.1,0-.153-.015-.184-.127q-.848-3.064-1.7-6.126A.586.586,0,0,1,890.4-22.322Z" transform="translate(-276.552 -137.441)" fill="#fff"/>
	                  <path id="Path_2271" data-name="Path 2271" d="M730.948-165.476c.081-.293.153-.577.243-.855.014-.043.114-.08.174-.081.576-.006,1.151,0,1.727,0,.84,0,1.681,0,2.521,0,.132,0,.194.033.225.167.059.257.137.51.21.775Z" transform="translate(-124.462)" fill="#fff"/>
	                  <path id="Path_2272" data-name="Path 2272" d="M796.07-130.362h-2.846v-1.568h2.406Z" transform="translate(-183.862 -32.896)" fill="#fff"/>
	                  <path id="Path_2273" data-name="Path 2273" d="M720.477-132.209v1.573h-2.843l.146-.527c.085-.305.166-.612.258-.915.016-.051.079-.125.121-.126C718.924-132.211,719.69-132.209,720.477-132.209Z" transform="translate(-111.763 -32.629)" fill="#fff"/>
	                  <path id="Path_2274" data-name="Path 2274" d="M677.154-166.324l-.294,1.054c-.179.644-.361,1.288-.535,1.933-.03.111-.069.16-.2.157-.38-.01-.759,0-1.157,0,.024-.07.039-.124.06-.176q.532-1.351,1.066-2.7c.094-.239.16-.285.411-.286.2,0,.392,0,.588,0A.281.281,0,0,1,677.154-166.324Z" transform="translate(-71.071 -0.068)" fill="#fff"/>
	                  <path id="Path_2275" data-name="Path 2275" d="M850.435-166.287c.26,0,.519-.015.774.009a.335.335,0,0,1,.224.183c.391.965.769,1.935,1.15,2.9a.212.212,0,0,1,0,.062c-.4,0-.805,0-1.207,0a.141.141,0,0,1-.1-.082q-.424-1.5-.838-3.009A.287.287,0,0,1,850.435-166.287Z" transform="translate(-238.43 -0.12)" fill="#fff"/>
	                </g>
	              </svg>
								<span>Manage Spaces</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink  to='/Admin/Booking5' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 15.147 16.012">
                  <path d="M9.018,0H.6A.6.6,0,0,0,0,.6V1a.6.6,0,0,0,.6.6,4.971,4.971,0,0,0,3.027,4.81A4.971,4.971,0,0,0,.6,11.223a.6.6,0,0,0-.6.6v.4a.6.6,0,0,0,.6.6H9.018a.6.6,0,0,0,.6-.6v-.4a.6.6,0,0,0-.6-.6,4.971,4.971,0,0,0-3.027-4.81A4.971,4.971,0,0,0,9.018,1.6a.6.6,0,0,0,.6-.6V.6A.6.6,0,0,0,9.018,0Zm-1.6,11.223H2.2c0-1.94,1.157-3.607,2.605-3.607S7.415,9.282,7.415,11.223Z" transform="translate(0 5.379) rotate(-34)" fill="#fff"/>
                </svg>
								<span>Hours of availability</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/Admin/Booking8' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 16.837 16.841">
                  <g transform="translate(-1184.523 -81.41)">
                    <path id="Path_2220" data-name="Path 2220" d="M1200.554,91.433a4.324,4.324,0,0,0-5.416.311,4.226,4.226,0,0,0-1.374,2.729,4.367,4.367,0,0,0,.8,2.977c-.161.021-.276.045-.391.049a28.68,28.68,0,0,1-5.564-.249,4.459,4.459,0,0,1-3.835-3.983,28.363,28.363,0,0,1,.061-7.967,4.5,4.5,0,0,1,3.526-3.564,27.639,27.639,0,0,1,8.352-.012,4.5,4.5,0,0,1,3.634,3.66,30.412,30.412,0,0,1,.267,5.529c0,.118-.014.236-.026.354A1.647,1.647,0,0,1,1200.554,91.433Zm-7.993-4.256h3.729c.106,0,.214,0,.319-.006a.93.93,0,0,0-.007-1.858c-.082-.008-.166-.006-.248-.006q-3.764,0-7.528,0a1.979,1.979,0,0,0-.492.051.922.922,0,0,0,.007,1.769,2.061,2.061,0,0,0,.492.048C1190.075,87.179,1191.318,87.177,1192.561,87.177Zm-1.607,3.885c.745,0,1.491,0,2.236,0a.935.935,0,0,0,1.02-.938.951.951,0,0,0-1.014-.918q-2.254-.008-4.507,0a.928.928,0,0,0-1.012.947.917.917,0,0,0,1.006.909C1189.44,91.066,1190.2,91.062,1190.954,91.062Z" transform="translate(0 0)" fill="#fff"/>
                    <path id="Path_2221" data-name="Path 2221" d="M1333.732,227.341a3.352,3.352,0,0,1-6.7-.054,3.352,3.352,0,1,1,6.7.054Zm-2.727.841c0-.283.009-.567,0-.85a.6.6,0,0,0-.6-.616.581.581,0,0,0-.631.578c-.021.577-.022,1.157,0,1.734a.579.579,0,0,0,.643.563A.6.6,0,0,0,1331,229C1331.016,228.726,1331.005,228.454,1331.006,228.182Zm0-2.52c0-.511-.116-.632-.613-.635-.517,0-.651.13-.647.644,0,.49.14.621.638.619S1331.005,226.165,1331.005,225.662Z" transform="translate(-132.372 -132.412)" fill="#fff"/>
                  </g>
                </svg>
								<span>Conditions</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 16.837 15.634">
	                  <g transform="translate(-2.249 -3.375)">
	                    <path id="Path_2218" data-name="Path 2218" d="M24.113,7.523v5.3l-8,7.655a1.713,1.713,0,0,0,1.082.462,1.872,1.872,0,0,0,1.18-.462l7.163-6.753V8.914Z" transform="translate(-6.455 -1.931)" fill="#fff"/>
	                    <path id="Path_2219" data-name="Path 2219" d="M15.478,3.375H9.465l-6.753,7.05a1.538,1.538,0,0,0-.462,1.067,1.644,1.644,0,0,0,.462,1.2l4.653,4.645a1.725,1.725,0,0,0,1.082.47,1.876,1.876,0,0,0,1.176-.47l7.058-6.746V4.578Zm-1.154,3.86a1.2,1.2,0,1,1,.8-.8A1.17,1.17,0,0,1,14.325,7.235Z" fill="#fff"/>
	                  </g>
	                </svg>
								<span>Pricing</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 16.837 18.103">
	                <g transform="translate(-1329.246 -499.485)">
	                  <path id="Path_2222" data-name="Path 2222" d="M1412.427,499.485h4.369a.773.773,0,0,1,.869.865q0,2.493,0,4.986a.773.773,0,0,1-.858.858h-8.8a.779.779,0,0,1-.854-.847q0-2.513,0-5.026a.773.773,0,0,1,.843-.835Zm-2.06,4.59a1.652,1.652,0,0,1,.206.087c.214.125.424.256.636.385.116.07.255.168.361.044a.474.474,0,0,0,.053-.343,6.328,6.328,0,0,0-.171-.722.339.339,0,0,1,.124-.39,6.522,6.522,0,0,0,.553-.5.4.4,0,0,0,.113-.306c-.016-.071-.162-.144-.259-.16a6.343,6.343,0,0,0-.76-.07.346.346,0,0,1-.344-.252c-.095-.25-.189-.5-.308-.74-.043-.087-.156-.192-.237-.191a.356.356,0,0,0-.238.192,7.683,7.683,0,0,0-.32.779.29.29,0,0,1-.3.212c-.268.013-.536.032-.8.071-.091.014-.222.079-.245.15a.339.339,0,0,0,.112.264c.207.2.43.383.65.57a.293.293,0,0,1,.107.336c-.072.257-.124.52-.192.779-.033.125-.06.264.073.316a.454.454,0,0,0,.327-.035c.227-.114.438-.258.658-.387A2.141,2.141,0,0,1,1410.367,504.075Zm4.325.748c.429,0,.859,0,1.288,0,.222,0,.349-.121.35-.3s-.123-.3-.348-.3c-.141,0-.282,0-.423,0-.711,0-1.423,0-2.134,0-.247,0-.367.1-.368.3s.126.306.365.308C1413.846,504.827,1414.269,504.824,1414.692,504.823Zm0-3.359c.423,0,.846,0,1.268,0,.242,0,.371-.108.374-.3s-.133-.311-.384-.311q-1.248,0-2.5,0c-.256,0-.389.105-.392.3s.125.306.382.308C1413.856,501.466,1414.272,501.465,1414.688,501.464Zm-.008,1.68c.423,0,.846,0,1.268,0,.249,0,.386-.115.381-.312s-.135-.295-.376-.295q-1.258,0-2.517,0c-.255,0-.383.108-.379.31s.133.3.374.3C1413.848,503.146,1414.264,503.144,1414.68,503.144Z" transform="translate(-74.769)" fill="#fff"/>
	                  <path id="Path_2223" data-name="Path 2223" d="M1463.068,841.28a13.73,13.73,0,0,1-2.759-.279.424.424,0,0,1-.4-.49c.071-.686.124-1.378.256-2.053a2.14,2.14,0,0,1,2.064-1.688c.5-.01.994,0,1.49,0a2.213,2.213,0,0,1,2.309,2.1c.053.527.119,1.052.181,1.578a.449.449,0,0,1-.389.555A13.407,13.407,0,0,1,1463.068,841.28Z" transform="translate(-125.401 -323.692)" fill="#fff"/>
	                  <path id="Path_2224" data-name="Path 2224" d="M1335.048,812a2.9,2.9,0,0,0-1.014,1.932c-.053.452-.11.9-.166,1.356,0,.026-.01.052-.019.1-.209.018-.422.045-.634.054a14.4,14.4,0,0,1-3.484-.235c-.4-.08-.525-.26-.473-.666.074-.578.123-1.159.214-1.734a2.114,2.114,0,0,1,1.949-1.838,14.244,14.244,0,0,1,2.13.022A1.992,1.992,0,0,1,1335.048,812Z" transform="translate(0 -298.909)" fill="#fff"/>
	                  <path id="Path_2225" data-name="Path 2225" d="M1602.806,811.476a2.022,2.022,0,0,1,1.558-1.016,12.666,12.666,0,0,1,2.172,0,2.107,2.107,0,0,1,1.838,1.793c.1.629.172,1.261.246,1.893a.423.423,0,0,1-.368.512,13.488,13.488,0,0,1-4.165.208.617.617,0,0,1-.076-.02c-.044-.345-.1-.695-.129-1.047A3.163,3.163,0,0,0,1602.806,811.476Z" transform="translate(-262.54 -298.404)" fill="#fff"/>
	                  <path id="Path_2226" data-name="Path 2226" d="M1488.413,720.011a2.074,2.074,0,1,1-2.094,2.074A2.076,2.076,0,0,1,1488.413,720.011Z" transform="translate(-150.746 -211.643)" fill="#fff"/>
	                  <path id="Path_2227" data-name="Path 2227" d="M1358.155,694.009a2.075,2.075,0,1,1-.015,4.149,2.075,2.075,0,1,1,.015-4.149Z" transform="translate(-25.745 -186.688)" fill="#fff"/>
	                  <path id="Path_2228" data-name="Path 2228" d="M1616.694,696.083a2.078,2.078,0,0,1,4.156-.013,2.078,2.078,0,1,1-4.156.013Z" transform="translate(-275.869 -186.689)" fill="#fff"/>
	                </g>
	              </svg>
								<span>Membership</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
							 	<svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 15.313 15.317">
                  <path d="M18.549,12.157a1.971,1.971,0,0,1,1.264-1.838,7.811,7.811,0,0,0-.945-2.277,2,2,0,0,1-.8.171,1.966,1.966,0,0,1-1.8-2.768A7.787,7.787,0,0,0,13.995,4.5a1.969,1.969,0,0,1-3.677,0,7.811,7.811,0,0,0-2.277.945,1.966,1.966,0,0,1-1.8,2.768,1.932,1.932,0,0,1-.8-.171A7.983,7.983,0,0,0,4.5,10.322,1.97,1.97,0,0,1,4.5,14a7.811,7.811,0,0,0,.945,2.277,1.967,1.967,0,0,1,2.6,2.6,7.856,7.856,0,0,0,2.277.945,1.965,1.965,0,0,1,3.669,0,7.811,7.811,0,0,0,2.277-.945,1.969,1.969,0,0,1,2.6-2.6A7.856,7.856,0,0,0,19.809,14,1.98,1.98,0,0,1,18.549,12.157Zm-6.357,3.186a3.19,3.19,0,1,1,3.19-3.19A3.189,3.189,0,0,1,12.192,15.343Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
                </svg>
								<span>Settings</span>
							</NavLink>
						</li>
					</ul>
				</nav>

			 	<div id="content" className="h-full relative w-full">
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
					
					<div className="flex flex-wrap gap-y-4">
						<div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full px-3">
							<a href="#" className="card-block flex p-3 bg-white rounded-2xl hover:shadow-md focus:shadow-md">
								<div className="flex items-center">
									<div className="h-18 w-18 rounded-2xl bg-light mr-5 border-0.5 border-shade flex items-center justify-center">
											<img src={CalendarIco} />
									</div>
									<div className="card-point">
										<h2 className="text-3xl font-bold text-theme mb-1.5">250+</h2>
										<h6 className="font-bold text-md text-sec">Avialable Booking</h6>
									</div>
								</div>
							</a>
						</div>
						<div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full px-3">
							<a href="#" className="card-block flex p-3 bg-white rounded-2xl hover:shadow-md focus:shadow-md">
								<div className="flex items-center">
									<div className="h-18 w-18 rounded-2xl bg-light mr-5 border-0.5 border-shade flex items-center justify-center">
											<img src={CalendarIco} />
									</div>
									<div className="card-point">
										<h2 className="text-3xl font-bold text-theme mb-1.5">250+</h2>
										<h6 className="font-bold text-md text-sec">Today Booking</h6>
									</div>
								</div>
							</a>
						</div>
						<div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full px-3">
							<a href="#" className="card-block flex p-3 bg-white rounded-2xl hover:shadow-md focus:shadow-md">
								<div className="flex items-center">
									<div className="h-18 w-18 rounded-2xl bg-light mr-5 border-0.5 border-shade flex items-center justify-center">
											<img src={UserIco} />
									</div>
									<div className="card-point">
										<h2 className="text-3xl font-bold text-theme mb-1.5">250+</h2>
										<h6 className="font-bold text-md text-sec">Total User</h6>
									</div>
								</div>
							</a>
						</div>
						<div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 w-full px-3">
							<a href="#" className="card-block flex p-3 bg-white rounded-2xl hover:shadow-md focus:shadow-md">
									<div className="flex items-center">
									<div className="h-18 w-18 rounded-2xl bg-light mr-5 border-0.5 border-shade flex items-center justify-center">
											<img src={SaveIco} />
									</div>
									<div className="card-point">
										<h2 className="text-3xl font-bold text-theme mb-1.5">250+</h2>
										<h6 className="font-bold text-md text-sec">Total Sales</h6>
									</div>
								</div>
							</a>
						</div>
					</div>

					<div className='flex py-3 px-3'>
            <img src={Graph} className='w-full' / >
          </div>
          <div className='flex py-3 px-3'>
            <img src={Graph} className='w-full' / >
          </div>
          
				</div>
			</div>
	);
}