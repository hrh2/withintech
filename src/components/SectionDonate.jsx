import React from 'react';
import {VscSparkleFilled} from "react-icons/vsc";

function SectionCallToAction() {
    const stats = [
        {
            number: "10+",
            label: "Partners in school"
        },
        {
            number: "350+",
            label: "Students benefited"
        },
        {
            number: "3",
            label: "Cohorts"
        }
    ];

    return (
        <div className="relative donate-section  bg-[#FCE3B9] sm:pt-16 overflow-hidden">
            {/* Background Image with Overlay */}

            <div className="relative top-40 max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header Content - Centered */}
                <div className="text-center mb-16">
                    <h3 className="tracking-[0.3em] flex justify-center pb-6">
                               <span className={'border border-[#FF3F00] bg-[#FF3F00]/5  text-[18px] font-medium   flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Donate
                                </span>
                            </h3>
                    <h2 className=" mb-6 leading-tight font-bold text-[38px] ">
                        Empowering Rwanda's Future
                        Tech Leaders
                    </h2>
                    <p className="leading-relaxed max-w-4xl mx-auto text-[#575757] text-[18px] font-normal ">
                        Join WithinTech Rwanda and participate in programs, competitions, and workshops designed to equip students with in-demand tech skills, AI knowledge, and hands-on robotics experience.
                    </p>
                </div>

                {/* Statistics - 3 Columns */}
                <div className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center group"
                        >
                            <div className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <h3 className="text-[36px] mb-4 group-hover:scale-110 transition-transform duration-300 font-bold">
                                    {stat.number}
                                </h3>
                                <h2 className="text-[14px] font-medium ">
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
                            className="primary-buttons inline-block mt-8 px-10 py-4 font-semibold text-[20px] transition-all duration-200 tracking-wider rounded-md"
                        >
                            Donate Now
                        </a>
                </div>
            </div>
            <div className={" relative h-[125vh] w-full"}>
                    <img className={"inset-0 w-full h-full object-cover"} src={`/images/BG.png`} alt={"Withintech community"}/>
            </div>
        </div>
    );
}

export default SectionCallToAction;