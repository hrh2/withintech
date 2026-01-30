import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function SectionPartners() {
    const partners_images = [
        "/partners/p4.png",
        "/partners/p3.png",
        "/partners/p1.png",
        "/partners/p2.png",
        "/partners/p5.png",
    ]

    return (
        <div className="py-8 sm:py-24 light-background bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className=" mb-4 font-bold text-[30px]">
                        Our Partners
                    </h2>
                    <p className="max-w-3xl font-normal text-[18px]">
                        Each collaboration has helped us reach more learners, unlock more potential, and build lasting impact.
                    </p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 60,
                            },
                        }}
                        className="partners-swiper"
                    >
                        {partners_images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 p-6 ">
                                    <img
                                        src={image}
                                        alt={`Partner ${index + 1}`}
                                        className="w-full h-full object-contain #grayscale hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150x150/6366f1/ffffff?text=Partner';
                                        }}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default SectionPartners;