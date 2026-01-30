import React from "react";
import {VscSparkleFilled} from "react-icons/vsc";

function SectionWhy() {
    const benefits = [
        "Hands-on coding, robotics, and AI workshops",
        "Experienced mentors and industry connections",
        "Inclusive learning spaces for all students",
        "Career guidance and exposure to global competitions",
        "Innovative, youth-friendly programs and brand experience",
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage:
                        'url("/images/image12.JPG")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundAttachment: "fixed",
                }}
            >
            </div>

            {/* Content Wrapper */}
            <div className="relative min-h-screen flex items-end justify-end ">
                <div className="relative w-full max-w-2xl lg:max-w-3xl ">
                    {/* Main Card */}
                    <div className="bg-[#FCE3B9]/80 text-[#575757] rounded-tl-[80px] shadow-2xl p-8 sm:p-12 relative overflow-hidden">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 left-0 w-32 h-32">
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-tl-[80px]"/>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="tracking-[0.3em] flex justify-start">
                               <span className={'border border-[#FF3F00] bg-[#FF3F00]/5  flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Why choose us
                                </span>
                            </h3>

                            <h2 className="mb-6 leading-tight">
                                Transforming Technology Education for the Future</h2>
                            <p className="mb-8 text-[#575757]">
                                We offer programs that combine practical learning, mentorship,
                                and global exposure to prepare young innovators for the modern
                                tech world.
                            </p>

                            {/* Benefits */}
                            <ul className="space-y-4 mb-10">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-4 group animate-slideIn text-xl"
                                        style={{animationDelay: `${index * 0.1}s`}}
                                    >
                                        <div className="mt-1">
                                            <div className="relative w-6 h-6">
                                                <div
                                                    className="absolute inset-0 bg-[#FF3F00]  rounded-full group-hover:scale-110 transition-transform"/>
                                                <svg
                                                    className="absolute inset-0 w-full h-full text-white  p-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={3}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <span
                                            className="transition-colors">
                                    {benefit}
                    </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#"
                                className="primary-buttons inline-block mt-8 px-10 py-4 font-bold transition-all duration-200 uppercase tracking-wider rounded-md"
                            >
                                Explore More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation */}
            <style>
                {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-slideIn {
            animation: slideIn 0.5s ease-out both;
          }
        `}
            </style>
        </div>
    );
}

export default SectionWhy;
