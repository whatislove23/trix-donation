import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Post() {
  return (
    <div className='  rounded-2xl border-2 border-bg-300 p-5 sm:flex sm:items-center sm:gap-11'>
      <Swiper
        className=' h-48 w-full rounded-2xl sm:h-full sm:min-w-80 lg:max-h-80 lg:min-w-[600px]'
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
        {[1, 1, 111].map((file) => (
          <SwiperSlide key={file.name}>
            <div className=' h-full w-full overflow-hidden rounded-lg object-cover'>
              {file?.type?.startsWith('image') ? (
                <img
                  // src={URL.createObjectURL(file)}
                  className='aspect-square h-full w-full'
                />
              ) : (
                <video
                  // src={URL.createObjectURL(file)}
                  controls
                  className='aspect-auto h-full w-full'
                ></video>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='mt-5 flex flex-col gap-5'>
        <h3 className='text-2xl font-semibold text-text-100'>Ми нарешті купили пікап!!!</h3>
        <p className='text-2xl text-text-200'>
          Ми з радістю повідомляємо вам про новий додаток до нашого арсеналу - пікап для ЗСУ!
          Завдяки нашим спільним зусиллям та наполегливості наша мрія стала реальністю. Цей потужний
          автомобіль допоможе нам ефективніше виконувати наші завдання та забезпечить більшу
          мобільність нашого підрозділу.
        </p>
        <h3 className='text-2xl font-semibold text-text-100'>
          Витрачено:<span className='text-text-200'>₴300000</span>{' '}
        </h3>
      </div>
    </div>
  );
}
