import Title from "../Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

import CollectionCard from "../CollectionCard";

import useScreenWidth from "../../hooks/useScreenWidth";

const tempdata = [
  {
    title:
      "Project saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasA",
    description:
      "Lorem ipsum dolor sit amet,Project saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasAProject saddasdasdas daadasdasA consectetur adipiscing elit.",
    collected: 500,
    goal: 1000,
    id: 1,
  },
  {
    title: "Project B",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    collected: 750,
    goal: 1500,
    id: 2,
  },
  {
    title: "Project C",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    collected: 300,
    goal: 2000,
    id: 3,
  },
  {
    title: "Project D",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulasdlnaslkdanlsdkalsdlaskdlaskdalskdlasdkasldasla pariatDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulasdlnaslkdanlsdkalsdlaskdlaskdalskdlasdkasldasla pariatur.",
    collected: 900,
    goal: 1200,
    id: 4,
  },
  {
    title: "Project E",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulasdlnaslkdanlsdkalsdlaskdlaskdalskdlasdkasldasla pariat",
    collected: 200,
    goal: 800,
    id: 5,
  },
];

export default function FinishedCollections() {
  let screenWidth = useScreenWidth();
  return (
    <div id="finished" className="mx-auto max-w-screen-xl">
      <Title>Завершені збори</Title>
      <div className="mt-9 px-4 sm:mt-12 lg:mt-14">
        <Swiper
          style={{ width: screenWidth - 50, maxWidth: 1280 }}
          loop={true}
          slidesPerView={screenWidth < 370 ? 1 : screenWidth <= 640 ? 2 : 3}
          spaceBetween={20}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {tempdata.map((element) => (
            <SwiperSlide key={element.id}>
              <CollectionCard {...element} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
