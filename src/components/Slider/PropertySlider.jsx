import "./Slider.scss";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import { FaLocationDot } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { homes } from "../../assets/Data";
register();

const PropertySlider = () => {
  // Whatever is below, its all copied from official swiper documentation and stackoverflow answers.

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: false,
      slidesPerView: "2.5",
      spaceBetween: 2,
      breakpoints: {
        410: {
          slidesPerView: 3.2,
          slidesPerGroup: 2,
        },
        480: {
          slidesPerView: 3.5,
          slidesPerGroup: 2,
        },
        700: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        },
        870: {
          slidesPerView: 4.5,
          slidesPerGroup: 3,
        },
        1024: {
          slidesPerView: 4.5,
          slidesPerGroup: 3,
        },
        1280: {
          slidesPerView: 5,
          slidesPerGroup: 3,
        },
        1400: {
          slidesPerView: 5.5,
          slidesPerGroup: 3,
        },
      },

      autoplay: false,

      injectStyles: [
        ` .swiper-button-next,
          .swiper-button-prev {
           background-color: rgb(28, 186, 36);
           color:white;
           padding:.5rem;
           height:1.1rem;
           width:1.1rem;
           border-radius:50%;
           visibility:hidden;
          }
          @media(min-width:1024px){
            .swiper-button-next,
            .swiper-button-prev {
              visibility:visible;
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
      <div className="property-slider-component">
        <h2 className="slider-main-heading">Featured</h2>
        <p className="slider-sub-heading">Find a home at your budget.</p>
        <swiper-container ref={swiperRef} init="false">
          {homes.map((e) => {
            return (
              <swiper-slide key={e.id}>
                <div className="single-property-slide">
                  <img
                    className="slider-property-image"
                    src={e.image}
                    alt={e.name}
                  />
                  <h1 className="slider-property-name">{e.name}</h1>
                  <h1 className="slider-property-price">{e.price}</h1>

                  <h1 className="slider-property-location">
                    <FaLocationDot /> {e.location}
                  </h1>
                  <h1 className="slider-property-bhk">
                    <MdHome />{" "}
                    {e.bhk.map((e, index, arr) => {
                      return (
                        <span key={e}>{`${e}BHK ${
                          index < arr.length - 1 ? ", " : " "
                        }`}</span>
                      );
                    })}
                  </h1>
                  <div className="property-slider-btn cursor-pointer">
                    View more
                  </div>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </>
  );
};

export default PropertySlider;
