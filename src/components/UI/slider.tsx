import { useWindowWidth } from 'hooks/useWindowWidth'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider: React.FC<{
  images: string[]
  imageStyle?: string
  slideStyle?: string
  swiperStyle?: string
  maxSlides: number
}> = ({ images, imageStyle, slideStyle, swiperStyle, maxSlides }) => {
  const width = useWindowWidth()

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const slidesPerViewConfig = (width: number) => {
    if (width > 1024) {
      return maxSlides
    }
    if (width < 1024 && width > 500) {
      return 2
    }
    return 1
  }

  return (
    <Swiper
      slidesPerView={slidesPerViewConfig(width)}
      modules={[Navigation]}
      navigation
      className={`w-full select-none ${swiperStyle}`}
    >
      {images.map((image) => {
        return (
          <SwiperSlide key={image} className={`h-full ${slideStyle}`}>
            <img src={image} alt="productImage" className={imageStyle} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Slider
