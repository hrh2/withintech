import {FaQuoteRight} from "react-icons/fa";

export default function TestimonialCard({ content, name, role, image }) {
  return (
    <div
      className="
        relative bg-white rounded-2xl p-8 shadow-lg
        transition-all duration-500
        scale-90 opacity-80
        swiper-slide-active:scale-110
        swiper-slide-active:opacity-100
        swiper-slide-active:shadow-2xl
      "
    >
      {/* Quote Badge */}
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
        <FaQuoteRight />
      </div>

      {/* Testimonial */}
      <p className="text-center text-gray-700 text-lg mb-8">
        “{content}”
      </p>

      {/* Divider */}
      <div className="w-12 h-[2px] bg-indigo-600 mx-auto mb-6" />

      {/* Profile */}
      <div className="flex items-center justify-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
