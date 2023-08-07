import React from "react";
import "../Testimonial/testimonial.css";
import AVTR1 from "../../assets/mercedeas.png";
import AVTR2 from "../../assets/bentle.png";
import AVTR3 from "../../assets/audi.png";
import AVTR4 from "../../assets/volks.png";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Mercedeas",
    review:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    avatar: AVTR2,
    name: "bentle",
    review:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    avatar: AVTR3,
    name: "audi",
    review:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
  },
  {
    avatar: AVTR4,
    name: "volks",
    review:
      " There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
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

        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial">
              <div className="clientAvatar">
                <img src={avatar} alt=""></img>
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
