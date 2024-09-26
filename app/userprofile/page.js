"use client"
import { useState } from "react";
// import { FaLinkedin, FaTwitter, FaFacebook, FaHeart, FaCommentAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiPhotoshop } from 'react-icons/di';

import Link from "next/link";
import AboutP from '@/components/AboutP';

const page = () => {
    const [activeTab, setActiveTab] = useState("Posts");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="w-full min-h-screen bg-[#FDFDFD] text-[#050606]">
                <div className="upper relative">
                    <div className="cover w-full ">
                        <img className="w-full h-[290px] object-cover" src="https://plus.unsplash.com/premium_photo-1676654935937-109c7936b8ff?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="pic w-[80px] h-[80px] rounded-full absolute  border-2 -translate-x-1/2 -translate-y-1/2 left-[70px] border-[#D8D7D5] overflow-hidden">
                        <img className="w-full h-full object-cover" src="https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg" alt="" />
                    </div>
                </div>

                <div className="lower mt-11 flex gap-4">
                    <div className="left w-[25%] ">
                        <div className="text px-4">
                            <h2 className="text-2xl font-semibold">my name is here</h2>
                            <p className="text-sm text-[#ADB3BC]">@username</p>
                            <h4 className="text-sm font-normal mt-2">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos architecto ducimus explicabo quas laboriosam enim aliquam minus similique minima.
                            </h4>
                        </div>
                    </div>
                    <div className="right w-[70%]">
                        <div className=" border-b border-[##ADB3BC]  p-4">
                            <div className="flex justify-center ">

                                <button
                                    className={`px-4 py-2 font-medium ${activeTab === 'Posts' ? 'border-b-4 border-[#050606]' : 'text-[#ADB3BC]'}`}
                                    onClick={() => handleTabClick('Posts')}
                                >
                                    Posts
                                </button>
                                <button
                                    className={`px-4 py-2 font-medium ${activeTab === 'Research' ? 'border-b-4 border-[#050606]' : 'text-[#ADB3BC]'}`}
                                    onClick={() => handleTabClick('Research')}
                                >
                                    Research
                                </button>

                                <button
                                    className={`px-4 py-2 font-medium ${activeTab === 'about' ? 'border-b-4 border-[#050606]' : 'text-[#ADB3BC]'}`}
                                    onClick={() => handleTabClick('about')}
                                >
                                    About
                                </button>
                            </div>
                        </div>

                        {/* Content Grid Section with Tab Switching */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 transition-all duration-500 ease-in-out">
                            {activeTab === "Posts" && (
                                <>
                                    {/* <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?nature"
                                            alt="Photo 1"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">Nature Scene</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    45
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    13
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?city"
                                            alt="Photo 2"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">City View</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    34
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    8
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?beach"
                                            alt="Photo 3"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">Beach Sunset</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    28
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    6
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                            )}

                            {activeTab === "Research" && (
                                <>
                                    {/* <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?video"
                                            alt="Video 1"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">Travel Vlog</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    100
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    25
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?movie"
                                            alt="Video 2"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">Short Film</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    80
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    15
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-lg shadow-lg">
                                        <img
                                            className="rounded-t-lg h-48 w-full object-cover"
                                            src="https://source.unsplash.com/400x300/?documentary"
                                            alt="Video 3"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold">Nature Documentary</h3>
                                            <div className="flex justify-between text-gray-500 mt-2">
                                                <span className="flex items-center">
                                                    <FaHeart className="mr-2" />
                                                    120
                                                </span>
                                                <span className="flex items-center">
                                                    <FaCommentAlt className="mr-2" />
                                                    18
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                </>
                            )}

                            {activeTab === "about" && (

                               <AboutP />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default page