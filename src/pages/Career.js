import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import { useState } from "react";
import Upload from '../assets/upload.png';

function Career() {

    const [currentVisibility, setCurrentVisibility] = useState('all')
    const changeVisibility = (newVisibility) => {
        setCurrentVisibility(newVisibility)
    }

    const [showApplyJobModal, setApplyJobModal] = useState(false);

    const [showSuccessModal, setSuccessModal] = useState(false);

    return (
        <>
            <section className="title-bg text-white py-14">
                <div className='container mx-auto'>
                    <div className="flex md:text-3xl text-2xl justify-center font-bold">Career</div>
                </div>
            </section>
            <section className="career-bg py-10">
                <div className='container mx-auto'>
                    <div className='md:flex items-center justify-between px-3'>
                        <div>
                            <h2 className=" md:text-4xl text-xl text-theme font-semibold">Badminton Coach</h2>
                        </div>
                        <div>
                            <p className="text-lg">Date : 3rd Jan 2023</p>
                        </div>
                    </div>
                    <div className="flex px-3">
                        At Wings Badminton Club Inc.
                    </div>
                    <div className="flex mt-4 mb-3 px-3">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="14.889" height="18.469" viewBox="0 0 14.889 18.469">
                            <g id="Group_3609" data-name="Group 3609" transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 2.439)">
                                <path id="Path_5131" data-name="Path 5131" d="M3.442,6.974l.281-2.889a4.085,4.085,0,0,1,.4.592,8.514,8.514,0,0,1,1.185,5.547L5.886,8.64c.046.13.091.264.137.4h0A54.391,54.391,0,0,1,7.891,16.6a29.552,29.552,0,0,0-1.369-2.9,50.643,50.643,0,0,0-3.543-5.72C2.132,6.792,1.162,5.535.061,4.243c0,0,.713-1.2-.061-4.243C0,0,3.2,1.507,3.442,6.974Z" transform="translate(0)" fill="#ff6a00"/>
                                <path id="Path_5132" data-name="Path 5132" d="M1.977,6.428l.971-2.221a3.4,3.4,0,0,1,.164.574,7.111,7.111,0,0,1-.495,4.711l.87-1.108c0,.115,0,.233.005.353h0a45.448,45.448,0,0,1-.474,6.488,24.717,24.717,0,0,0-.335-2.66A42.294,42.294,0,0,0,1.349,7.108C.984,5.945.54,4.7,0,3.385,0,3.385.875,2.62,1.05,0,1.05,0,3.2,2.026,1.977,6.428Z" transform="translate(6.048 3.594)" fill="#222"/>
                            </g>
                        </svg>
                        <h4 className="text-lg font-semibold text-theme">About Job</h4>                            
                    </div>
                    <div className="mb-3 px-3">
                        Wings Badminton Club Inc. Is Currently Hiring 2 Permanent Full Time Badminton Coaches. The Badminton Coaches Will Be Coaching Individual Players Or Team Or Group Lessons. The Coach Will Also Assist In The Development Of Quality Badminton Programs Through Coaching, Program Development, Evaluation And Various Administrative Tasks. The Coaches Will Report To The Head Coach.
                    </div>
                    <div className="px-3">
                        <ul>
                            <li className="md:flex">
                                <span className="w-1/4">Terms Of Employment: </span>               
                                <span className="w-3/4">Permanent / Full Time</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Location: </span>               
                                <span className="w-3/4">Brampton, Ontario</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Hours Of Work: </span>               
                                <span className="w-3/4">35Hours Per Week</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Language: </span>               
                                <span className="w-3/4">English</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Benefits: </span>               
                                <span className="w-3/4">Eligible For Discretionary Bonuses And Increases In Salary. Eligible For Time Off For Coaches’ Exam, Attend                
                                Education Conferences For Development, And Staff Discounts.</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Salary: </span>               
                                <span className="w-3/4">$15.00/Hour</span>
                            </li>
                            <li className="md:flex">
                                <span className="w-1/4">Contact: </span>               
                                <span className="w-3/4">Application@Wingsbadmintonclub.Ca</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex mt-4 mb-3 px-3">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="14.889" height="18.469" viewBox="0 0 14.889 18.469">
                            <g id="Group_3609" data-name="Group 3609" transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 2.439)">
                                <path id="Path_5131" data-name="Path 5131" d="M3.442,6.974l.281-2.889a4.085,4.085,0,0,1,.4.592,8.514,8.514,0,0,1,1.185,5.547L5.886,8.64c.046.13.091.264.137.4h0A54.391,54.391,0,0,1,7.891,16.6a29.552,29.552,0,0,0-1.369-2.9,50.643,50.643,0,0,0-3.543-5.72C2.132,6.792,1.162,5.535.061,4.243c0,0,.713-1.2-.061-4.243C0,0,3.2,1.507,3.442,6.974Z" transform="translate(0)" fill="#ff6a00"/>
                                <path id="Path_5132" data-name="Path 5132" d="M1.977,6.428l.971-2.221a3.4,3.4,0,0,1,.164.574,7.111,7.111,0,0,1-.495,4.711l.87-1.108c0,.115,0,.233.005.353h0a45.448,45.448,0,0,1-.474,6.488,24.717,24.717,0,0,0-.335-2.66A42.294,42.294,0,0,0,1.349,7.108C.984,5.945.54,4.7,0,3.385,0,3.385.875,2.62,1.05,0,1.05,0,3.2,2.026,1.977,6.428Z" transform="translate(6.048 3.594)" fill="#222"/>
                            </g>
                        </svg>
                        <h4 className="text-lg font-semibold text-theme">You Will Be Working On</h4>                            
                    </div>
                    <div className="px-3">
                        <ul>
                            <li>Provide Badminton Coaching To Teams, Groups Or Individual Students</li>
                            <li>Create Lesson Plans For Private Lessons And Group Lessons</li>
                            <li>Prepare Students For Competition</li>
                            <li>Assist Students In The Planning Of Their Competitive Schedule</li>
                            <li>Provide Feedback To Students On Their Performance During Training, Quarterly Evaluations Or When Necessary</li>
                            <li>Meet With Students And/Or Parents For Progress Updates</li>
                            <li>Participate In Any Training, Information Sessions And Staff Meetings</li>
                            <li>Observe And Analyze Skills During Lessons And At Tournaments</li>
                            <li>Complete Administrative Duties As Required</li>
                        </ul>
                    </div>
                    <div className="flex mt-4 mb-3 px-3">
                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="14.889" height="18.469" viewBox="0 0 14.889 18.469">
                            <g id="Group_3609" data-name="Group 3609" transform="matrix(0.951, -0.309, 0.309, 0.951, 0, 2.439)">
                                <path id="Path_5131" data-name="Path 5131" d="M3.442,6.974l.281-2.889a4.085,4.085,0,0,1,.4.592,8.514,8.514,0,0,1,1.185,5.547L5.886,8.64c.046.13.091.264.137.4h0A54.391,54.391,0,0,1,7.891,16.6a29.552,29.552,0,0,0-1.369-2.9,50.643,50.643,0,0,0-3.543-5.72C2.132,6.792,1.162,5.535.061,4.243c0,0,.713-1.2-.061-4.243C0,0,3.2,1.507,3.442,6.974Z" transform="translate(0)" fill="#ff6a00"/>
                                <path id="Path_5132" data-name="Path 5132" d="M1.977,6.428l.971-2.221a3.4,3.4,0,0,1,.164.574,7.111,7.111,0,0,1-.495,4.711l.87-1.108c0,.115,0,.233.005.353h0a45.448,45.448,0,0,1-.474,6.488,24.717,24.717,0,0,0-.335-2.66A42.294,42.294,0,0,0,1.349,7.108C.984,5.945.54,4.7,0,3.385,0,3.385.875,2.62,1.05,0,1.05,0,3.2,2.026,1.977,6.428Z" transform="translate(6.048 3.594)" fill="#222"/>
                            </g>
                        </svg>
                        <h4 className="text-lg font-semibold text-theme">We Are Looking For</h4>                            
                    </div>
                    <div className="px-3">
                        <ul>
                            <li>2-3 Years Of Coaching Experience In The Sport Of Badminton</li>
                            <li>3-5 Years National And/Or International Competition Experience In Badminton</li>
                            <li>Secondary (High School) Graduate Certificate</li>
                            <li>Possess Interest And Passion In The Sport Of Badminton</li>
                            <li>Good Communication Skills</li>
                            <li>Sound Knowledge Of Rules, Skills And Strategies In Badminton</li>
                            <li>Can Work Independently And As A Group</li>
                            <li>High Integrity And Value Continuous Improvement</li>
                            <li>Punctual</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <a href="#" className="rounded-full bg-theme text-white drop-shadow-lg px-5 py-2 mt-5 mb-4" onClick={() => setApplyJobModal(true)}>Apply Now</a>
                    </div>
                </div>
            </section>

            {showApplyJobModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-2"
          >
            <div className="relative w-full my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="modal-bg bg-cover flex items-center justify-between p-5 bg-sec text-white border-b border-solid border-slate-200 rounded-t">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.781" height="25.293" viewBox="0 0 18.781 25.293">
                        <g id="Group_3589" data-name="Group 3589" transform="translate(804.466 165.516)">
                            <path id="Path_5115" data-name="Path 5115" d="M-799.88-162.833c0-.553.121-1.05.626-1.237a7.516,7.516,0,0,1,1.427-.239.819.819,0,0,0,.017-.128c.023-.784.22-.98.994-.98h3.47c.783,0,.981.19,1.007.966,0,.059.011.117.013.143a7.58,7.58,0,0,1,1.42.232c.507.183.637.675.637,1.243h.391c.935,0,1.87,0,2.805,0a1.162,1.162,0,0,1,1.287,1.278q0,9.984,0,19.968a1.143,1.143,0,0,1-1.291,1.261h-15.982a1.152,1.152,0,0,1-1.3-1.288q0-9.966,0-19.931a1.17,1.17,0,0,1,1.313-1.289C-802.007-162.834-800.963-162.833-799.88-162.833Zm.009.8c-1.142,0-2.224,0-3.307,0-.341,0-.393.208-.392.488q0,9.966,0,19.931c0,.429.063.494.494.494q7.991,0,15.982,0c.45,0,.509-.063.509-.517q0-9.929,0-19.858c0-.483-.054-.538-.524-.539q-1.421,0-2.842,0c-.1,0-.21.015-.33.024,0,.353,0,.672,0,.991-.007.378-.136.523-.507.523q-4.282.007-8.563,0c-.391,0-.515-.143-.52-.548C-799.874-161.356-799.87-161.673-799.87-162.031Zm.8.724h8c0-.6.02-1.176-.015-1.75a.5.5,0,0,0-.319-.359,5.143,5.143,0,0,0-.916-.017c-.008.1-.015.161-.016.221-.017.645-.05.677-.708.677H-797c-.776,0-.775,0-.815-.756a.7.7,0,0,0-.044-.147c-.281,0-.55,0-.82,0a.356.356,0,0,0-.4.385C-799.079-162.478-799.075-161.9-799.075-161.307Zm2.08-2.026h3.835v-1.261H-797Z" transform="translate(0 0)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5116" data-name="Path 5116" d="M-728.434-77.6a3.965,3.965,0,0,1-3.975-3.951,3.988,3.988,0,0,1,4-3.973,3.99,3.99,0,0,1,3.957,3.98A3.964,3.964,0,0,1-728.434-77.6Zm-1.379-3.5a1.866,1.866,0,0,1,.133-2.642,1.857,1.857,0,0,1,2.429-.061,1.875,1.875,0,0,1,.209,2.706l1.337,1.133a3.108,3.108,0,0,0-.642-4,3.188,3.188,0,0,0-4.345.164,3.071,3.071,0,0,0-.454,3.827Zm-.762,1.862a3.1,3.1,0,0,0,4.27.024,2.195,2.195,0,0,0-1.973-1.288A2.316,2.316,0,0,0-730.575-79.234Zm2.138-2.066a1.064,1.064,0,0,0,1.088-1.058,1.093,1.093,0,0,0-1.074-1.085,1.093,1.093,0,0,0-1.088,1.07A1.063,1.063,0,0,0-728.437-81.3Z" transform="translate(-66.644 -73.995)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5117" data-name="Path 5117" d="M-718.7,132.571h4.464c.122,0,.272-.031.361.027.128.083.289.232.292.356s-.146.286-.27.376c-.083.061-.237.032-.359.032h-8.965c-.1,0-.226.035-.289-.013-.142-.108-.35-.258-.349-.39s.209-.329.36-.369a3.122,3.122,0,0,1,.77-.022Z" transform="translate(-74.603 -275.974)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5118" data-name="Path 5118" d="M-718.894,46.665c-1.525,0-3.05,0-4.575,0-.29,0-.549-.055-.557-.384s.249-.409.539-.409q4.593,0,9.186,0c.288,0,.543.07.535.409s-.267.385-.554.383C-715.845,46.661-717.37,46.665-718.894,46.665Z" transform="translate(-74.408 -195.691)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5119" data-name="Path 5119" d="M-718.747,90.074h-4.461c-.123,0-.273.035-.362-.022-.129-.082-.293-.233-.294-.355s.158-.276.282-.369c.073-.054.214-.02.325-.02h9.033c.074,0,.147,0,.221,0,.254.008.424.164.377.391a.566.566,0,0,1-.369.354,4.539,4.539,0,0,1-.882.02Z" transform="translate(-74.558 -235.907)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5120" data-name="Path 5120" d="M-771.243,33.615l.968-1c.19-.2.4-.312.635-.079s.11.447-.081.638c-.382.382-.76.767-1.147,1.144-.278.271-.449.27-.725.01-.152-.143-.3-.292-.443-.442a.391.391,0,0,1-.049-.588c.2-.211.419-.157.608.04C-771.409,33.407-771.351,33.486-771.243,33.615Z" transform="translate(-29.793 -183.216)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5121" data-name="Path 5121" d="M-771.242,77.116l.979-1.007c.192-.2.406-.3.634-.075s.112.441-.081.634q-.587.582-1.169,1.17a.411.411,0,0,1-.667.009c-.154-.158-.308-.315-.466-.469a.378.378,0,0,1-.055-.581.385.385,0,0,1,.61.033A3.091,3.091,0,0,1-771.242,77.116Z" transform="translate(-29.808 -223.505)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                            <path id="Path_5122" data-name="Path 5122" d="M-771.193,120.527c.326-.342.63-.663.937-.981.194-.2.417-.291.638-.059s.1.423-.083.607q-.59.584-1.173,1.175a.438.438,0,0,1-.7,0c-.148-.148-.3-.292-.443-.443a.393.393,0,0,1-.049-.589c.2-.216.415-.158.607.04C-771.4,120.342-771.323,120.405-771.193,120.527Z" transform="translate(-29.806 -263.741)" fill="#fff" stroke="#fff" stroke-width="0.2"/>
                        </g>
                    </svg>
                    <h3 className="text-xl font-semibold ml-2">
                        Apply For This Job
                    </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white flex justify-center items-center text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setApplyJobModal(false)}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative md:p-6 p-2 flex-auto">
                <form action="">
                  <div className="grid gap-4 grid-cols-2">
                      <div>
                          {/* <label htmlFor="first_name" className="block mb-2 text-base font-semibold text-sec">Username / Email Id</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter first username" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              {/* <img src={User} /> */}
                            </span>
                          </div>
                      </div>

                      <div>
                          {/* <label htmlFor="password" className="block mb-2 text-base font-semibold text-sec">Password</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="Enter last password" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              {/* <img src={Password} /> */}
                            </span>
                          </div>
                      </div>

                      <div className="relative flex w-full items-stretch">
                            <select onChange={(event) => changeVisibility(event.target.value)} value={currentVisibility} className='inline-flex border-2 border-stone-200 rounded-l-lg px-2 py-2'>
                                <option value="all">(CA)</option>
                                <option value="sun">Sun</option>
                                <option value="mon">Mon</option>
                            </select>	
                            <input type="text" placeholder="(778) 881 - 1132" className="w-full inline-flex font-normal h-12 px-2 outline-0 bg-transparent text-sec rounded-r-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                        </div>

                      <div>
                          {/* <label htmlFor="password" className="block mb-2 text-base font-semibold text-sec">Password</label> */}
                          <div className="relative flex w-full flex-wrap items-stretch">
                            <input type="text" placeholder="eg. 2 years" className="font-normal h-12 w-full px-3 outline-0 bg-transparent text-sec rounded-lg border-2 border-stone-200 placeholder-black-800 hover:border-theme focus:border-theme"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
                              {/* <img src={Password} /> */}
                            </span>
                          </div>
                      </div>
                      
                      
                    </div>
                    <div className="mt-4">
                        <div className="relative flex items-center w-full ">
                            <input type="file" className="font-normal h-12 w-full px-3 py-1.5 outline-0 bg-transparent text-sec rounded-lg border-2 border-dashed"/>
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-white absolute bg-transparent rounded text-base items-center justify-center w-28 right-0 pr-3 py-3">
                              <img src={Upload} />
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center ">
                        <a href="#" className="flex items-center justify-center relative h-14 text-lg text-white rounded-lg bg-theme mt-3 px-5 py-2" onClick={() => setSuccessModal(true)}>Submit Application</a>
                      </div>
                  </form>
                </div>
                {/*footer*/}
                                
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
            ) : null}

            {showSuccessModal ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-2">
                    <div className="relative w-full my-6 mx-auto max-w-lg">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="relative md:p-6 p-2 flex-auto text-center">
                                <p className="flex justify-center mt-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="81.179" height="80.95" viewBox="0 0 81.179 80.95">
                                    <g id="Group_3595" data-name="Group 3595" transform="translate(1255.233 273.233)">
                                        <path id="Path_5123" data-name="Path 5123" d="M-1214.61-192.283a40.588,40.588,0,0,1-40.623-40.5,40.591,40.591,0,0,1,40.556-40.451,40.588,40.588,0,0,1,40.623,40.5A40.591,40.591,0,0,1-1214.61-192.283Zm-.022-7.352a33.3,33.3,0,0,0,33.208-33.106,33.3,33.3,0,0,0-33.174-33.14,33.3,33.3,0,0,0-33.266,33.163A33.3,33.3,0,0,0-1214.632-199.635Z" transform="translate(0 0)" fill="#ff6a00"/>
                                        <path id="Path_5124" data-name="Path 5124" d="M-1156.178-141.674c7.005-7.056,13.781-13.887,20.565-20.711a3.847,3.847,0,0,1,4.459-1.076,3.63,3.63,0,0,1,.987,6.013c-2.527,2.6-5.128,5.134-7.7,7.7q-7.626,7.6-15.254,15.205c-2.053,2.043-4,2.049-6.063.008q-5.735-5.686-11.446-11.4c-2.128-2.138-1.728-5.077.807-6.258a3.739,3.739,0,0,1,4.374,1.019q4.195,4.149,8.353,8.336A13.841,13.841,0,0,1-1156.178-141.674Z" transform="translate(-64.144 -84.343)" fill="#ff6a00"/>
                                    </g>
                                    </svg>
                                </p>
                                <p className="text-theme md:text-3xl text-2xl font-semibold mt-4 mb-4">Successfully Submitted</p>
                                <p className="text-lg font-semibold">Thank You For Your Interest In Employment </p>
                                <p>At Wings Badminton Club. If Your Qualifications Match Our Needs, We Will Contact You To Learn More About Your Fit In This Position.</p>
                                <a 	href="/"		                  	
                                    className=" mt-3 mb-4 pl-1 pr-2 rounded w-40 h-12 border-2 border-gray-200 font-medium inline-flex items-center justify-center shadow hover:bg-theme hover:text-white focus:bg-theme">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.752" height="13.027" viewBox="0 0 16.752 13.027" className="">
                                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M8.153,5.633,2.791,10.049v4.766a.465.465,0,0,0,.465.465l3.259-.008a.465.465,0,0,0,.463-.465V12.023a.465.465,0,0,1,.465-.465H9.3a.465.465,0,0,1,.465.465V14.8a.465.465,0,0,0,.465.467l3.258.009a.465.465,0,0,0,.465-.465V10.046L8.6,5.633A.355.355,0,0,0,8.153,5.633Zm8.469,3-2.431-2V2.6a.349.349,0,0,0-.349-.349H12.214a.349.349,0,0,0-.349.349V4.714l-2.6-2.142a1.4,1.4,0,0,0-1.774,0L.126,8.635a.349.349,0,0,0-.047.491l.742.9a.349.349,0,0,0,.492.047l6.84-5.634a.355.355,0,0,1,.445,0l6.841,5.634a.349.349,0,0,0,.491-.047l.742-.9a.349.349,0,0,0-.049-.492Z" transform="translate(0.001 -2.254)" fill="#ff6a00"/>
                                    </svg>
                                    <span className="truncate text-sm ml-2 ">Back To Home</span>
                                </a>
                            </div>                  
                        </div>
                    </div>
                </div>
                <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}

        </>
    );
    
}

export default Career;