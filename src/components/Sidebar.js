import React from 'react';
import { NavLink,useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Sidebar = ({sidebar}) =>  {
   
    return (
       <div className={sidebar?"sidebar sidebar--open": "backdrop"}>
            <div className="w-full h-full min-w-320 max-w-xs">
                <div className="bg-white rounded p-4">
                    {/* <a 	href="/"		                  	
                        className="pl-1 pr-2 rounded w-full h-12 border-2 border-theme font-medium inline-flex items-center justify-center shadow hover:bg-theme hover:text-white focus:bg-theme"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.752" height="13.027" viewBox="0 0 16.752 13.027" className="">
                            <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M8.153,5.633,2.791,10.049v4.766a.465.465,0,0,0,.465.465l3.259-.008a.465.465,0,0,0,.463-.465V12.023a.465.465,0,0,1,.465-.465H9.3a.465.465,0,0,1,.465.465V14.8a.465.465,0,0,0,.465.467l3.258.009a.465.465,0,0,0,.465-.465V10.046L8.6,5.633A.355.355,0,0,0,8.153,5.633Zm8.469,3-2.431-2V2.6a.349.349,0,0,0-.349-.349H12.214a.349.349,0,0,0-.349.349V4.714l-2.6-2.142a1.4,1.4,0,0,0-1.774,0L.126,8.635a.349.349,0,0,0-.047.491l.742.9a.349.349,0,0,0,.492.047l6.84-5.634a.355.355,0,0,1,.445,0l6.841,5.634a.349.349,0,0,0,.491-.047l.742-.9a.349.349,0,0,0-.049-.492Z" transform="translate(0.001 -2.254)" fill="#ff6a00"/>
                        </svg>
                        <span className="truncate text-sm ml-2">Back To Home</span>                        
                    </a> */}
                    <div className="flex items-center py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15.097 15.133" className="inline-flex mr-2">
                            <g id="Group_3319" data-name="Group 3319" transform="translate(-1891 9337)">
                                <path id="Path_2254" data-name="Path 2254" d="M1069.878,353.942c0-.2-.005-.36,0-.52a.432.432,0,0,1,.443-.439.424.424,0,0,1,.424.427c.007.089,0,.178,0,.268s.011.156.017.248h1.954c0-.169-.005-.334,0-.5a.432.432,0,1,1,.864.006c0,.158,0,.317,0,.492h1.975c0-.161,0-.326,0-.49a.433.433,0,1,1,.865-.009c0,.08,0,.161,0,.241s0,.158,0,.256h1.974c0-.176-.008-.343,0-.51a.42.42,0,0,1,.422-.429.433.433,0,0,1,.444.437c.007.16,0,.32,0,.521.37,0,.726.021,1.078,0a1.68,1.68,0,0,1,1.774,1.764c-.023,3.55-.01,7.1-.01,10.65a1.634,1.634,0,0,1-1.771,1.764h-11.562a1.63,1.63,0,0,1-1.746-1.736c0-3.568.012-7.136-.008-10.7a1.669,1.669,0,0,1,1.744-1.738C1069.126,353.963,1069.484,353.942,1069.878,353.942Zm-1.95,3.735c-.006.108-.014.2-.014.3q0,4.159,0,8.319c0,.668.26.932.92.932h11.485c.659,0,.92-.265.92-.932q0-4.159,0-8.319c0-.1-.009-.191-.015-.3Zm.022-.9h13.271c0-.444.023-.88-.007-1.313a.616.616,0,0,0-.574-.612c-.447-.037-.9-.009-1.367-.009,0,.087,0,.167,0,.246s0,.161,0,.242a.447.447,0,0,1-.443.443.428.428,0,0,1-.423-.43c-.01-.167,0-.335,0-.518h-1.976c0,.183.007.351,0,.519a.431.431,0,1,1-.863-.014c-.006-.166,0-.333,0-.5h-1.975c0,.17,0,.321,0,.471a.435.435,0,1,1-.866-.008c0-.156,0-.313,0-.468h-1.973c0,.173.006.331,0,.489a.435.435,0,0,1-.423.459.448.448,0,0,1-.445-.468c0-.157,0-.315,0-.491-.444,0-.854-.02-1.262.006a.641.641,0,0,0-.653.536A12.832,12.832,0,0,0,1067.95,356.775Z" transform="translate(823.972 -9689.983)" fill="#222"/>
                                <path id="Path_2255" data-name="Path 2255" d="M1074.189,367.037c0,.3.006.59,0,.886-.009.353-.164.505-.513.508q-.871.005-1.744,0c-.348,0-.5-.16-.507-.51q-.006-.885,0-1.771c0-.349.16-.505.509-.507q.872-.006,1.744,0c.348,0,.5.155.51.51C1074.2,366.447,1074.189,366.742,1074.189,367.037Zm-.89-.471h-.983v.946h.983Z" transform="translate(821.72 -9696.471)" fill="#222"/>
                                <path id="Path_2256" data-name="Path 2256" d="M1090.687,367.036c0,.3,0,.608,0,.912a.433.433,0,0,1-.481.482q-.9.009-1.8,0a.432.432,0,0,1-.483-.482q-.012-.913,0-1.825c.005-.331.17-.48.51-.482q.872-.006,1.744,0c.348,0,.5.159.508.509C1090.69,366.446,1090.687,366.741,1090.687,367.036Zm-1.871-.486v.956h.978v-.956Z" transform="translate(813.265 -9696.471)" fill="#222"/>
                                <path id="Path_2257" data-name="Path 2257" d="M1082.439,374.823c0,.3,0,.608,0,.911,0,.326-.144.494-.459.5-.608.012-1.216.011-1.823,0-.317-.006-.464-.174-.466-.495q0-.911,0-1.823a.414.414,0,0,1,.458-.465q.912-.007,1.823,0a.415.415,0,0,1,.465.459C1082.443,374.216,1082.439,374.52,1082.439,374.823Zm-.882.5v-.981h-.985v.981Z" transform="translate(817.483 -9700.474)" fill="#222"/>
                                <path id="Path_2258" data-name="Path 2258" d="M1071.423,374.812c0-.295,0-.59,0-.885a.428.428,0,0,1,.482-.475q.9-.005,1.8,0a.427.427,0,0,1,.483.477q.013.911,0,1.823a.437.437,0,0,1-.485.484q-.9.014-1.8,0c-.329-.006-.477-.174-.481-.512C1071.42,375.42,1071.423,375.116,1071.423,374.812Zm.892-.47v.982h.982v-.982Z" transform="translate(821.72 -9700.474)" fill="#222"/>
                                <path id="Path_2259" data-name="Path 2259" d="M1089.3,373.452c.3,0,.608,0,.912,0a.422.422,0,0,1,.47.461q.009.925,0,1.85a.428.428,0,0,1-.465.472q-.911.017-1.823,0a.436.436,0,0,1-.473-.5q-.011-.9,0-1.8c0-.349.164-.49.522-.492C1088.732,373.45,1089.017,373.452,1089.3,373.452Zm-.489.885v.981h.979v-.981Z" transform="translate(813.265 -9700.474)" fill="#222"/>
                                <path id="Path_2260" data-name="Path 2260" d="M1080.633,367.407l.948-.949c.288-.288.531-.324.74-.108.185.191.145.473-.106.726q-.576.58-1.155,1.157c-.294.291-.5.286-.8-.01-.183-.183-.369-.364-.548-.551a.455.455,0,0,1-.034-.646.444.444,0,0,1,.662.03A4.519,4.519,0,0,1,1080.633,367.407Z" transform="translate(817.547 -9696.763)" fill="#222"/>
                            </g>
                        </svg>
                        <span className="inline-flex text-lg">Booking Summary</span>
                    </div>
                    <table className="table-auto w-full rounded-lg border-collapse p-4 mb-8">
                    <thead>
                        <tr className='text-left bg-neutral-200 p-8'>
                            <th className='py-3 px-2 mb-4'>Date</th>
                            <th>Timing</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2">
                            <td className='py-2 px-2 w-10'><p className="text-base">MON</p><span className="text-xs text-gray-400">18 Nov</span></td>
                            <td>
                                <span className="text-xs">08:00 AM - 09:00 AM</span>
                            </td>
                            <td>
                                <span className="text-sm">$ 150.00</span>
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className='py-2 px-2'><p>TUE</p><span className="text-xs text-gray-400">18 Nov</span></td>
                            <td>
                                <span className="text-xs">08:00 AM - 09:00 AM</span>
                            </td>
                            <td>
                                <span className="text-sm">$ 150.00</span>
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className='py-2 px-2'><p>WED</p><span className="text-xs text-gray-400">18 Nov</span></td>
                            <td>
                                <span className="text-xs">08:00 AM - 09:00 AM</span>
                            </td>
                            <td>
                                <span className="text-sm">$ 150.00</span>
                            </td>
                        </tr>
                        <tr className="border-b-2">
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
                        <tr className='text-left bg-neutral-200 p-8'>
                            <th className='py-2 px-2 mb-4' colSpan={2}><p className="text-base">Total</p><span className="text-xs font-normal">(without any tax)</span></th>
                            
                            <th><p className="font-normal">CAD</p>$ 576.00</th>
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
    );
};

export default Sidebar;
