import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useWindowWidth } from "hooks/useWindowWidth";

const Slider: React.FC<{
  images: string[];
  imageStyle?: string;
  slideStyle?: string;
  swiperStyle?: string;
  maxSlides: number;
}> = ({ images, imageStyle, slideStyle, swiperStyle, maxSlides }) => {
  const width = useWindowWidth();

  const slidesPerViewConfig = (width: number) => {
    if (width > 1024) {
      return maxSlides;
    } else if (width < 1024 && width > 500) {
      return 2;
    } else {
      return 1;
    }
  };

  return (
    <Swiper
      slidesPerView={slidesPerViewConfig(width)}
      modules={[Navigation]}
      navigation
      className={`w-full select-none ${swiperStyle}`}
    >
      {images.map((image) => {
        return (
          <SwiperSlide className={`h-full ${slideStyle}`} key={image}>
            <img src={image} alt="productImage" className={imageStyle} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
