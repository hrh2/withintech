import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation, Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
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
            quote: "Training with WithinTech was one of the most meaningful moments of my learning journey. Today, I believe in myself and in what I'm capable of doing.",
            name: "Gabriella",
            image: "/images/gabriella.JPG"
        },
        {
            quote: `Just wrapped up an amazing holiday coding program! Learned a ton, had so much fun, and grew my skills big time. Highly recommend @withintechrwanda to anyone looking to level up their coding game.`,
            name: "Esther",
            image: "/images/esther.JPG"
        },
        {
            quote: `I had the opportunity to participate in the Within Tech Summer Camp (Cohort 2), where I learned a lot about coding and robotics. I am currently studying at NIT. Special thanks to the Mother of Mentees for the guidance and continuous support`,
            name: "Sharif",
            image: "/images/sharif.JPG"
        }
    ];

    return (
        <div className="relative py-20 sm:py-28 overflow-hidden light-background bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header Section - Centered */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h3 className="tracking-[0.3em] flex justify-center pb-6">
                        <span className={'border border-[#FF3F00] text-[18px] font-medium bg-[#FF3F00]/5 flex justify-start rounded-3xl px-2'}>
                            <VscSparkleFilled className={"my-auto"}/>&nbsp; Success Stories
                        </span>
                    </h3>
                    <h2 className="mb-6 leading-tight font-bold text-[38px]">
                        Success Stories
                    </h2>
                    <p className="leading-relaxed font-normal text-[18px]">
                        Hear directly from students, mentors, and partners about the impact of WithinTech Rwanda.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative testimonial-slider">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet testimonial-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="!pb-16"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div
                                        className={`bg-white light-background rounded-3xl shadow-xl p-8 sm:p-10 overflow-hidden h-full relative transition-all duration-300 ${
                                            isActive ? 'md:scale-110' : 'md:scale-90 md:opacity-70'
                                        }`}
                                    >
                                        {/* Building block decorations - top left */}
                                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                                            <div className="absolute top-2 left-0 w-20 h-12 bg-slate-500 rounded"></div>
                                            <div className="absolute top-0 left-14 w-12 h-12 bg-slate-500 rounded"></div>
                                            <div className="absolute top-10 left-0 w-14 h-14 bg-slate-500"></div>
                                            <div className="absolute top-14 left-4 w-12 h-12 bg-white"></div>
                                            <div className="absolute top-10 left-4 w-2 h-6 bg-white"></div>
                                            <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                                        </div>

                                        {/* Building block decorations - bottom right */}
                                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                                            <div className="absolute bottom-0 right-0 w-8 h-28 bg-gray-400"></div>
                                            <div className="absolute bottom-0 right-2 w-12 h-16 bg-gray-400"></div>
                                            <div className="absolute bottom-0 right-10 w-12 h-6 bg-gray-400"></div>
                                            <div className="absolute bottom-10 right-2 w-6 h-4 bg-white"></div>
                                            <div className="absolute bottom-1 right-2 w-4 h-8 bg-white"></div>
                                        </div>

                                        {/* Quote Badge - Top Right */}
                                        <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center shadow-lg transform rotate-6">
                                            <h2><FaQuoteRight /></h2>
                                        </div>

                                        {/* Testimonial Content - Centered */}
                                        <div className="text-center mb-8 mt-4">
                                            <p className="leading-relaxed text-black text-[16px] font-normal">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>

                                        {/* Divider Line */}
                                        <div className="h-1 bg-[#D3DCE8] mx-auto mb-6"></div>

                                        {/* Profile Section - Centered Flex */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Circular Profile Image */}
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-full blur-md opacity-50"></div>
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="relative w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg drop-shadow-md decoration-amber-100"
                                                />
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <h2>{testimonial.name}</h2>
                                                {/*<h3 className="font-medium">Community Member</h3>*/}
                                            </div>
                                        </div>
                                    </div>
                                )}
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
    );
}

export default SectionTestimonials;