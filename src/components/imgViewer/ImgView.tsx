import React from 'react'
import classNames from 'classnames/bind'
import styles from './style/imgView.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import './style/swiper.css'
import { IImgView } from './interface/imgView.interface'

const cx = classNames.bind(styles)

const ImgView = (props: IImgView) => {
  const { images, isOpen, selectedIdx, handleClose } = props

  return isOpen ? (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('icon-close')} onClose={handleClose} />
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
const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) => {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClose}
    >
      <rect fill="white" fill-opacity="0.01" />
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="#2F88FF"
        stroke="black"
        stroke-linejoin="round"
        stroke-width="4"
      />
      <path
        d="M29.6569 18.3431L18.3432 29.6568"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      />
      <path
        d="M18.3432 18.3431L29.6569 29.6568"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
      />
    </svg>
  )
}
export default ImgView
