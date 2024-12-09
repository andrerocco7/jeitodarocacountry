"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/categories");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  const limitedData = data.slice(0, 2); // Pega apenas as 2 primeiras categorias

  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="position-relative">
          <div className="flat-title flex-row justify-content-between px-0">
            <span className="title fw-6 wow fadeInUp" data-wow-delay="0s">
              Categorias Destaque
            </span>
          </div>
          <div className="sw-pagination-wrapper">
            <Swiper
              className="swiper tf-sw-collection"
              slidesPerView={2}
              spaceBetween={15}
              loop={false}
              autoplay={false}
              // Remova ou ajuste breakpoints se quiser manter responsividade
              // breakpoints={{
              //   0: { slidesPerView: 1 },
              //   640: { slidesPerView: 2 },
              //   // Ajuste conforme necessário
              // }}
              modules={[Pagination]}
              pagination={{ clickable: true, el: ".spd174" }}
            >
              {limitedData.map((category) => (
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
                          width={320}
                          height={340}
                        />
                      </div>
                      <div className="collection-content">
                        <div className="top">
                          <h5 className="heading fw-5">{category.name}</h5>
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
