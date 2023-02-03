// import { Box } from "@chakra-ui/react";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper, { FreeMode, Pagination } from "swiper";
// import SwiperCard from "./SwiperCard";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [FreeMode, Pagination],

  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    clickable: true,
  },

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

export default function Slider() {
  return (
    // <Box>
      <Swiper>
        <SwiperSlide>
          {/* <SwiperCard>1</SwiperCard> */}1
        </SwiperSlide>
      </Swiper>
    // </Box>
  );
}
