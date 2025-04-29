
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { Pagination } from "swiper/modules";
export default function Collections() {
  const params = {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 15,
  };
  return (
    <section>
      <div className="container">
        <div dir="ltr" className="swiper tf-sw-collection" data-space={15}>
          <Swiper
            {...params}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: ".spd61",
            }}
          >
          </Swiper>
          <div className="sw-pagination-collection sw-dots type-circle justify-content-center spd61" />
        </div>
      </div>
    </section>
  );
}
