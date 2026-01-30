import React from 'react';
import {VscSparkleFilled} from "react-icons/vsc";

function SectionCallToAction() {
    const stats = [
        {
            number: "30+",
            label: "Partners in school"
        },
        {
            number: "350+",
            label: "Students benefited"
        },
        {
            number: "MORE",
            label: "Programs and competitions"
        }
    ];

    return (
        <div className="relative donate-section #bg-[#FF3F00]/15 min-h-[200vh] sm:py-28 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: 'url("/images/BG.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: ''
                }}
            >
                {/* Dark Gradient Overlay */}
            </div>


            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header Content - Centered */}
                <div className="text-center mb-16">
                    <h3 className="tracking-[0.3em] flex justify-center">
                               <span className={'border border-[#FF3F00] bg-[#FF3F00]/5  flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Donate
                                </span>
                            </h3>
                    <h2 className=" mb-6 leading-tight">
                        Empowering Rwanda's Future
                        Tech Leaders
                    </h2>
                    <p className="leading-relaxed max-w-4xl mx-auto">
                        Join WithinTech Rwanda and participate in programs, competitions, and workshops designed to equip students with in-demand tech skills, AI knowledge, and hands-on robotics experience.
                    </p>
                </div>

                {/* Statistics - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl  mb-4 group-hover:scale-110 transition-transform duration-300 font-bold">
                                    {stat.number}
                                </h3>
                                <h2 className="text-lg sm:text-xl">
                                    {stat.label}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Donate Button - Centered */}
                <div className="text-center">
                    <a
                            href="#"
                            className="primary-buttons inline-block mt-8 px-10 py-4 font-bold transition-all duration-200 uppercase tracking-wider rounded-md"
                        >
                            Donate Now
                        </a>
                </div>
            </div>
        </div>
    );
}

export default SectionCallToAction;