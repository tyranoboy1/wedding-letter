import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Message from './common/Message'
import Calendar from './components/section/Calendar'
import Contact from './components/section/Contact'
import Gallery from './components/section/Gallery'
import Heading from './components/section/Heading'
import { IWeddingData } from './components/section/interface/section.interface'
import Intro from './components/section/Intro'
import Invitation from './components/section/invitation'
import Map from './components/section/Map'
import Video from './components/section/Video'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<IWeddingData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Message type="loading" />
  }
  if (error) {
    return <Message type="error" />
  }
  if (wedding === null) {
    return null
  }
  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding
  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        locationName={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <Gallery images={galleryImages} />
      <Calendar date={date} />
      <Map location={location} />
      <Contact groom={groom} bride={bride} />
      {/* {JSON.stringify(wedding)} */}
    </div>
  )
}

export default App
