import { React,useState } from "react"; 
import { NavLink,Link} from "react-router-dom";
import Header from './head.js';
import Sidebar from './side.js';
import Logo from '../assets/wlogo.svg';
import LogoIco from './assets/logoIco.svg';
import CalendarIco from "./assets/calendarIco.svg"
import SaveIco from "./assets/saveIco.svg"
import UserIco from "./assets/userIco.svg"
import UserImg from "./assets/userImg.png"
import Graph from '../assets/graph.png';
import '../App.css';

export default function Side() {

    const [navbar, setNavbar] = useState(false);
	const [ProfileDrop, setProfileDrop] = useState(false);

    return(

    <nav id="sidebar" className={`h-full max-w-182 lg:max-w-260 w-full z-10 ${navbar ? "block w-full Fullmenu absolute md:relative" : "md:w-20 w-0 overflow-hidden  Iconmenu"}`}>
					<a href="#" className={`logo text-center flex py-4 hidden md:block ${navbar ? "px-5" : "px-3"}`} name="logo">
						<img src={Logo} className={`h-12 ${navbar ? "block" : "hidden"}`} />
						<img src={LogoIco} className={`h-12 ${navbar ? "hidden" : "block"}`} />
					</a>
					<ul className={`h-12 ${navbar ? "block" : "hidden"}`} className="sideNav b-5 text-white gap-y-2 bg-sec h-full fixed rounded-tr-3xl pt-8 flex flex-col gap-y-2 mt-16 md:mt-0">
						<li className="min-h-42 overflow-hidden md:overflow-none">
							<NavLink to='/' className="active leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 15.634 15.634">
                  <path d="M4.5,13.186h6.948V4.5H4.5Zm0,6.948h6.948V14.923H4.5Zm8.686,0h6.948V11.448H13.186Zm0-15.634V9.711h6.948V4.5Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
                </svg>
								<span>Dashboard</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 15.317 15.317">
                  <path d="M4.532,6.063H3V16.785a1.536,1.536,0,0,0,1.532,1.532H15.254V16.785H4.532ZM16.785,3H7.6A1.536,1.536,0,0,0,6.063,4.532v9.19A1.536,1.536,0,0,0,7.6,15.254h9.19a1.536,1.536,0,0,0,1.532-1.532V4.532A1.536,1.536,0,0,0,16.785,3Zm-.766,6.893H8.361V8.361h7.659Zm-3.063,3.063h-4.6V11.424h4.6Zm3.063-6.127H8.361V5.3h7.659Z" transform="translate(-3 -3)" fill="#fff"/>
                </svg>
								<span>Court Booking</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 16.837 15.634">
								  <g transform="translate(-2.249 -3.375)">
								    <path id="Path_2218" data-name="Path 2218" d="M24.113,7.523v5.3l-8,7.655a1.713,1.713,0,0,0,1.082.462,1.872,1.872,0,0,0,1.18-.462l7.163-6.753V8.914Z" transform="translate(-6.455 -1.931)" fill="#fff"/>
								    <path id="Path_2219" data-name="Path 2219" d="M15.478,3.375H9.465l-6.753,7.05a1.538,1.538,0,0,0-.462,1.067,1.644,1.644,0,0,0,.462,1.2l4.653,4.645a1.725,1.725,0,0,0,1.082.47,1.876,1.876,0,0,0,1.176-.47l7.058-6.746V4.578Zm-1.154,3.86a1.2,1.2,0,1,1,.8-.8A1.17,1.17,0,0,1,14.325,7.235Z" fill="#fff"/>
								  </g>
								</svg>
								<span>Booking User List</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
							  <svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 17.154 12.988">
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
							<NavLink  to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 15.147 16.012">
                  <path d="M9.018,0H.6A.6.6,0,0,0,0,.6V1a.6.6,0,0,0,.6.6,4.971,4.971,0,0,0,3.027,4.81A4.971,4.971,0,0,0,.6,11.223a.6.6,0,0,0-.6.6v.4a.6.6,0,0,0,.6.6H9.018a.6.6,0,0,0,.6-.6v-.4a.6.6,0,0,0-.6-.6,4.971,4.971,0,0,0-3.027-4.81A4.971,4.971,0,0,0,9.018,1.6a.6.6,0,0,0,.6-.6V.6A.6.6,0,0,0,9.018,0Zm-1.6,11.223H2.2c0-1.94,1.157-3.607,2.605-3.607S7.415,9.282,7.415,11.223Z" transform="translate(0 5.379) rotate(-34)" fill="#fff"/>
                </svg>
								<span>Hours of availability</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 16.837 16.841">
                  <g transform="translate(-1184.523 -81.41)">
                    <path id="Path_2220" data-name="Path 2220" d="M1200.554,91.433a4.324,4.324,0,0,0-5.416.311,4.226,4.226,0,0,0-1.374,2.729,4.367,4.367,0,0,0,.8,2.977c-.161.021-.276.045-.391.049a28.68,28.68,0,0,1-5.564-.249,4.459,4.459,0,0,1-3.835-3.983,28.363,28.363,0,0,1,.061-7.967,4.5,4.5,0,0,1,3.526-3.564,27.639,27.639,0,0,1,8.352-.012,4.5,4.5,0,0,1,3.634,3.66,30.412,30.412,0,0,1,.267,5.529c0,.118-.014.236-.026.354A1.647,1.647,0,0,1,1200.554,91.433Zm-7.993-4.256h3.729c.106,0,.214,0,.319-.006a.93.93,0,0,0-.007-1.858c-.082-.008-.166-.006-.248-.006q-3.764,0-7.528,0a1.979,1.979,0,0,0-.492.051.922.922,0,0,0,.007,1.769,2.061,2.061,0,0,0,.492.048C1190.075,87.179,1191.318,87.177,1192.561,87.177Zm-1.607,3.885c.745,0,1.491,0,2.236,0a.935.935,0,0,0,1.02-.938.951.951,0,0,0-1.014-.918q-2.254-.008-4.507,0a.928.928,0,0,0-1.012.947.917.917,0,0,0,1.006.909C1189.44,91.066,1190.2,91.062,1190.954,91.062Z" transform="translate(0 0)" fill="#fff"/>
                    <path id="Path_2221" data-name="Path 2221" d="M1333.732,227.341a3.352,3.352,0,0,1-6.7-.054,3.352,3.352,0,1,1,6.7.054Zm-2.727.841c0-.283.009-.567,0-.85a.6.6,0,0,0-.6-.616.581.581,0,0,0-.631.578c-.021.577-.022,1.157,0,1.734a.579.579,0,0,0,.643.563A.6.6,0,0,0,1331,229C1331.016,228.726,1331.005,228.454,1331.006,228.182Zm0-2.52c0-.511-.116-.632-.613-.635-.517,0-.651.13-.647.644,0,.49.14.621.638.619S1331.005,226.165,1331.005,225.662Z" transform="translate(-132.372 -132.412)" fill="#fff"/>
                  </g>
                </svg>
								<span>Conditions</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 16.837 15.634">
	                  <g transform="translate(-2.249 -3.375)">
	                    <path id="Path_2218" data-name="Path 2218" d="M24.113,7.523v5.3l-8,7.655a1.713,1.713,0,0,0,1.082.462,1.872,1.872,0,0,0,1.18-.462l7.163-6.753V8.914Z" transform="translate(-6.455 -1.931)" fill="#fff"/>
	                    <path id="Path_2219" data-name="Path 2219" d="M15.478,3.375H9.465l-6.753,7.05a1.538,1.538,0,0,0-.462,1.067,1.644,1.644,0,0,0,.462,1.2l4.653,4.645a1.725,1.725,0,0,0,1.082.47,1.876,1.876,0,0,0,1.176-.47l7.058-6.746V4.578Zm-1.154,3.86a1.2,1.2,0,1,1,.8-.8A1.17,1.17,0,0,1,14.325,7.235Z" fill="#fff"/>
	                  </g>
	                </svg>
								<span>Pricing</span>
							</NavLink>
						</li>
						<li className="min-h-42">
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
								<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 16.837 18.103">
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
							<NavLink to='/' className="leading-4 whitespace-nowrap overflow-hidden px-4 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
							 	<svg opacity="0.5" className="mx-3" width="18" height="18" viewBox="0 0 15.313 15.317">
                  <path d="M18.549,12.157a1.971,1.971,0,0,1,1.264-1.838,7.811,7.811,0,0,0-.945-2.277,2,2,0,0,1-.8.171,1.966,1.966,0,0,1-1.8-2.768A7.787,7.787,0,0,0,13.995,4.5a1.969,1.969,0,0,1-3.677,0,7.811,7.811,0,0,0-2.277.945,1.966,1.966,0,0,1-1.8,2.768,1.932,1.932,0,0,1-.8-.171A7.983,7.983,0,0,0,4.5,10.322,1.97,1.97,0,0,1,4.5,14a7.811,7.811,0,0,0,.945,2.277,1.967,1.967,0,0,1,2.6,2.6,7.856,7.856,0,0,0,2.277.945,1.965,1.965,0,0,1,3.669,0,7.811,7.811,0,0,0,2.277-.945,1.969,1.969,0,0,1,2.6-2.6A7.856,7.856,0,0,0,19.809,14,1.98,1.98,0,0,1,18.549,12.157Zm-6.357,3.186a3.19,3.19,0,1,1,3.19-3.19A3.189,3.189,0,0,1,12.192,15.343Z" transform="translate(-4.5 -4.5)" fill="#fff"/>
                </svg>
								<span>Settings</span>
							</NavLink>
						</li>
					</ul>
				</nav>
    );
}