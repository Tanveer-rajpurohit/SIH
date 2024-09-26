
"use client"
import { useState } from "react";
import { LuFileImage } from "react-icons/lu";
import { BsFiletypeGif } from "react-icons/bs";
import { PiSmileyFill } from "react-icons/pi";


import {
    FaFire,       // Trending
    FaStar,       // Popular
    FaChalkboardTeacher, // Seminars
    FaTools,      // Workshops
    FaEllipsisH,   // Other
    FaThumbsUp,
    FaComment,
    FaShare,
    FaUserCircle,
    FaGlobe,
    FaMapMarkerAlt,
} from "react-icons/fa";



const categories = [
    { name: "Trending", icon: <FaFire />, bgColor: "bg-red-200", textColor: "text-red-500" },
    { name: "Popular", icon: <FaStar />, bgColor: "bg-yellow-200", textColor: "text-yellow-500" },
    { name: "Seminars", icon: <FaChalkboardTeacher />, bgColor: "bg-green-200", textColor: "text-green-500" },
    { name: "Workshops", icon: <FaTools />, bgColor: "bg-blue-200", textColor: "text-blue-500" },
    { name: "Other", icon: <FaEllipsisH />, bgColor: "bg-gray-200", textColor: "text-gray-500" },
];

const categories2 = [
    { name: "Trending", icon: <FaFire />, bgColor: "bg-red-200", textColor: "text-red-500" },
    { name: "Popular", icon: <FaStar />, bgColor: "bg-yellow-200", textColor: "text-yellow-500" },
    { name: "Global Publication", icon: <FaGlobe />, bgColor: "bg-green-200", textColor: "text-green-500" },
    { name: "Local Publication", icon: <FaMapMarkerAlt />, bgColor: "bg-blue-200", textColor: "text-blue-500" },
    { name: "Other", icon: <FaEllipsisH />, bgColor: "bg-gray-200", textColor: "text-gray-500" },
];


const researchArticles = [
    {
        user: "Dr. Emily Watson",
        avatar: <FaUserCircle size={50} className="text-purple-600" />,
        title: "Deep Learning Approaches for AI",
        abstract: "This research explores the latest advancements in deep learning, highlighting the performance of new models...",
        link: "https://scholar.google.com",
        citations: 345,
    },
    {
        user: "Prof. John Davis",
        avatar: <FaUserCircle size={50} className="text-green-600" />,
        title: "Neural Networks and their Future",
        abstract: "An in-depth analysis of how neural networks have revolutionized various industries and their future potential...",
        link: "https://scholar.google.com",
        citations: 289,
    },
];

