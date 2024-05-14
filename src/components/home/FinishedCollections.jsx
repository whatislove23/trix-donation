import Title from '../Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import CollectionCard from '../CollectionCard';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

import useScreenWidth from '../../hooks/useScreenWidth';

import { useEffect, useState } from 'react';

import LazyCollectionItem from '../lazy/LazyCollectionItem';

export default function FinishedCollections() {
  let screenWidth = useScreenWidth();
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
    <div id='finished' className='mx-auto w-full max-w-screen-xl'>
      <Title>Завершені збори</Title>

      <div className='mt-9 w-full px-4 sm:mt-12 lg:mt-14'>
        <Swiper
          className='w-full '
          loop={true}
          slidesPerView={screenWidth < 370 ? 1 : screenWidth <= 640 ? 2 : 3}
          spaceBetween={20}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          {slides.length <= 0
            ? [1, 2, 3, 4].map((item) => (
                <SwiperSlide key={item}>
                  <LazyCollectionItem />
                </SwiperSlide>
              ))
            : slides.map((element) => (
                <SwiperSlide key={element.id}>
                  <CollectionCard {...element} />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}
