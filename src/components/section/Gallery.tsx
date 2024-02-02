import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import { useState } from 'react'
import ImgView from '../imgViewer/ImgView'
import styles from './style/gallery.module.scss'

/** 갤러리 컴포넌트 */
const cx = classNames.bind(styles)
const Gallery = ({ images }: { images: string[] }) => {
  /** 선택된 사진의 인덱스 번호 */
  const [selectedIdx, setSelectedIdx] = useState<number>(-1)

  const isOpen = selectedIdx > -1
  /** 선택된 사진의 인덱스를 가져오는 함수 */
  const getSelectIdx = (idx: number) => {
    setSelectedIdx(idx)
  }
  /** 이미지 뷰어 끄는 함수 */
  const handleClose = () => {
    setSelectedIdx(-1)
  }
  return (
    <>
      <SectionLayout title={'사진첩'}>
        <ul className={cx('wrap-images')}>
          {images.map((src, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => getSelectIdx(idx)}
            >
              <img src={src} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </SectionLayout>
      <ImgView
        images={images}
        isOpen={isOpen}
        selectedIdx={selectedIdx}
        handleClose={handleClose}
      />
    </>
  )
}

export default Gallery
