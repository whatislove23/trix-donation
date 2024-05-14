import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import LazyOrganizationCard from '../lazy/LazyOrganizationCard.jsx';
import OrganisationCard from './OrganisationCard.jsx';
import Title from '../Title';
import useScreenWidth from '../../hooks/useScreenWidth';

export default function OrganisationsSlider() {
  const screenWidth = useScreenWidth();
  const [organisations, setOrganisations] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/organizations/api/organizations`)
      .then((data) => data.json())
      .then(setOrganisations);
  }, []);
  return (
    <div className='mx-auto w-full max-w-screen-xl '>
      <Title>Волонтери та організації</Title>
      <Swiper
        className='w-full px-2 pb-2 pt-6 sm:pt-9 lg:pt-14 '
        slidesPerView={
          screenWidth <= 350 ? 1 : screenWidth <= 640 ? 2 : screenWidth >= 1024 ? 4 : 3
        }
        spaceBetween={screenWidth <= 350 ? 8 : screenWidth < 640 ? 8 : 24}
        autoplay={{ delay: 10000 }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}>
        {organisations.length <= 0
          ? [1, 2, 3, 4, 5].map((data) => (
              <SwiperSlide key={data}>
                <LazyOrganizationCard {...data} />
              </SwiperSlide>
            ))
          : organisations.map((data) => (
              <SwiperSlide key={data.organization_id}>
                <OrganisationCard {...data} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
