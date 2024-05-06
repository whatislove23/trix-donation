import Button from "./Button";
import Title from "./Title";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

import { SwiperSlide, Swiper } from "swiper/react";

import useScreenWidth from "../hooks/useScreenWidth";

export default function Join() {
  let screenWidth = useScreenWidth();
  return (
    <div id="join" className="h-screen bg-join bg-cover bg-center bg-no-repeat">
      <div className="h-screen bg-black bg-opacity-50 ">
        <div className="items-сenter mx-auto flex h-screen max-w-screen-xl flex-col justify-center p-4 py-32">
          <Title className="text-white">
            ДОЛУЧАЙСЯ ЯК <span className="text-primary-200">ВОЛОНТЕР</span> ЧИ{" "}
            <span className="text-primary-200">ФОНД</span>
          </Title>
          <div className="mt-9 md:mt-12 lg:mt-14">
            <Swiper
              className=""
              loop={true}
              slidesPerView={screenWidth >= 575 ? 2 : 1}
              spaceBetween={55}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
            >
              <SwiperSlide>
                <div className="flex max-w-[514px]  flex-col gap-2 text-white">
                  <h3 className="text-2xl font-semibold lg:text-4xl">
                    Волонтер
                  </h3>
                  <p className=" mt-5 text-xl font-medium lg:text-2xl">
                    Донатери будуть отримувати сповіщення про нагадування
                    донатити
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Донатери зможуть створити підписку на донати
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Збори будуть закриватись поступово
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Можливість додавати звіти та демонтсрувати скільки зборів
                    було закрито саме волонтером
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex max-w-[514px]  flex-col gap-2 text-white">
                  <h3 className="text-2xl font-semibold lg:text-4xl">Фонди</h3>
                  <p className=" mt-5 text-xl font-medium lg:text-2xl">
                    Створюйте різноманітні збори
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Розбиття зборів на менші, аби інфлуенсери допомагали зі
                    зборами
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Регулярні донати завдяки підпискам та нагадування людям
                  </p>
                  <p className=" text-xl font-medium lg:text-2xl">
                    Підвищення прозорості завдяки можливістю додавання звіту до
                    кожного завершеного збору
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <Button
            to="/register"
            className="  mt-14 w-full  max-w-64 self-center bg-white text-xl md:max-w-72 lg:max-w-[400px]"
          >
            Долучитись
          </Button>
        </div>
      </div>
    </div>
  );
}
