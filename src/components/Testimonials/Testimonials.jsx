import "./Testimonials.scss";
import { useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { register } from "swiper/element/bundle";
import { FaArrowRightLong } from "react-icons/fa6";
import { testimonials } from "../../assets/Data";

register();

const Testimonials = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: {
        nextEl: ".next-testimonial",
        prevEl: ".prev-testimonial",
      },
      slidesPerView: "1",
      spaceBetween: 2,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      speed: 600,
      injectStyles: [
        ` .swiper-button-next,
          .swiper-button-prev {
           display:none;
          }
          }
          `,
      ],
    };
    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <>
      <div className="testimonials-component">
        <h1 className="testimonials-heading">Testimonials</h1>
        <h2 className="testimonials-sub-heading">
          See what people say about us
        </h2>

        <swiper-container ref={swiperRef} init="false">
          {testimonials.map((e) => {
            return (
              <swiper-slide key={e.id}>
                <div className="single-testimonial">
                  <img className="reviewer-image" src={e.image} />
                  <p className="review">{e.review}</p>
                  <span>
                    <h1 className="reviewer-name">{e.name}</h1>
                    <h2 className="reviewer-designation">{e.designation}</h2>
                  </span>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>

        <div className="testimonials-btns-container">
          <button className="prev-testimonial">
            <FaArrowLeft />
          </button>
          <button className="next-testimonial">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
