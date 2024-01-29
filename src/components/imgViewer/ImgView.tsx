import React from 'react'
import classNames from 'classnames/bind'
import styles from './style/imgView.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style/swiper.css'
import { IImgView } from './interface/imgView.interface'

const cx = classNames.bind(styles)
// TODO letter 작업
// TODO 테스트 확인
const ImgView = (props: IImgView) => {
  const { images, isOpen, selectedIdx, handleClose } = props

  return isOpen ? (
    <div className={cx('dimmed')}>
      <button type="button" onClick={handleClose}>
        취소
      </button>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((item, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={item} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  ) : null
}

export default ImgView
