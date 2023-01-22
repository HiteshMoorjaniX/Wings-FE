import { React,useState } from "react"; 
import { NavLink,Link} from "react-router-dom";
import Logo from '../assets/wlogo.svg';
import LogoIco from '../assets/ico.svg';
// import CalendarIco from "./assets/calendarIco.svg"
// import SaveIco from "./assets/saveIco.svg"
// import UserIco from "./assets/userIco.svg"
// import UserImg from "./assets/userImg.png"
import Graph from '../assets/graph.png';
import '../App.css';
import WingsLogo from '../assets/wings-logo.svg';


export default function MyBookings() {
  const [navbar, setNavbar] = useState(false);
  const [ProfileDrop, setProfileDrop] = useState(false);
  const [showCancelModal, setCancelModal] = useState(false);
  const [showSuccessModal, setSuccessModal] = useState(false);
  const [showBookingModal, setBookingModal] = useState(false);

  const [currentVisibility, setCurrentVisibility] = useState('all')
  const changeVisibility = (newVisibility) => {
      setCurrentVisibility(newVisibility)
  }

  

  return(
    
    

      <div className="dash wrapper flex items-stretch w-full h-screen bg-light">
        <nav id="sidebar" className={`h-full relative max-w-182 lg:max-w-62 w-full z-10 ${navbar ? "block w-full Fullmenu" : "md:w-14 w-0 overflow-hidden  Iconmenu"}`}>
        {/* <nav className={`h-full  w-full z-10 ${navbar ? "md:w-14 w-0 Iconmenu overflow-hidden" : "md:w-14 w-0 overflow-hidden  Iconmenu"}`}> */}
          {/* <a href="#" className={`logo text-center flex py-4 hidden md:block ${navbar ? "px-5" : "px-3"}`} name="logo">
            <img src={Logo} className={`h-12 ${navbar ? "block" : "hidden"}`} />
            <img src={Logo} className={`h-12 ${navbar ? "hidden" : "block"}`} />
          </a> */}
          <a href="#" className="absolute z-10 left-52 top-3.5 rounded-full w-8 h-8 border-2 border-theme" onClick={() => setNavbar(false)}>
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20"  /><path d="M14 14L34 34" stroke="#ff6a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 34L34 14" stroke="#ff6a00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <ul className={`h-12 ${navbar ? "block" : "hidden"}`} className="sideNav b-5 text-white gap-y-2 bg-sec h-full fixed rounded-tr-3xl pt-4 flex flex-col gap-y-2">
          <li className="min-h-58">
              <div className="flex justify-center items-center">
              <NavLink to='/' className="h-12"><img src={WingsLogo} className={`w-12 ${navbar ? "block" : "hidden"}`} /></NavLink>
              <NavLink to='/' className="h-10"><img src={WingsLogo} className={`w-10 ${navbar ? "hidden" : "block"}`} /></NavLink>
              </div>
            </li>
            {/* <li className="min-h-18">
            </li> */}
            <li className="min-h-42">
              <NavLink to='/CourtRental' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
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
                <span>Court Rental</span>
              </NavLink>
            </li>
            
            <li className="min-h-42">
              <NavLink to='/DropIn' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
                <svg opacity="0.5" xmlns="http://www.w3.org/2000/svg" className="mx-2" width="18" height="18" viewBox="0 0 27.072 28.28">
                    <g  transform="translate(-686.031 -229.899)">
                    <path id="Path_5092" data-name="Path 5092" d="M720.024,250.547a1.211,1.211,0,0,0-.094.21q-.534,2.287-1.062,4.575c-.144.624-.28,1.249-.436,1.87a1.238,1.238,0,0,1-1.288.974,1.315,1.315,0,0,1-1.207-1.15,1.472,1.472,0,0,1,.041-.48q.711-3.135,1.431-6.27a1.408,1.408,0,0,0,.033-.411q-.27-3.567-.55-7.133c-.025-.323-.062-.646-.066-.969,0-.2-.071-.284-.272-.314-.4-.059-.8-.145-1.207-.217a.8.8,0,0,1-.67-.6c-.456-1.522-.913-3.043-1.352-4.569a1.722,1.722,0,0,1,.031-.54,1.249,1.249,0,0,0,.013-.391c-.1-.364-.23-.719-.339-1.081-.036-.121-.083-.177-.223-.17a1.831,1.831,0,0,1-1.825-1.138,2.059,2.059,0,0,1,.171-2.233,1.57,1.57,0,0,1,1.808-.517,2.169,2.169,0,0,1,1.174,2.977,2.628,2.628,0,0,1-.6.655c-.11.1-.161.155-.111.3.131.377.251.758.373,1.134a.926.926,0,0,1,1.215.773c.358,1.228.715,2.458,1.083,3.683a.335.335,0,0,0,.208.2c.444.1.892.18,1.341.256a.47.47,0,0,0,.265-.041,4.549,4.549,0,0,1,4.108.053,12.324,12.324,0,0,1,1.358.79.992.992,0,0,1,.312.391c.531,1.062,1.057,2.128,1.565,3.2a.881.881,0,0,1,.058.536q-.421,1.8-.881,3.6a.861.861,0,0,1-1.033.636.878.878,0,0,1-.582-1.068c.254-1.017.518-2.032.775-3.049a.338.338,0,0,0,.016-.2,8,8,0,0,0-.541-1.029c-.014.128-.03.255-.04.383-.147,1.939-.3,3.877-.43,5.818a9.647,9.647,0,0,0,.082,1.361c.046.584.092,1.169.154,1.753a1.887,1.887,0,0,0,.143.529c.389.915.791,1.826,1.183,2.74a1.226,1.226,0,0,1-.191,1.326,1.178,1.178,0,0,1-1.2.435,1.217,1.217,0,0,1-.94-.745c-.46-1.061-.94-2.116-1.342-3.2a5.561,5.561,0,0,1-.191-1.39c-.071-.737-.125-1.475-.186-2.212Z" transform="translate(-12.223)" fill="#fff"/>
                    <path id="Path_5093" data-name="Path 5093" d="M691.278,240.432c.187-.094.352-.175.514-.259a5.263,5.263,0,0,1,5.143.033,1.719,1.719,0,0,1,.452.352c.39.427.768.866,1.142,1.308a.256.256,0,0,0,.334.094c.433-.161.872-.308,1.312-.451a.815.815,0,0,1,.914.214.832.832,0,0,1,.221.854.774.774,0,0,1-.507.5c-.707.245-1.414.488-2.125.72a.8.8,0,0,1-.892-.285c-.22-.245-.43-.5-.678-.788-.009.114-.014.179-.019.243a13.257,13.257,0,0,0,.43,3.709c.29,1.452.568,2.907.857,4.359a.2.2,0,0,1-.12.257,7.727,7.727,0,0,1-7.721.053.313.313,0,0,1-.2-.4q.614-3.087,1.213-6.176a3.538,3.538,0,0,0,.065-.619c.009-.586,0-1.173,0-1.76,0-.082-.007-.164-.013-.283-.143.07-.251.124-.359.175a.874.874,0,0,1-1.333-.588c-.41-1.39-.812-2.783-1.223-4.173a.968.968,0,0,1,.17-.915.337.337,0,0,0,.053-.262c-.2-.647-.422-1.29-.632-1.935a.177.177,0,0,0-.222-.139,1.991,1.991,0,0,1-2.017-2.219,1.774,1.774,0,0,1,1.333-1.674,1.61,1.61,0,0,1,1.3.241,2.252,2.252,0,0,1,.811,2.7,1.591,1.591,0,0,1-.664.751c-.112.064-.152.119-.106.254.219.634.423,1.273.643,1.907a.284.284,0,0,0,.173.171.882.882,0,0,1,.786.712c.292,1,.576,2,.863,3C691.214,240.22,691.243,240.314,691.278,240.432Z" transform="translate(0 -0.217)" fill="#fff"/>
                    <path id="Path_5094" data-name="Path 5094" d="M695.089,273.978a6.87,6.87,0,0,0,2.461.475c-.057.428-.15.891-.173,1.357a3.022,3.022,0,0,1-.676,1.707c-.473.628-.9,1.292-1.357,1.93a1.264,1.264,0,0,1-2.237-.427,1.307,1.307,0,0,1,.24-1.136c.434-.609.852-1.231,1.291-1.835a1.355,1.355,0,0,0,.25-.656C694.95,274.911,695.024,274.433,695.089,273.978Z" transform="translate(-3.48 -21.813)" fill="#fff"/>
                    <path id="Path_5095" data-name="Path 5095" d="M703.682,274.279a6.284,6.284,0,0,0,2.458-.581c.016.036.055.116.085.2q.755,2.062,1.507,4.124a1.311,1.311,0,0,1-.424,1.554,1.267,1.267,0,0,1-1.9-.536C704.823,277.451,704.252,275.855,703.682,274.279Z" transform="translate(-8.735 -21.675)" fill="#fff"/>
                    <path id="Path_5096" data-name="Path 5096" d="M729.154,241.548a2.116,2.116,0,1,1-2.091-2.149A2.12,2.12,0,0,1,729.154,241.548Z" transform="translate(-19.246 -4.701)" fill="#fff"/>
                    <path id="Path_5097" data-name="Path 5097" d="M702.547,241.531a2.129,2.129,0,0,1-2.13,2.111,2.155,2.155,0,0,1-2.1-2.127,2.115,2.115,0,1,1,4.23.016Z" transform="translate(-6.08 -4.701)" fill="#fff"/>
                    <path id="Path_5098" data-name="Path 5098" d="M699.355,230.513l1.095,2.368c-.373.055-.712.108-1.052.155-.389.054-.778.1-1.168.154a.584.584,0,0,1-.666-.337.62.62,0,0,1,.125-.818q.728-.676,1.461-1.348C699.2,230.636,699.264,230.589,699.355,230.513Z" transform="translate(-5.659 -0.304)" fill="#fff"/>
                    </g>
                </svg>
                <span>Drop In</span>
              </NavLink>
            </li>
            <li className="min-h-42">
              <NavLink to='/MembershipPlans' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
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

                <span>Membership Plans</span>
              </NavLink>
            </li>
            <li className="min-h-42">
                <NavLink to='/MyBookings' className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
                <svg opacity="0.5" className="mx-2" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.392 18.386">
                <path id="Path_13183" data-name="Path 13183" d="M94.552-1190.658h15.6a.16.16,0,0,1,.16.16v5.555a.16.16,0,0,1-.186.158,4.218,4.218,0,0,0-1.753.067.161.161,0,0,1-.2-.154v-1.328a.16.16,0,0,0-.16-.16H106.53a.16.16,0,0,0-.16.16v1.485a.16.16,0,0,0,.16.16h.717a.16.16,0,0,1,.09.292,3.984,3.984,0,0,0-1.7,4.721.16.16,0,0,1-.152.2h-9.8a1.236,1.236,0,0,1-1.29-1.3q0-4.911,0-9.821v-.04A.16.16,0,0,1,94.552-1190.658Zm3.358.929h-1.5a.16.16,0,0,0-.16.16v1.475a.16.16,0,0,0,.16.16h1.5a.16.16,0,0,0,.16-.16v-1.475A.16.16,0,0,0,97.91-1189.729Zm3.522,1.639v-1.477a.16.16,0,0,0-.16-.16H99.783a.16.16,0,0,0-.16.16v1.477a.16.16,0,0,0,.16.16h1.489A.16.16,0,0,0,101.432-1188.09Zm-3.519,1.732h-1.5a.16.16,0,0,0-.16.16v1.467a.16.16,0,0,0,.16.16h1.5a.16.16,0,0,0,.16-.16v-1.467A.16.16,0,0,0,97.913-1186.359Zm3.521,1.635v-1.479a.16.16,0,0,0-.16-.16H99.788a.16.16,0,0,0-.16.16v1.479a.16.16,0,0,0,.16.16h1.485A.16.16,0,0,0,101.434-1184.723ZM97.909-1183H96.415a.16.16,0,0,0-.16.16v1.476a.16.16,0,0,0,.16.16h1.494a.16.16,0,0,0,.16-.16v-1.476A.16.16,0,0,0,97.909-1183Zm3.38,1.8a.16.16,0,0,0,.16-.16c0-.517,0-1.018-.006-1.519a.19.19,0,0,0-.129-.134c-.507-.009-1.015-.007-1.529-.006a.161.161,0,0,0-.16.16v1.5a.16.16,0,0,0,.16.16Zm1.864-6.737h1.479a.16.16,0,0,0,.16-.16v-1.481a.16.16,0,0,0-.16-.16h-1.479a.16.16,0,0,0-.16.16v1.481A.16.16,0,0,0,103.154-1187.931Zm4.848-1.8h-1.477a.16.16,0,0,0-.16.16v1.473a.16.16,0,0,0,.16.16H108a.16.16,0,0,0,.16-.16v-1.473A.16.16,0,0,0,108-1189.728Zm-4.846,5.155h1.478a.16.16,0,0,0,.16-.16v-1.471a.16.16,0,0,0-.16-.16h-1.478a.16.16,0,0,0-.16.16v1.471A.16.16,0,0,0,103.155-1184.573Zm-.156,1.729v1.487a.16.16,0,0,0,.16.16h1.473a.16.16,0,0,0,.16-.16v-1.487a.16.16,0,0,0-.16-.16h-1.473A.16.16,0,0,0,103-1182.844Z" transform="translate(-94.386 1195.883)" fill="#fff"/>
                <path id="Path_13184" data-name="Path 13184" d="M94.294-1299.109c0-.658-.031-1.3.009-1.935a1.213,1.213,0,0,1,1.247-1.124c.29-.006.581,0,.9,0,0-.3,0-.58,0-.855a.62.62,0,0,1,.6-.676.626.626,0,0,1,.609.672c0,.532,0,1.063,0,1.595a.718.718,0,0,1-.329.757.656.656,0,0,0,.94-.637c0-.216.009-.432,0-.647-.008-.158.041-.218.207-.213.362.011.724,0,1.086,0,.075,0,.15-.007.248-.012,0-.277,0-.537,0-.8,0-.433.247-.719.609-.721a.643.643,0,0,1,.614.717q0,.786,0,1.572a.719.719,0,0,1-.333.733.654.654,0,0,0,.939-.635c0-.275,0-.551,0-.849h1.846c0-.3,0-.572,0-.846a.634.634,0,0,1,.616-.691.631.631,0,0,1,.606.678c0,.531,0,1.063,0,1.595a.711.711,0,0,1-.34.752.675.675,0,0,0,.96-.676c0-.261,0-.523,0-.812h1.53c0-.31,0-.593,0-.875a.62.62,0,0,1,.6-.662.621.621,0,0,1,.616.663c0,.516,0,1.032,0,1.548s0,.5-.329.824c.591.142.953-.132.955-.723,0-.252,0-.5,0-.75a1.227,1.227,0,0,1,1.513,1.076c.052.641.011,1.29.011,1.952Z" transform="translate(-94.282 1303.699)" fill="#fff"/>
                <path id="Path_13185" data-name="Path 13185" d="M352.175-1050.856a3.381,3.381,0,0,1-.213,4.967,3.383,3.383,0,0,1-4.349-.008,3.381,3.381,0,0,1-.2-4.966A3.367,3.367,0,0,1,352.175-1050.856Zm-.882.436c-.394.394-.777.771-1.152,1.155a.5.5,0,0,1-.413.195c-.1-.006-.207.082-.314.12a.83.83,0,0,1-.308.085c-.4-.03-.808-.082-1.228-.127l-.066.6c.416.047.813.083,1.207.142a.576.576,0,0,1,.3.158.62.62,0,0,0,.624.2.511.511,0,0,0,.437-.476.753.753,0,0,1,.311-.577c.257-.255.512-.511.768-.767l.275-.275Z" transform="translate(-334.768 1063.486)" fill="#fff"/>
                </svg>
                <span>My Bookings</span>
                </NavLink>
            </li>
            <li className="min-h-42">
                <NavLink to='/MySchedules' className="active leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
                    <svg  opacity="0.5" className="mx-2" width="18" height="18" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"  fill="#fff" /></svg>
                    <span>My Schedules</span>
                </NavLink>
            </li>
            <li className="min-h-42">
            <a href="#" onClick={() => setBookingModal(true)} className="leading-4 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" opacity="0.5" className="mx-2" width="18" height="18"><rect  fill="none"/><path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM228.1,67.2a8.1,8.1,0,0,0-6.4-3.2H48.3L40.2,35.6A16.1,16.1,0,0,0,24.8,24H8A8,8,0,0,0,8,40H24.8l9.8,34.1v.2L61,166.6A24.1,24.1,0,0,0,84.1,184h95.8A24.1,24.1,0,0,0,203,166.6l26.4-92.4A8,8,0,0,0,228.1,67.2Z" fill="#fff" /></svg>
                    <span>Cart</span>
                </a>
            </li>
            <li className="min-h-42">
              <NavLink to='/' className="md:absolute leading-4 md:bottom-34 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" opacity="0.5" className="mx-2" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="min-h-42">
            <NavLink to='/Profile' className="md:absolute leading-4 md:bottom-22 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
              <svg opacity="0.5" className="mx-2" width="14.883" height="17.857" viewBox="0 0 14.883 17.857">
                  <g transform="translate(-28.558 -10.572)">
                      <path d="M1491.35,264.453c-1.453,0-2.905.008-4.358,0a3.057,3.057,0,0,1-2.295-.923,2.8,2.8,0,0,1-.772-1.884,10.164,10.164,0,0,1,.436-3.531,4.162,4.162,0,0,1,1.6-2.35,3.206,3.206,0,0,1,1.892-.529.8.8,0,0,1,.357.105c.3.174.6.365.895.551a4.07,4.07,0,0,0,2.51.688,4.328,4.328,0,0,0,2.145-.787c.116-.079.245-.141.352-.23a1.63,1.63,0,0,1,1.472-.273,3.338,3.338,0,0,1,2.37,1.873,8.645,8.645,0,0,1,.833,3.785,4.149,4.149,0,0,1-.162,1.559,2.753,2.753,0,0,1-2.421,1.9,14.857,14.857,0,0,1-1.7.049C1493.455,264.458,1492.4,264.454,1491.35,264.453Z" transform="translate(-1455.358 -236.027)" fill="#fff"/>
                      <path d="M1522.654,165.908a4.3,4.3,0,1,1,4.307-4.277A4.273,4.273,0,0,1,1522.654,165.908Z" transform="translate(-1486.775 -146.738)" fill="#fff"/>
                  </g>
              </svg>
              <span>Profile</span>
            </NavLink>
          </li>
          <li className="min-h-42">
            <NavLink to='/' className="md:absolute leading-4 md:bottom-9 whitespace-nowrap overflow-hidden px-3 py-3 flex items-center w-full rounded-tr-full rounded-br-full hover:bg-theme focus:bg-theme">
              <svg opacity="0.5" className="mx-2" width="18" height="18" viewBox="0 0 16.79 16.767">
                  <path d="M1973.717-55.165a1.86,1.86,0,0,1,.783.651,1.6,1.6,0,0,1,.215.889q0,5.034,0,10.069c0,.271,0,.271.262.271.574,0,1.148,0,1.721,0a.716.716,0,0,0,.812-.814c0-.87,0-1.741,0-2.611a.7.7,0,0,1,.777-.762.684.684,0,0,1,.6.546.75.75,0,0,1,.018.137c0,1.009.024,2.019-.024,3.025a2.048,2.048,0,0,1-2.021,1.876c-.64.006-1.279,0-1.919,0h-.228c0,.226,0,.44,0,.654a1.362,1.362,0,0,1-1.2,1.417,1.678,1.678,0,0,1-.734-.078c-1.035-.328-2.062-.68-3.092-1.023-.312-.1-.623-.21-.936-.311a1.417,1.417,0,0,1-1.03-1.407c0-4.147.006-8.295-.006-12.442a1.458,1.458,0,0,1,1.489-1.49c2.512.02,5.025,0,7.538,0a2.079,2.079,0,0,1,2.159,2.056c.026.7.011,1.411,0,2.116a.7.7,0,0,1-.472.684.659.659,0,0,1-.784-.261,1.053,1.053,0,0,1-.135-.5c-.015-.633,0-1.266-.007-1.9a.709.709,0,0,0-.789-.8c-.963,0-1.926,0-2.889,0C1973.793-55.17,1973.755-55.166,1973.717-55.165Z" transform="translate(-1967.717 56.569)" fill="#fff"/>
                  <path d="M2201.133,36.021h-.819c-.646,0-1.292,0-1.938,0a.7.7,0,1,1,.018-1.4h2.74v-.214c0-.606,0-1.213,0-1.819a.7.7,0,0,1,1.23-.522q1.358,1.354,2.712,2.712a.7.7,0,0,1,0,1.078q-1.348,1.351-2.7,2.7a.708.708,0,0,1-1.25-.516C2201.134,37.377,2201.133,36.712,2201.133,36.021Z" transform="translate(-2188.542 -28.33)" fill="#fff"/>
              </svg>
              <span>Log Out</span>
            </NavLink>
          </li>
          {/* <li className="min-h-42 ">
              <div className="md:absolute md:bottom-0"></div>
          </li> */}
          </ul>
        </nav>

        <div id="content" className={`h-full relative w-full  ${navbar ? "Fullviews" : "Halfviews"}`}>
          <div className="p-4 ">
            <div className="container-fluid">
              <div className="bg-white flex flex-wrap items-center relative mb-3 lg:mb-2 shadow p-2">
                <div className="flex items-center"> 
                  <button className="py-2 rounded-md outline-none mr-2 text-bgdark hover:text-theme focus:text-theme md:hidden block" onClick={() => setNavbar(!navbar)} >
                      <svg width="27" height="19" viewBox="0 0 27 19">
                          <g transform="translate(-84 -23)">
                          <line id="Line_2" data-name="Line 2" x2="17" transform="translate(85.5 24.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
                          <line id="Line_3" data-name="Line 3" x2="24" transform="translate(85.5 32.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
                          <line id="Line_4" data-name="Line 4" x2="20" transform="translate(85.5 40.5)" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="3"/>
                          </g>
                      </svg>
                  </button>     
                  <div className="title-set">
                      <h3 className="text-sec">
                      <svg className="inline-flex md:mr-3 mr-1" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.392 18.386">
                        <path id="Path_13183" data-name="Path 13183" d="M94.552-1190.658h15.6a.16.16,0,0,1,.16.16v5.555a.16.16,0,0,1-.186.158,4.218,4.218,0,0,0-1.753.067.161.161,0,0,1-.2-.154v-1.328a.16.16,0,0,0-.16-.16H106.53a.16.16,0,0,0-.16.16v1.485a.16.16,0,0,0,.16.16h.717a.16.16,0,0,1,.09.292,3.984,3.984,0,0,0-1.7,4.721.16.16,0,0,1-.152.2h-9.8a1.236,1.236,0,0,1-1.29-1.3q0-4.911,0-9.821v-.04A.16.16,0,0,1,94.552-1190.658Zm3.358.929h-1.5a.16.16,0,0,0-.16.16v1.475a.16.16,0,0,0,.16.16h1.5a.16.16,0,0,0,.16-.16v-1.475A.16.16,0,0,0,97.91-1189.729Zm3.522,1.639v-1.477a.16.16,0,0,0-.16-.16H99.783a.16.16,0,0,0-.16.16v1.477a.16.16,0,0,0,.16.16h1.489A.16.16,0,0,0,101.432-1188.09Zm-3.519,1.732h-1.5a.16.16,0,0,0-.16.16v1.467a.16.16,0,0,0,.16.16h1.5a.16.16,0,0,0,.16-.16v-1.467A.16.16,0,0,0,97.913-1186.359Zm3.521,1.635v-1.479a.16.16,0,0,0-.16-.16H99.788a.16.16,0,0,0-.16.16v1.479a.16.16,0,0,0,.16.16h1.485A.16.16,0,0,0,101.434-1184.723ZM97.909-1183H96.415a.16.16,0,0,0-.16.16v1.476a.16.16,0,0,0,.16.16h1.494a.16.16,0,0,0,.16-.16v-1.476A.16.16,0,0,0,97.909-1183Zm3.38,1.8a.16.16,0,0,0,.16-.16c0-.517,0-1.018-.006-1.519a.19.19,0,0,0-.129-.134c-.507-.009-1.015-.007-1.529-.006a.161.161,0,0,0-.16.16v1.5a.16.16,0,0,0,.16.16Zm1.864-6.737h1.479a.16.16,0,0,0,.16-.16v-1.481a.16.16,0,0,0-.16-.16h-1.479a.16.16,0,0,0-.16.16v1.481A.16.16,0,0,0,103.154-1187.931Zm4.848-1.8h-1.477a.16.16,0,0,0-.16.16v1.473a.16.16,0,0,0,.16.16H108a.16.16,0,0,0,.16-.16v-1.473A.16.16,0,0,0,108-1189.728Zm-4.846,5.155h1.478a.16.16,0,0,0,.16-.16v-1.471a.16.16,0,0,0-.16-.16h-1.478a.16.16,0,0,0-.16.16v1.471A.16.16,0,0,0,103.155-1184.573Zm-.156,1.729v1.487a.16.16,0,0,0,.16.16h1.473a.16.16,0,0,0,.16-.16v-1.487a.16.16,0,0,0-.16-.16h-1.473A.16.16,0,0,0,103-1182.844Z" transform="translate(-94.386 1195.883)" fill="#ff6a00"/>
                        <path id="Path_13184" data-name="Path 13184" d="M94.294-1299.109c0-.658-.031-1.3.009-1.935a1.213,1.213,0,0,1,1.247-1.124c.29-.006.581,0,.9,0,0-.3,0-.58,0-.855a.62.62,0,0,1,.6-.676.626.626,0,0,1,.609.672c0,.532,0,1.063,0,1.595a.718.718,0,0,1-.329.757.656.656,0,0,0,.94-.637c0-.216.009-.432,0-.647-.008-.158.041-.218.207-.213.362.011.724,0,1.086,0,.075,0,.15-.007.248-.012,0-.277,0-.537,0-.8,0-.433.247-.719.609-.721a.643.643,0,0,1,.614.717q0,.786,0,1.572a.719.719,0,0,1-.333.733.654.654,0,0,0,.939-.635c0-.275,0-.551,0-.849h1.846c0-.3,0-.572,0-.846a.634.634,0,0,1,.616-.691.631.631,0,0,1,.606.678c0,.531,0,1.063,0,1.595a.711.711,0,0,1-.34.752.675.675,0,0,0,.96-.676c0-.261,0-.523,0-.812h1.53c0-.31,0-.593,0-.875a.62.62,0,0,1,.6-.662.621.621,0,0,1,.616.663c0,.516,0,1.032,0,1.548s0,.5-.329.824c.591.142.953-.132.955-.723,0-.252,0-.5,0-.75a1.227,1.227,0,0,1,1.513,1.076c.052.641.011,1.29.011,1.952Z" transform="translate(-94.282 1303.699)" fill="#ff6a00"/>
                        <path id="Path_13185" data-name="Path 13185" d="M352.175-1050.856a3.381,3.381,0,0,1-.213,4.967,3.383,3.383,0,0,1-4.349-.008,3.381,3.381,0,0,1-.2-4.966A3.367,3.367,0,0,1,352.175-1050.856Zm-.882.436c-.394.394-.777.771-1.152,1.155a.5.5,0,0,1-.413.195c-.1-.006-.207.082-.314.12a.83.83,0,0,1-.308.085c-.4-.03-.808-.082-1.228-.127l-.066.6c.416.047.813.083,1.207.142a.576.576,0,0,1,.3.158.62.62,0,0,0,.624.2.511.511,0,0,0,.437-.476.753.753,0,0,1,.311-.577c.257-.255.512-.511.768-.767l.275-.275Z" transform="translate(-334.768 1063.486)" fill="#ff6a00"/>
                      </svg>
                  <span className="font-bold inline-flex md:text-lg text-base">My Schedules</span></h3>
                  </div>
                </div>        
              </div>
            </div>

            <div className="flex flex-wrap gap-y-4 mb-4 py-2">
              <div className="w-full">
                <div className="card-block bg-white border-2 border-white rounded hover:shadow-md focus:shadow-md position-relative mb-3">
                  <div className="p-2">                  
                    <div className="w-full space-y-2">
                        <details className="rounded-lg" open>
                            <summary className="font-semibold md:text-lg text-base">
                                Upcoming Events
                            </summary>
                            <div className="md:overflow-auto overflow-x-scroll">
                                <table className="table-auto w-full rounded-lg border-collapse md:text-base text-sm p-4 mt-4 mb-8">
                                <thead>
                                    <tr className='text-center bg-neutral-200 p-8'>
                                        <th className='py-3 px-2 mb-4'>Name</th>
                                        <th>Days</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Active</td>
                                        <td>
                                          {/* <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> */}
                                          <a href="#" className="bg-red-200 text-red-600 rounded px-2 py-1" onClick={() => setCancelModal(true)}>
                                            <svg  className="inline-flex " xmlns="http://www.w3.org/2000/svg"  height="18.05" viewBox="0 0 18.049 18.05">
                                                <g id="cross-circle" transform="translate(0.75 0.75)">
                                                  <path id="Path_13181" data-name="Path 13181" d="M12.7,7.883a.6.6,0,0,0-.851,0L10.289,9.439,8.734,7.883a.6.6,0,1,0-.851.851l1.556,1.555L7.883,11.845a.6.6,0,1,0,.851.851l1.555-1.556L11.845,12.7a.6.6,0,1,0,.851-.851L11.14,10.289,12.7,8.734A.6.6,0,0,0,12.7,7.883Z" transform="translate(-2.015 -2.015)" fill="red"/>
                                                  <path id="Path_13182" data-name="Path 13182" d="M8.825,0A8.825,8.825,0,1,0,17.65,8.825,8.825,8.825,0,0,0,8.825,0Zm0,16.179a7.354,7.354,0,1,1,7.354-7.354A7.354,7.354,0,0,1,8.825,16.179Z" transform="translate(-0.55 -0.55)" fill="red" stroke="#ffe8e8" stroke-width="0.4"/>
                                                </g>
                                              </svg> 
                                          </a>
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Cancel</td>
                                        <td>
                                          {/* <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> */}
                                          <a href="#" className="bg-red-200 text-red-600 rounded px-2 py-1" onClick={() => setCancelModal(true)}>
                                            <svg  className="inline-flex " xmlns="http://www.w3.org/2000/svg"  height="18.05" viewBox="0 0 18.049 18.05">
                                                <g id="cross-circle" transform="translate(0.75 0.75)">
                                                  <path id="Path_13181" data-name="Path 13181" d="M12.7,7.883a.6.6,0,0,0-.851,0L10.289,9.439,8.734,7.883a.6.6,0,1,0-.851.851l1.556,1.555L7.883,11.845a.6.6,0,1,0,.851.851l1.555-1.556L11.845,12.7a.6.6,0,1,0,.851-.851L11.14,10.289,12.7,8.734A.6.6,0,0,0,12.7,7.883Z" transform="translate(-2.015 -2.015)" fill="red"/>
                                                  <path id="Path_13182" data-name="Path 13182" d="M8.825,0A8.825,8.825,0,1,0,17.65,8.825,8.825,8.825,0,0,0,8.825,0Zm0,16.179a7.354,7.354,0,1,1,7.354-7.354A7.354,7.354,0,0,1,8.825,16.179Z" transform="translate(-0.55 -0.55)" fill="red" stroke="#ffe8e8" stroke-width="0.4"/>
                                                </g>
                                            </svg> 
                                          </a>
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Active</td>
                                        <td>
                                          {/* <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> */}
                                          <a href="#" className="bg-red-200 text-red-600 rounded px-2 py-1" onClick={() => setCancelModal(true)}>
                                          <svg  className="inline-flex " xmlns="http://www.w3.org/2000/svg"  height="18.05" viewBox="0 0 18.049 18.05">
                                              <g id="cross-circle" transform="translate(0.75 0.75)">
                                                <path id="Path_13181" data-name="Path 13181" d="M12.7,7.883a.6.6,0,0,0-.851,0L10.289,9.439,8.734,7.883a.6.6,0,1,0-.851.851l1.556,1.555L7.883,11.845a.6.6,0,1,0,.851.851l1.555-1.556L11.845,12.7a.6.6,0,1,0,.851-.851L11.14,10.289,12.7,8.734A.6.6,0,0,0,12.7,7.883Z" transform="translate(-2.015 -2.015)" fill="red"/>
                                                <path id="Path_13182" data-name="Path 13182" d="M8.825,0A8.825,8.825,0,1,0,17.65,8.825,8.825,8.825,0,0,0,8.825,0Zm0,16.179a7.354,7.354,0,1,1,7.354-7.354A7.354,7.354,0,0,1,8.825,16.179Z" transform="translate(-0.55 -0.55)" fill="red" stroke="#ffe8e8" stroke-width="0.4"/>
                                              </g>
                                            </svg> 
                                          </a>
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Cancel</td>
                                        <td>
                                          {/* <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> */}
                                          <a href="#" className="bg-red-200 text-red-600 rounded px-2 py-1" onClick={() => setCancelModal(true)}>
                                          <svg  className="inline-flex " xmlns="http://www.w3.org/2000/svg"  height="18.05" viewBox="0 0 18.049 18.05">
                                              <g id="cross-circle" transform="translate(0.75 0.75)">
                                                <path id="Path_13181" data-name="Path 13181" d="M12.7,7.883a.6.6,0,0,0-.851,0L10.289,9.439,8.734,7.883a.6.6,0,1,0-.851.851l1.556,1.555L7.883,11.845a.6.6,0,1,0,.851.851l1.555-1.556L11.845,12.7a.6.6,0,1,0,.851-.851L11.14,10.289,12.7,8.734A.6.6,0,0,0,12.7,7.883Z" transform="translate(-2.015 -2.015)" fill="red"/>
                                                <path id="Path_13182" data-name="Path 13182" d="M8.825,0A8.825,8.825,0,1,0,17.65,8.825,8.825,8.825,0,0,0,8.825,0Zm0,16.179a7.354,7.354,0,1,1,7.354-7.354A7.354,7.354,0,0,1,8.825,16.179Z" transform="translate(-0.55 -0.55)" fill="red" stroke="#ffe8e8" stroke-width="0.4"/>
                                              </g>
                                            </svg> 
                                          </a>
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </details>                                                                      
                    </div>
                  </div>
                </div>
                <div className="card-block bg-white border-2 border-white rounded hover:shadow-md focus:shadow-md position-relative mb-3">
                  <div className="p-2">                  
                    <div className="w-full space-y-2">
                    <details className="rounded-lg">
                            <summary className="font-semibold md:text-lg text-base">
                                Past Events
                            </summary>
                            <div className="md:overflow-auto overflow-x-scroll">
                                <table className="table-auto w-full rounded-lg border-collapse md:text-base text-sm p-4 mt-4 mb-8">
                                <thead>
                                    <tr className='text-center bg-neutral-200 p-8'>
                                        <th className='py-3 px-2 mb-4'>Name</th>
                                        <th>Days</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Active</td>
                                        <td>
                                          <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a>                                          
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Cancel</td>
                                        <td>
                                          <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> 
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Active</td>
                                        <td>
                                          <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> 
                                        </td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td className='py-5 px-2'>Drop-In</td>
                                        <td>23/01/2023</td>
                                        <td>07:30 AM To 09:00 AM</td>
                                        <td>Cancel</td>
                                        <td>
                                          <a href="#" className="bg-gray-200 text-gray-600 rounded px-2 py-1 mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="inline-flex " viewBox="0 0 16 16"> <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/> <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/> </svg>
                                          </a> 
                                        </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </details>  
                    </div>
                  </div>
                </div>
              </div>             						
            </div>

            {showCancelModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-full my-6 mx-auto max-w-md">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg"  width="84.214" height="84.214" viewBox="0 0 84.214 84.214">
                      <g id="cross-circle" transform="translate(0.75 0.75)">
                        <path id="Path_13181" data-name="Path 13181" d="M31.4,8.544a2.857,2.857,0,0,0-4.039,0L19.97,15.931,12.583,8.544a2.856,2.856,0,1,0-4.039,4.039l7.387,7.387L8.544,27.357A2.856,2.856,0,1,0,12.583,31.4l7.387-7.387L27.357,31.4A2.856,2.856,0,1,0,31.4,27.357L24.009,19.97,31.4,12.583A2.857,2.857,0,0,0,31.4,8.544Z" transform="translate(21.387 21.387)" fill="red"/>
                        <path id="Path_13182" data-name="Path 13182" d="M41.907,0A41.907,41.907,0,1,0,83.814,41.907,41.907,41.907,0,0,0,41.907,0Zm0,76.83A34.923,34.923,0,1,1,76.83,41.907,34.923,34.923,0,0,1,41.907,76.83Z" transform="translate(-0.55 -0.55)" fill="red" stroke="#ffe8e8" stroke-width="0.4"/>
                      </g>
                    </svg>
                    </p>
                    <p className="text-2xl font-semibold text-center text-red-600 mt-4 mb-4">Are You Sure?</p>
                    <p className="mt-4 text-center">If You Paid Your Money Will Refund In A Next</p>
                    <p className="mb-4 text-center">5 Working Days</p>
                    <div className="flex items-center justify-center rounded-b">
                        <button
                            className="min-w-130 bg-theme text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setSuccessModal(true)}
                        >
                            Yes
                        </button>
                        <button
                            className="min-w-130 bg-gray-200 text-black rounded-lg font-bold px-6 py-3 text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setCancelModal(false)}
                        >
                            No
                        </button>                  
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
              ) : null}

            {showSuccessModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-full my-6 mx-auto max-w-md">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="81.179" height="80.95" viewBox="0 0 81.179 80.95">
                      <g id="Group_3595" data-name="Group 3595" transform="translate(1255.233 273.233)">
                        <path id="Path_5123" data-name="Path 5123" d="M-1214.61-192.283a40.588,40.588,0,0,1-40.623-40.5,40.591,40.591,0,0,1,40.556-40.451,40.588,40.588,0,0,1,40.623,40.5A40.591,40.591,0,0,1-1214.61-192.283Zm-.022-7.352a33.3,33.3,0,0,0,33.208-33.106,33.3,33.3,0,0,0-33.174-33.14,33.3,33.3,0,0,0-33.266,33.163A33.3,33.3,0,0,0-1214.632-199.635Z" transform="translate(0 0)" fill="#ff6a00"/>
                        <path id="Path_5124" data-name="Path 5124" d="M-1156.178-141.674c7.005-7.056,13.781-13.887,20.565-20.711a3.847,3.847,0,0,1,4.459-1.076,3.63,3.63,0,0,1,.987,6.013c-2.527,2.6-5.128,5.134-7.7,7.7q-7.626,7.6-15.254,15.205c-2.053,2.043-4,2.049-6.063.008q-5.735-5.686-11.446-11.4c-2.128-2.138-1.728-5.077.807-6.258a3.739,3.739,0,0,1,4.374,1.019q4.195,4.149,8.353,8.336A13.841,13.841,0,0,1-1156.178-141.674Z" transform="translate(-64.144 -84.343)" fill="#ff6a00"/>
                      </g>
                    </svg>
                    </p>
                    <p className="text-2xl font-semibold text-theme  text-center mt-4 ">Your Booking Has</p>
                    <p className="text-2xl font-semibold text-theme  text-center mb-4">Cancel Successfully </p>
                    <p className="mt-4 text-center">If You Paid Your Money Will Refund In A Next</p>
                    <p className="mb-4 text-center">5 Working Days</p>
                    <div className="flex items-center justify-center rounded-b">
                    <a 	href="/"		                  	
                          className="pl-1 pr-2 rounded w-40 h-12 border-2 border-theme font-medium inline-flex items-center justify-center shadow hover:bg-theme hover:text-white focus:bg-theme">
                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16.752" height="13.027" viewBox="0 0 16.752 13.027" className="">
                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M8.153,5.633,2.791,10.049v4.766a.465.465,0,0,0,.465.465l3.259-.008a.465.465,0,0,0,.463-.465V12.023a.465.465,0,0,1,.465-.465H9.3a.465.465,0,0,1,.465.465V14.8a.465.465,0,0,0,.465.467l3.258.009a.465.465,0,0,0,.465-.465V10.046L8.6,5.633A.355.355,0,0,0,8.153,5.633Zm8.469,3-2.431-2V2.6a.349.349,0,0,0-.349-.349H12.214a.349.349,0,0,0-.349.349V4.714l-2.6-2.142a1.4,1.4,0,0,0-1.774,0L.126,8.635a.349.349,0,0,0-.047.491l.742.9a.349.349,0,0,0,.492.047l6.84-5.634a.355.355,0,0,1,.445,0l6.841,5.634a.349.349,0,0,0,.491-.047l.742-.9a.349.349,0,0,0-.049-.492Z" transform="translate(0.001 -2.254)" fill="#ff6a00"/>
                          </svg>

                          <span className="truncate text-sm ml-2">Back To Home</span>
                          {/* <svg viewBox="0 0 9 6" width="9" height="6"><path d="m4.5 6l-4.5-6h9z" fill="#fff" /></svg> */}
                        </a>                 
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
              ) : null}

{showBookingModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-full my-6 mx-auto max-w-xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="modal-bg bg-cover flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-xl font-semibold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="inline-flex" viewBox="0 0 19.088 19.133">
                        <g  transform="translate(-1067.028 -352.984)">
                          <path id="Path_2254" data-name="Path 2254" d="M1070.632,354.2c0-.253-.007-.455,0-.657a.547.547,0,0,1,.56-.555.536.536,0,0,1,.536.54c.009.112,0,.225.006.339s.014.2.022.313h2.47c0-.213-.007-.423,0-.632a.547.547,0,1,1,1.093.007c.006.2,0,.4,0,.622h2.5c0-.2-.005-.412,0-.62a.547.547,0,1,1,1.093-.012c.006.1,0,.2,0,.305s0,.2,0,.324h2.5c0-.222-.01-.434,0-.645a.532.532,0,0,1,.533-.542.547.547,0,0,1,.561.553c.009.2,0,.4,0,.659.468,0,.918.027,1.363,0a2.124,2.124,0,0,1,2.243,2.23c-.03,4.488-.012,8.977-.012,13.465a2.066,2.066,0,0,1-2.239,2.231h-14.619a2.061,2.061,0,0,1-2.208-2.195c0-4.511.015-9.022-.01-13.533a2.111,2.111,0,0,1,2.205-2.2C1069.681,354.221,1070.133,354.2,1070.632,354.2Zm-2.466,4.722c-.007.136-.018.257-.018.378q0,5.258,0,10.517c0,.844.329,1.178,1.163,1.178h14.521c.833,0,1.163-.335,1.164-1.179q0-5.258,0-10.517c0-.121-.012-.241-.019-.377Zm.027-1.14h16.779c0-.561.028-1.113-.009-1.66a.779.779,0,0,0-.726-.773c-.565-.047-1.137-.012-1.728-.012,0,.11,0,.211,0,.311s0,.2,0,.306a.565.565,0,0,1-.56.56.542.542,0,0,1-.535-.544c-.013-.211,0-.423,0-.654h-2.5c0,.232.009.444,0,.656a.545.545,0,1,1-1.091-.018c-.007-.21,0-.421,0-.633h-2.5c0,.215,0,.406,0,.6a.55.55,0,1,1-1.095-.01c0-.2,0-.4,0-.592h-2.494c0,.218.007.419,0,.619a.55.55,0,0,1-.535.581.566.566,0,0,1-.563-.592c-.005-.2,0-.4,0-.621-.561,0-1.08-.026-1.6.008a.81.81,0,0,0-.826.678A16.228,16.228,0,0,0,1068.193,357.777Z" transform="translate(0)" fill="#fff"/>
                          <path id="Path_2255" data-name="Path 2255" d="M1074.921,367.407c0,.374.007.746,0,1.12-.011.446-.207.639-.648.642q-1.1.007-2.2,0c-.44,0-.638-.2-.641-.645q-.007-1.119,0-2.24c0-.442.2-.639.644-.642q1.1-.007,2.205,0c.44,0,.635.2.645.645C1074.928,366.661,1074.921,367.034,1074.921,367.407Zm-1.125-.6h-1.243v1.2h1.243Z" transform="translate(-1.686 -4.856)" fill="#fff"/>
                          <path id="Path_2256" data-name="Path 2256" d="M1091.419,367.406c0,.385.006.769,0,1.153a.548.548,0,0,1-.608.609q-1.137.011-2.273,0a.546.546,0,0,1-.611-.609q-.016-1.154,0-2.307c.006-.419.215-.606.645-.609q1.1-.007,2.205,0c.44,0,.636.2.643.643C1091.423,366.66,1091.419,367.032,1091.419,367.406Zm-2.366-.614V368h1.237v-1.209Z" transform="translate(-8.016 -4.856)" fill="#fff"/>
                          <path id="Path_2257" data-name="Path 2257" d="M1083.166,375.187c0,.385,0,.769,0,1.152,0,.412-.182.625-.581.633-.769.015-1.537.014-2.3,0-.4-.007-.587-.219-.589-.625q-.006-1.152,0-2.3a.523.523,0,0,1,.579-.589q1.153-.008,2.305,0a.524.524,0,0,1,.587.581C1083.171,374.418,1083.166,374.8,1083.166,375.187Zm-1.115.638v-1.24h-1.246v1.24Z" transform="translate(-4.858 -7.853)" fill="#fff"/>
                          <path id="Path_2258" data-name="Path 2258" d="M1071.424,375.172c0-.373-.005-.746,0-1.118a.541.541,0,0,1,.61-.6q1.136-.006,2.272,0a.54.54,0,0,1,.61.6q.017,1.152,0,2.3a.552.552,0,0,1-.613.612q-1.136.018-2.272,0c-.416-.007-.6-.22-.608-.648C1071.419,375.941,1071.424,375.557,1071.424,375.172Zm1.127-.595v1.241h1.241v-1.241Z" transform="translate(-1.686 -7.853)" fill="#fff"/>
                          <path id="Path_2259" data-name="Path 2259" d="M1089.67,373.452c.385,0,.769,0,1.153,0a.533.533,0,0,1,.594.582q.012,1.169,0,2.339a.541.541,0,0,1-.588.6q-1.153.021-2.305,0a.552.552,0,0,1-.6-.627q-.014-1.135,0-2.271c.005-.441.207-.62.661-.622C1088.947,373.45,1089.308,373.452,1089.67,373.452Zm-.618,1.119v1.24h1.238v-1.24Z" transform="translate(-8.016 -7.853)" fill="#fff"/>
                          <path id="Path_2260" data-name="Path 2260" d="M1080.916,367.723l1.2-1.2c.364-.364.671-.409.935-.137.234.241.184.6-.134.918q-.728.733-1.46,1.462c-.371.368-.634.362-1.007-.013-.231-.232-.467-.46-.692-.7a.575.575,0,0,1-.043-.817.562.562,0,0,1,.837.038A5.685,5.685,0,0,1,1080.916,367.723Z" transform="translate(-4.81 -5.076)" fill="#fff"/>
                        </g>
                      </svg>
                      <span className="inline-flex ml-2">BOOKING SUMMARY</span>
                      </h3>
                      <button
                        className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setBookingModal(false)}
                      >
                        ×
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">                      
                      <table className="table-auto w-full rounded-lg border-collapse p-4 mb-4">
                        <thead>
                            <tr className='text-center bg-neutral-200 p-8'>
                                <th className='py-3 px-2 mb-4'>Date</th>
                                <th>Timing</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center border-b-2">
                                <td className='py-2 px-2 w-10'><p className="text-base">MON</p><span className="text-xs text-gray-400">18 Nov</span></td>
                                <td>
                                    <span className="text-xs">08:00 AM - 09:00 AM</span>
                                </td>
                                <td>
                                    <span className="text-sm">$ 150.00</span>
                                </td>
                            </tr>
                            <tr className="text-center border-b-2">
                                <td className='py-2 px-2'><p>TUE</p><span className="text-xs text-gray-400">18 Nov</span></td>
                                <td>
                                    <span className="text-xs">08:00 AM - 09:00 AM</span>
                                </td>
                                <td>
                                    <span className="text-sm">$ 150.00</span>
                                </td>
                            </tr>
                            <tr className="text-center border-b-2">
                                <td className='py-2 px-2'><p>WED</p><span className="text-xs text-gray-400">18 Nov</span></td>
                                <td>
                                    <span className="text-xs">08:00 AM - 09:00 AM</span>
                                </td>
                                <td>
                                    <span className="text-sm">$ 150.00</span>
                                </td>
                            </tr>
                            <tr className="text-center border-b-2">
                                <td className='py-2 px-2'><p>THU</p><span className="text-xs text-gray-400">18 Nov</span></td>
                                <td>
                                    <span className="text-xs">08:00 AM - 09:00 AM</span>
                                </td>
                                <td>
                                    <span className="text-sm">$ 150.00</span>
                                </td>
                            </tr>
                            
                        </tbody>
                        <tfoot>
                            <tr className=' bg-neutral-200 p-8'>
                                <th className='text-left py-2 px-2 mb-4' colSpan={2}><p className="text-base">Total</p><span className="text-xs font-normal">(without any tax)</span></th>
                                
                                <th className="text-center"><p className="font-normal">CAD</p>$ 576.00</th>
                            </tr>
                        </tfoot>
                      </table>
                      <div><span className="inline-flex text-lg font-bold py-4">Internet Handling Fees</span></div>
                      <div className="flex justify-between">
                          <span className="text-gray-500">Convenience Fee</span>
                          <span className="text-lg">$ 1.08</span>
                      </div>
                      <div className="flex justify-between">
                          <span className="text-gray-500">Tax 5% 33AAC50VDR</span>
                          <span className="text-lg">$ 0.46</span>
                      </div>
                      <div className="border-b-2 border-theme py-2"></div>
                      <div className="flex justify-between items-center mt-3">
                          <span className="font-bold text-lg"><p>Payable Amount</p><span className="text-gray-500 text-sm font-normal">(inclusive all taxes)</span></span>
                          <span className="font-bold text-lg">$ 577.53</span>
                      </div>
                      <a 	href="/"		                  	
                          className="mt-4 pl-1 pr-2 rounded-lg w-full h-12 border-2 bg-theme text-lg text-white inline-flex items-center justify-center shadow hover:bg-white hover:text-theme hover:border-theme focus:bg-theme"> 
                          <span>Continue To Payment</span>                        
                      </a>  
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}

          </div>
          <div className="footer sm:w-full sm:fixed bottom-0  bg-sec text-white text-sm font-semibold py-2 text-center xl:block hidden">
              <span>© 2023 <a href="http://wingsbadmintonclub.ca" className="hover:text-theme focus:text-theme" target="blank">Wings Badminton Club</a>. All rights reserved.</span>
          </div>        
        </div>

          {/* <div className="footer md:w-full md:bottom-0 bg-sec text-white text-sm font-semibold py-2 text-center">
              <span>© 2022 <a href="http://wingsbadmintonclub.ca" className="hover:text-theme focus:text-theme" target="blank">Wings Badminton Club</a>. All rights reserved.</span>
          </div> */}

      </div>
  );
}