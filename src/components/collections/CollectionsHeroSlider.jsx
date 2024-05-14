import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import CollectionSliderItem from './CollectionSliderItem';
import LazyHeroSlider from '../lazy/LazyHeroSlider';

export default function CollectionsHeroSlider() {
  const [slides, setSlides] = useState([]);

  const getSlides = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE}/money_collections/api/?param=t`,
      );
      const data = await response.json();
      if (!data.results.length) {
        const response = await fetch(`${import.meta.env.VITE_API_BASE}/money_collections/api/`);
        const data = await response.json();
        return setSlides(data.results);
      }
      setSlides(data.results);
    } catch (e) {
      console.error;
    }
  };

  useEffect(() => {
    getSlides();
  }, []);
  return (
    <Swiper
      className='h-96 w-full'
      slidesPerView={1}
      autoplay={{ delay: 10000 }}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {slides.length <= 0 ? (
        <SwiperSlide>
          <LazyHeroSlider />
        </SwiperSlide>
      ) : (
        slides.map((data) => (
          <SwiperSlide key={data.id} className='w-full'>
            <CollectionSliderItem {...data} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
}
