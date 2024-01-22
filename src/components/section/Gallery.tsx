import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import styles from './style/gallery.module.scss'

// TODO Swipper 기능 구현
/** 갤러리 컴포넌트 */
const cx = classNames.bind(styles)
const Gallery = ({ images }: { images: string[] }) => {
  return (
    <SectionLayout title={'사진첩'}>
      <ul className={cx('wrap-images')}>
        {images.map((src, idx) => (
          <li key={idx} className={cx('wrap-images')}>
            <img src={src} alt="사진첩 이미지" />
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Gallery
