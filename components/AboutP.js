import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaTwitter, FaDribbble } from 'react-icons/fa';
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiPhotoshop } from 'react-icons/di';

const AboutP = () => {
  return (
    <div className="w-full h-full shrink-0">
    <div className="container w-full h-full p-6 bg-[#FDFDFD]">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>

        <div className="flex space-x-8 ">
            {/* Left Column */}
            <div className="w-[360px] flex-shrink-0 bg-[#efefef] shadow-lg rounded-lg p-4">
               
                <h2 className="text-center text-xl font-semibold">Jese Leos</h2>
                <p className="text-center text-gray-600">Front-end Developer</p>
                <p className="text-center text-gray-500"><FaMapMarkerAlt className="inline-block" /> San Francisco, USA</p>

                <div className="text-center mt-4">
                    <p><FaEnvelope className="inline-block" /> yourname@flowbite.com</p>
                    <p><FaPhone className="inline-block" /> +00 123 456 789 / +12 345 678</p>
                    <p>92 Miles Drive, Newark, NJ 07103, California, USA</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold">Software Skills</h3>
                    <div className="flex space-x-2 mt-2 justify-center">
                        <DiHtml5 className="text-4xl text-orange-500" />
                        <DiCss3 className="text-4xl text-blue-500" />
                        <DiJavascript1 className="text-4xl text-yellow-500" />
                        <DiReact className="text-4xl text-cyan-500" />
                        <DiPhotoshop className="text-4xl text-blue-400" />
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="w-[691px] flex-shrink-0 space-y-4">
                <div className="bg-[#efefef] shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold">General Information</h3>
                    <p className="text-gray-600">
                        Tincidunt quam neque in cursus viverra orci, dapibus nec tristique.
                        Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus
                        congue arcu aenean posuere aliquam.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <p><strong>Education:</strong> Thomas Jeff High School, Stanford University</p>
                            <p><strong>Join Date:</strong> 12-09-2021</p>
                            <p><strong>Organization:</strong> Themesberg LLC</p>
                            <p><strong>Department:</strong> Marketing</p>
                        </div>
                        <div>
                            <p><strong>Work History:</strong> Twitch, Google, Apple</p>
                            <p><strong>Languages:</strong> English, German, Italian, Spanish</p>
                            <p><strong>Role:</strong> Graphic Designer</p>
                            <p><strong>Birthday:</strong> 15-08-1990</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#efefef] shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Brand Design</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Logo Design</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Mobile App Design</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">UI Design</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">React Developer</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Wordpress</span>
                    </div>
                </div>

                <div className="bg-[#efefef] shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Hobbies</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Football</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Dogs</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Gaming</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Movies</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Travelling</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Surf</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Ice Skating</span>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">The Witcher</span>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <FaLinkedin className="text-2xl text-blue-700 mx-2 hover:text-blue-800 transition" />
                    <FaGithub className="text-2xl text-gray-700 mx-2 hover:text-gray-800 transition" />
                    <FaTwitter className="text-2xl text-blue-500 mx-2 hover:text-blue-600 transition" />
                   
                </div>
            </div>
        </div>


    </div>
</div>
  );
};

export default AboutP;
