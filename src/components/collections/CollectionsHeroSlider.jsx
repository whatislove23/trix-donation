import { Swiper, SwiperSlide } from 'swiper/react';

import CollectionSliderItem from './CollectionSliderItem';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const objectsArray = [
  {
    id: 1,
    img: 'https://gdb.rferl.org/87081C2C-4852-433F-A25D-14E790522F0A_w1200_r1.jpg',
    title:
      'Title 1 daslkmdla;slkdlasjdklaskdlasdlasdlasjldjasldjalskdlkasjdlajsldkajlskdjlaskdjlkas',
    description:
      'Description 1d aslkdjlkasjdlaksjdlaksjdlkasjdlkasjdlkajslkdjaslkdjlaskjdlaksdjlasjkl',
    collected: 500,
    goal: 10000,
  },
  {
    id: 2,
    img: 'https://imi.org.ua/upload/news/2022/07/19/62d6b21fc63a8-12_700x350.png?v=1658303263',
    title: 'Title 2',
    description: 'Description 2',
    collected: 750,
    goal: 8000,
  },
  {
    id: 3,
    img: 'https://media.slovoidilo.ua/media/publications/17/160904/ilyustratyvne-foto_large.jpg',
    title: 'Title 3',
    description: 'Description 3',
    collected: 200,
    goal: 5000,
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ_sX2OQw6EoW9gauyAwNsPdYZHU5ZLRfFI3v7VjbjoQ&s',
    title: 'Title 4',
    description: 'Description 4',
    collected: 300,
    goal: 6000,
  },
];

export default function CollectionsHeroSlider() {
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
      {objectsArray.map((data) => (
        <SwiperSlide key={data.id} className='w-full'>
          <CollectionSliderItem {...data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
