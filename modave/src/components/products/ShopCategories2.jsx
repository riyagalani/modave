import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShopCategories2() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <Swiper
          dir="ltr"
          spaceBetween={15}
          className="swiper tf-sw-categories"
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 15 },
            568: { slidesPerView: 3, spaceBetween: 20 },
            968: { slidesPerView: 4, spaceBetween: 20 },
            1224: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
        </Swiper>
      </div>
    </section>
  );
}
