import React from 'react';
import {VscSparkleFilled} from "react-icons/vsc";

function SectionProgram() {
    const programs = [
        {
            number: "1",
            title: "Get-Into-Tech Summer Camp",
            subtitle: "250+ Students Benefited",
            image: "/images/image19.jpg",
            height: "h-[450px]"
        },
        {
            number: "2",
            title: "Internship Program",
            subtitle: "250+ Students Benefited",
            image: "/images/internships.jpg",
            height: "h-[650px]"
        },
        {
            number: "3",
            title: "AI Innovation Challenge",
            subtitle: "Enjoy AI Rwanda",
            image: "/images/ai-and-novation.jpeg",
            height: "h-[550px]"
        },
        {
            number: "4",
            title: "Coding & Robotics",
            subtitle: "250+ Students Benefited",
            image: "/images/robots.jpeg",
            height: "h-[500px]"
        }
    ];

    return (
        <div className="relative py-20 sm:py-32 light-background ">
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: 'url("/images/blockbg.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="tracking-[0.3em] flex justify-center mb-3 pb-6">
                               <span className={'text-[18px] font-medium  border border-[#FF3F00] bg-[#FF3F00]/5   flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Our Programs
                                </span>
                    </h3>
                    <h2 className="mb-6 font-bold text-[38px]">
                        Building Skills.  Unlocking Futures.
                    </h2>
                    <p className="leading-relaxed font-normal text-[18px]">
                        WithinTech Rwanda runs programs that empower students through coding, robotics, AI competitions, and mentorship.
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 dark-background">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className={`group relative ${program.height} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${program.image})` }}
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            {/* Number Badge - Top Left */}
                            <div className="absolute top-6 left-6 z-20">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-2xl transform rotate-6"></div>
                                    <div className="relative bg-[#FF3F00]  rounded-2xl px-5 py-3 shadow-xl">
                                        <span className="text-3xl  text-white font-extrabold">
                                            {program.number}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content - Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 z-10">
                                <h1 className="p-6  mb-3 leading-tight group-hover:translate-y-[-4px] transition-transform duration-300 font-medium text-[36px]">
                                    {program.title}
                                </h1>

                                {/* Transparent Footer */}
                                <div className={` ${program.number%2===0?"bg-[#FF3F00]/20 text-[#FFF]/50 ":"bg-[#3D006B]/20 text-[#FFF]/50"} #backdrop-blur-md rounded-2xl px-4 py-8`}>
                                    <div className="tracking-wide text-xl w-full text-center font-normal text-[20px]">
                                        {program.subtitle}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Centered CTA */}
                <div className="text-center">
                    <a
                            href="#"
                            className="inline-block mt-8 px-10 py-4 primary-buttons font-semibold text-[20px] transition-all duration-200  tracking-wider rounded-md"
                        >
                            Explore Programs
                        </a>
                </div>
            </div>
        </div>
    );
}

export default SectionProgram;