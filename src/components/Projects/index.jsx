import React, { useRef } from 'react';
import ProjectCard from '../ProjectCard';
import { useLanguage } from "../../context/LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import './Projects.css';

export default function Projects() {
  const { menuLabels } = useLanguage();
  const swiperRef = useRef(null);

  const projects = [
    {
      image: "/images/Enlemar.png",
      title: "Enlemar",
      descriptionKey: "proj1-descricao",
      link: null,
    },
    {
      image: "/images/organo.png",
      title: "Organo",
      descriptionKey: "proj2-descricao",
      link: "https://organo-zeta-blond.vercel.app/",
    },
    {
      image: "/images/Galeria.png",
      title: "Galeria de Fotos",
      descriptionKey: "proj3-descricao",
      link: "https://galeria-de-fotos-rosy-iota.vercel.app/",
    },
    {
      image: "/images/Neuro.png",
      title: "NeuroSync",
      descriptionKey: "proj4-descricao",
      link: "https://neurosync-ten.vercel.app/",
    },
  ];

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (swiper?.autoplay?.running === false) {
      swiper.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (swiper?.autoplay?.running === true) {
      swiper.autoplay.stop();
    }
  };

  return (
    <section className="projects-section" id="projetos">
      <div className="section-container">
        <h2 data-key="projetos-titulo">{menuLabels["projetos-titulo"]}</h2>
        <p
          data-key="projetos-descricao"
          dangerouslySetInnerHTML={{ __html: menuLabels["projetos-descricao"] }}
        ></p>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            modules={[Autoplay, Mousewheel]}
            slidesPerView={3}
            spaceBetween={40}
            loop={true}
            centeredSlides={true}
            speed={1200}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            mousewheel={{ forceToAxis: true }}
            className="projects-swiper"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop();
            }}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={menuLabels[project.descriptionKey]}
                  link={project.link}
                  dataKeyDesc={project.descriptionKey}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
