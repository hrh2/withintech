import React from 'react';
import {VscSparkleFilled} from "react-icons/vsc";

function SectionAboutUs() {
    return (
        <div className="relative min-h-screen py-36 overflow-hidden dark-background">
            {/* Full-width background image with overlay */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: 'url("/images/empowering.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left column: Text content */}
                    <div className="text-left space-y-8 pt-8">
                        <div className="space-y-4">
                            <h3 className="tracking-[0.3em] flex ">
                                <span className={'border border-[#FF3F00]  flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Who We Are
                                </span>
                            </h3>
                            <h1 className="leading-[1.1] ">
                                Empowering theNext Generation Of Tech Builders
                            </h1>
                        </div>

                        <p className="leading-relaxed max-w-xl">
                            WithinTech Rwanda is a leading EdTech organization dedicated to bridging the digital skills
                            gap in Rwanda. We empower young people with hands-on coding, robotics, and tech programs in
                            the digital world.
                        </p>
                        {/* Right column: Stacked cards */}
                    <div className="relative h-[450px] light-background ">
                        {/* Our Mission Card - Top layer */}
                        <div
                            className="absolute top-0 left-0 right-0 w-full transform -rotate-1 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] z-30"
                            style={{transformOrigin: 'center'}}
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Building block decorations - top left */}
                                <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                                    <div className="absolute top-2 left-0 w-20 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-0 left-14 w-12 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-10 left-0 w-14 h-14 bg-slate-500 "></div>
                                    <div className="absolute top-14 left-4 w-12 h-12 bg-white"></div>
                                    <div className="absolute top-10 left-4 w-2 h-6 bg-white "></div>
                                    <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                                </div>

                                {/* Building block decorations - bottom right */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                                    <div className="absolute bottom-0 right-0 w-8 h-28 bg-gray-400"></div>
                                    <div className="absolute bottom-0 right-2 w-12 h-16 bg-gray-400 "></div>
                                    <div className="absolute bottom-0 right-10 w-12 h-6 bg-gray-400 "></div>
                                    <div className="absolute bottom-10 right-2 w-6 h-4 bg-white "></div>
                                    <div className="absolute bottom-1 right-2 w-4 h-8 bg-white "></div>
                                </div>

                                <div className="relative z-10 p-8">
                                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                                        With people at the center, we lead with Ubumuntu — humanity first. We build
                                        inclusive spaces where collaboration thrives, mentorship matters, and every
                                        young person feels seen, supported, and capable of growing.
                                    </p>
                                    <div className="h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-6"></div>
                                     <h2 className=" mt-4  tracking-tight">
                                        Our Mission
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Our Vision Card - Middle layer */}
                        <div
                            className="absolute top-28 left-0 right-0 w-full transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] z-20 hover:z-30"
                            style={{transformOrigin: 'center'}}
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
                                {/* Building block decorations - top left */}
                                <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                                    <div className="absolute top-2 left-0 w-20 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-0 left-14 w-12 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-10 left-0 w-14 h-14 bg-slate-500 "></div>
                                    <div className="absolute top-14 left-4 w-12 h-12 bg-white"></div>
                                    <div className="absolute top-10 left-4 w-2 h-6 bg-white "></div>
                                    <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                                </div>

                                {/* Building block decorations - bottom right */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                                    <div className="absolute bottom-0 right-0 w-8 h-28 bg-gray-400"></div>
                                    <div className="absolute bottom-0 right-2 w-12 h-16 bg-gray-400 "></div>
                                    <div className="absolute bottom-0 right-10 w-12 h-6 bg-gray-400 "></div>
                                    <div className="absolute bottom-10 right-2 w-6 h-4 bg-white "></div>
                                    <div className="absolute bottom-1 right-2 w-4 h-8 bg-white "></div>
                                </div>

                                <div className="relative z-10">
                                    <p className="text-gray-700 text-lg leading-relaxed font-light">
                                        To be Rwanda's leading platform for youth digital empowerment, creating a
                                        generation of innovators, problem-solvers, and tech leaders.
                                    </p>
                                    <div
                                        className="h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-6"></div>
                                       <h2 className="mb-4 tracking-tight">
                                        Our Vision
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Our Values Card - Bottom layer */}
                        <div
                            className="absolute top-[7rem] left-0 right-0 w-full transform -rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] z-10 hover:z-30"
                            style={{transformOrigin: 'center'}}
                        >
                            <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
                                     {/* Building block decorations - top left */}
                                <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                                    <div className="absolute top-2 left-0 w-20 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-0 left-14 w-12 h-12 bg-slate-500 rounded"></div>
                                    <div className="absolute top-10 left-0 w-14 h-14 bg-slate-500 "></div>
                                    <div className="absolute top-14 left-4 w-12 h-12 bg-white"></div>
                                    <div className="absolute top-10 left-4 w-2 h-6 bg-white "></div>
                                    <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                                </div>

                                {/* Building block decorations - bottom right */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                                    <div className="absolute bottom-0 right-0 w-8 h-28 bg-gray-400"></div>
                                    <div className="absolute bottom-0 right-2 w-12 h-16 bg-gray-400 "></div>
                                    <div className="absolute bottom-0 right-10 w-12 h-6 bg-gray-400 "></div>
                                    <div className="absolute bottom-10 right-2 w-6 h-4 bg-white "></div>
                                    <div className="absolute bottom-1 right-2 w-4 h-8 bg-white "></div>
                                </div>

                                <div className="relative z-10">
                                    <ul className="space-y-1 text-gray-700 text-lg font-light">
                                        <li className="flex items-start">
                                            <span
                                                className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Ubumuntu</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Hands on Impact</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Inclusive Innovation</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span
                                                className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Joyful Discovery</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Community Connection</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 bg-amber-500 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                                            <span>Future Focused Empowerment</span>
                                        </li>
                                    </ul>
                                    <div className="h-1.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                                     <h2 className="mb-4 tracking-tight">
                                        Our Values
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                        <a
                            href="#"
                            className="inline-block mt-8 px-10 py-4 primary-buttons font-bold transition-all duration-200 uppercase tracking-wider rounded-md"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionAboutUs;