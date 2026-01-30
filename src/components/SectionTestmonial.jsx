import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {VscSparkleFilled} from "react-icons/vsc";
import {FaQuoteRight} from "react-icons/fa";

function SectionTestimonials() {
    const testimonials = [
        {
            quote: "WithinTech allowed me to write my first Hello World in coding. That moment changed everything for me. After attending their training, I gained the confidence and skills that helped me get a job.",
            name: "Teta Nancy",
            image: "/images/Nancy.JPG"
        },
        {
            quote: "Through the Get Into Tech Summer Camp, I worked on a real project with my team using the skills I gained during the training. It helped me understand how technology solves real problems.",
            name: "Aimé Loïc",
            image: "/images/Aime.JPG"
        },
        {
            quote: "Training with WithinTech was one of the most meaningful moments of my learning journey. Today, I believe in myself and in what I’m capable of doing.",
            name: "Gabriella",
            image: "/images/gabriella.JPG"
        }
    ];

    return (
        <div className="relative py-20 sm:py-28 overflow-hidden light-background bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header Section - Centered */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="tracking-[0.3em] flex justify-center">
                               <span className={'border border-[#FF3F00] bg-[#FF3F00]/5  flex justify-start rounded-3xl px-2'}>

                               <VscSparkleFilled className={"my-auto"}/>&nbsp; Success Stories
                                </span>
                    </h3>
                    <h2 className=" mb-6 leading-tight">
                        Success Stories
                    </h2>
                    <p className="leading-relaxed ">
                        Hear directly from students, mentors, and partners about the impact of WithinTech Rwanda.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={3}
                        coverflowEffect={{
                            rotate: 50,        // ❗ keep text readable
                            stretch: -40,     // ❗ creates left/right asymmetry
                            depth: 120,       // ❗ center feels closer
                            modifier: 1.2,
                            slideShadows: false,
                        }}
                        pagination={{clickable: true}}
                        modules={[EffectCoverflow, Autoplay, Pagination]}
                        className="container mx-auto px-6"
                    >

                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className={"w-[350px]"}>
                                <div className="bg-white  light-background rounded-3xl shadow-xl p-8 sm:p-10 overflow-hidden h-full relative">
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
                                    {/* Quote Badge - Top Right */}
                                    <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center shadow-lg transform rotate-6">
                                        <h2><FaQuoteRight /></h2>
                                    </div>

                                    {/* Testimonial Content - Centered */}
                                    <div className="text-center mb-8 mt-4">
                                        <p className="leading-relaxed italic">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>

                                    {/* Divider Line */}
                                    <div className="w-24 h-1  mx-auto mb-6"></div>

                                    {/* Profile Section - Centered Flex */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Circular Profile Image */}
                                        <div className="relative">
                                            <div
                                                className="absolute inset-0 rounded-full blur-md opacity-50"></div>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="relative w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg drop-shadow-md decoration-amber-100"
                                            />
                                        </div>

                                        {/* Name */}
                                        <div className="">
                                            <h2 className="">
                                                {testimonial.name}
                                            </h2>
                                            <h3 className="font-medium">
                                                Community Member
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
             {/* Decorative dots pattern */}
            <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>
        </div>
    )
        ;
}

export default SectionTestimonials;