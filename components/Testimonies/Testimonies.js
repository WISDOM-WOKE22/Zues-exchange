import './Testimonies.css'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import TestimonyBox from './UI/TestimonyBox'
import Image1 from '../../assets/client1.jpg'
import Image2 from '../../assets/client2.jpg'
import Image3 from '../../assets/client3.jpg'
import Image4 from '../../assets/client4.jpg'
import Image5 from '../../assets/client5.jpg'
import Image6 from '../../assets/client6.jpg'
import Image7 from '../../assets/client7.jpg'

export default function Testimonies() {
  return (
    <div className='testimonies-container'>
      <div className='testimonies-wrapper'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonyBox image={Image1} name={'Boe john'} id={'anonymous'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image2} name={'Jack Rayh'} id={'CEO of Q-tech'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image3} name={'Serena Rose'} id={'anonymous'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image4} name={'Dan Axlerode'} id={'Business man'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image5} name={'Boe john'} id={'CEO'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image6} name={'Marry Park'} id={'Engineer'}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonyBox image={Image7} name={'Boe john'} id={'anonymous'}/>
        </SwiperSlide>
      </Swiper>
         
      </div>
    </div>
  )
}
