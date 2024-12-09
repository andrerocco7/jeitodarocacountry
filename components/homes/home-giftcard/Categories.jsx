"use client";

import Image from "next/image";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories({ categories }) {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="position-relative">
          <div className="flat-title flex-row justify-content-between px-0">
            <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
              Destaques
            </span>
          </div>
          <div className="sw-pagination-wrapper">
            <Swiper
              className="swiper tf-sw-collection"
              slidesPerView={4}
              spaceBetween={15}
              loop={false}
              autoplay={false}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
              }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd174" }}
            >
              {data.map((category) => (
                <SwiperSlide key={category.id}>
                  <div className="collection-item-v2 type-small hover-img">
                    <Link
                      href={`/shop-collection-sub?category=${category.id}`}
                      className="collection-inner"
                    >
                      <div className="collection-image img-style radius-10">
                        <Image
                          className="lazyload"
                          src={category.imageUrl}
                          alt={category.name}
                          width={320} // Ajuste conforme necessário
                          height={340}
                        />
                      </div>
                      <div className="collection-content">
                        <div className="top">
                          <h5 className="heading fw-5">{category.name}</h5>
                          <p className="subheading">{category.description}</p>
                        </div>
                        <div className="bottom">
                          <button className="tf-btn collection-title hover-icon btn-light">
                            <span>Ver Produtos</span>
                            <i className="icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="box-sw-navigation">
              <div className="sw-dots style-2 medium sw-pagination-collection justify-content-center spd174" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
