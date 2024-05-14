import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Post({ name, description, price, images, videos }) {
  return (
    <div className='  rounded-2xl border-2 border-bg-300 p-5 sm:flex sm:items-center sm:gap-11'>
      <Swiper
        className=' h-48 w-full rounded-2xl sm:h-full md:max-w-80 lg:max-h-80 lg:max-w-[600px] '
        slidesPerView={1}
        spaceBetween={8}
        autoplay={{ delay: 10000 }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {images.map((file) => (
          <SwiperSlide key={file.id}>
            <div className=' h-full w-full overflow-hidden rounded-lg object-cover'>
              <img src={file.file} className='aspect-square h-full w-full' />
            </div>
          </SwiperSlide>
        ))}
        {videos.map((file) => (
          <SwiperSlide key={file.id}>
            <div className=' h-full w-full overflow-hidden rounded-lg object-cover'>
              <video src={file.file} controls className='aspect-auto h-full w-full'></video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-5 flex w-full flex-grow flex-col gap-5 md:min-w-80'>
        <h3 className='text-2xl font-semibold text-text-100'>{name}</h3>
        <p className='text-2xl text-text-200'>{description}</p>
        <h3 className='text-2xl font-semibold text-text-100'>
          Витрачено:<span className='text-text-200'> ₴{price}</span>
        </h3>
      </div>
    </div>
  );
}
