import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import styles from './style/gallery.module.scss'

const cx = classNames.bind(styles)
const Gallery = ({ images }: { images: string[] }) => {
  return (
    <SectionLayout title={'사진첩'}>
      <ul className={cx('wrap-images')}>
        {images.map((src, idx) => (
          <li key={idx} className={cx('wrap-image')}>
            <img src={src} alt="사진첩 이미지" />
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Gallery
