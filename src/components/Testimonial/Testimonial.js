import React from "react";
import "../Testimonial/testimonial.css";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    
    name: "Prodigal A.I",
    review:
      "Revolutionize your customer engagement or internal processes with our AI-Powered Bots. Offering advanced capabilities beyond text, enhance your business interactions with tailored, intelligent conversations across multiple platforms.",
  },
  {
    
    name: "Vidia",
    review:
      "Unlock the power of cloud. Bridge the gap between your digital vision and reality with global technology services from VDA. Accelerate your digital transformation and gain the ability to operate from edge to cloud with the strategic help, operational support, and training you need.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5> Review from clients </h5>
      <h2>Testimonial</h2>

      <Swiper className="container containerTestimonial"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

        {data.map(({ name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="clientAvatar">
              </div>

              <h5 className="clientName"> {name} </h5>
              <small className="clientReview">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
