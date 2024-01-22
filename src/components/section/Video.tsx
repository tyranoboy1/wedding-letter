import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import styles from './style/heading.module.scss'

//TODO vido태그 작업
const cx = classNames.bind(styles)
const Video = () => {
  return (
    <SectionLayout className={cx('container')}>
      <video
        autoPlay
        muted
        loop
        controls
        poster={require('../../assets/poster.jpg')}
      >
        <source
          src={require('../../assets/main.mp4')}
          type="video/mp4"
        ></source>
      </video>
    </SectionLayout>
  )
}

export default Video
