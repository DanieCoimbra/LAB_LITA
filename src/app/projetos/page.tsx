"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "./projetos.css";

const projets = [
  { src: "/sttutz1.png", alt: "" },
  { src: "/sttutz2.png", alt: "" },
  { src: "/sttutz3.png", alt: "" },
];

const images1 = [
  { src: "/smart1.png", alt: "" },
  { src: "/smart2.png", alt: "" },
  { src: "/smart3.png", alt: "" },
];

export default function Projetos() {
  return (
    <section id="projects" className="bg-projects">
      <Image
        src="/system.png"
        alt="System"
        width={150}
        height={100}
        className='system'
        priority
      />
      <div className='projectContainer'>
        <h2 className='t'>PROJETOS EM ANDAMENTO</h2>

        <div className='projects-grid'>
          <Swiper
            className='project-card'
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {projets.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='project-card'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className='project-image'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            className='project-card'
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {images1.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='project-card'>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className='project-image'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