const page = () => {
    const [activeTab, setActiveTab] = useState("posts");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>



            <div className="w-full h-full flex justify-center">


                <div className="w-[98%] min-h-[77vh] bg-[#FDFDFD] m-6 px-16 py-6  border border-[#D8D7D5] rounded-3xl flex flex-col items-center ">


                    <div className="w-full  border-[##ADB3BC] pb-6">
                        <div className="flex justify-center ">

                            <button
                                className={`px-4 py-2 font-medium ${activeTab === 'posts' ? 'border-b-4 border-[#050606]' : 'text-[#ADB3BC]'}`}
                                onClick={() => handleTabChange('posts')}
                            >
                                Posts
                            </button>
                            <button
                                className={`px-4 py-2 font-medium ${activeTab === 'research' ? 'border-b-4 border-[#050606]' : 'text-[#ADB3BC]'}`}
                                onClick={() => handleTabChange('research')}
                            >
                                Research
                            </button>


                        </div>
                    </div>


                    <div className="w-full min-h-10  add flex justify-center relative">
                        <input className="bg-[#EFEFEF] border-none rounded-full w-[70%] px-16" type="text" placeholder="Tell everyone what are you working on" />
                        <div className="rounded-full bg-[#29e6e666] w-8 h-8 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[17%] overflow-hidden">
                            <img className="w-full h-full object-cover" src="https://via.placeholder.com/40" alt="" />
                        </div>
                        <div className="  min-w-8 h-8 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 right-[14%] flex gap-4 items-center justify-center">
                            <LuFileImage style={{ scale: 1.4 }} />
                            <BsFiletypeGif style={{ scale: 1.4 }} />
                            <PiSmileyFill style={{ scale: 1.4 }} />
                        </div>

                    </div>

                    {activeTab === "posts" && (

                        <>

                            <div className="p-6 my-6">
                                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                                <div className="flex space-x-4">
                                    {categories.map((category, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center p-4 rounded-lg shadow-md ${category.bgColor} hover:shadow-lg cursor-pointer`}
                                        >
                                            <div className={`p-2 rounded-full ${category.textColor} bg-white`}>
                                                {category.icon}
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="font-semibold text-lg">{category.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="w-[70%] min-h-[40vh] bg-white   space-y-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="User Avatar"
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h2 className="font-bold text-md text-gray-800">
                                                Maria Mills <span className="text-gray-500 text-sm">is feeling excited with Mario Patrick</span>
                                            </h2>
                                            <p className="text-sm text-gray-500">December 28, 2018</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        The Oceanarium in Barcelona is a real miracle 🐟
                                    </p>
                                    {/* Image Gallery */}
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Oceanarium"
                                            className="rounded-lg"
                                        />
                                        <img
                                            src="https://via.placeholder.com/150"
                                            alt="Turtle"
                                            className="rounded-lg"
                                        />
                                    </div>
                                    {/* Like, Comment, Share */}
                                    <div className="flex justify-between items-center text-gray-500 text-sm">
                                        <div className="flex space-x-4">
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaThumbsUp /> <span>Like</span>
                                            </span>
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaComment /> <span>Comment</span>
                                            </span>
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaShare /> <span>Share</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Comment Input */}
                                    <div className="mt-4 flex items-center">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="User Avatar"
                                            className="rounded-full"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Write a comment..."
                                            className="ml-4 w-full bg-gray-100 p-2 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                </div>

                                {/* Second Post with Text Only */}
                                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="User Avatar"
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h2 className="font-bold text-md text-gray-800">Alan Thorton</h2>
                                            <p className="text-sm text-gray-500">December 28, 2018</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        At the end of your life you'll always regret the stuff you didn't do more than the stuff you did.
                                    </p>
                                    {/* Like, Comment, Share */}
                                    <div className="flex justify-between items-center text-gray-500 text-sm">
                                        <div className="flex space-x-4">
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaThumbsUp /> <span>Like</span>
                                            </span>
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaComment /> <span>Comment</span>
                                            </span>
                                            <span className="flex items-center space-x-1 cursor-pointer hover:text-blue-500">
                                                <FaShare /> <span>Share</span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* Comment Input */}
                                    <div className="mt-4 flex items-center">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="User Avatar"
                                            className="rounded-full"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Write a comment..."
                                            className="ml-4 w-full bg-gray-100 p-2 rounded-full text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === "research" && (
                        <>

                            <div className="p-6 my-6">
                                <h2 className="text-2xl font-bold mb-6">Categories</h2>
                                <div className="flex space-x-4">
                                    {categories2.map((category, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center p-4 rounded-lg shadow-md ${category.bgColor} hover:shadow-lg cursor-pointer`}
                                        >
                                            <div className={`p-2 rounded-full ${category.textColor} bg-white`}>
                                                {category.icon}
                                            </div>
                                            <div className="ml-3">
                                                <h3 className="font-semibold text-lg">{category.name}</h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="w-[70%] min-h-[40vh] space-y-8 bg-white  p-8 rounded-xl shadow-md border border-gray-200">
                                <h3 className="font-bold text-lg text-gray-700 mb-4">Google Scholar Research</h3>
                                {researchArticles.map((article, index) => (
                                    <div key={index} className="space-y-4 mb-6">
                                        <div className="flex items-center space-x-4">
                                            {/* {article.avatar} */}
                                            <div className="flex items-center space-x-4 mb-4">
                                                <img className="rounded-full" src="https://via.placeholder.com/40" alt="" />

                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{article.user}</h4>
                                                <a
                                                    href={article.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-semibold text-blue-600 hover:underline"
                                                >
                                                    {article.title}
                                                </a>
                                                <p className="text-sm text-gray-500">Citations: {article.citations}</p>
                                                <p className="text-gray-600">{article.abstract}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}
export default page