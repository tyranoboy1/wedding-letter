import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import styles from './style/heading.module.scss'

/** 비디오 컴포넌트 */
const cx = classNames.bind(styles)
const Video = () => {
  return (
    <SectionLayout className={cx('container')}>
      <video autoPlay muted loop controls poster={'/poster.jpg'}>
        <source src={'/main.mp4'} type="video/mp4"></source>
      </video>
    </SectionLayout>
  )
}

export default Video
