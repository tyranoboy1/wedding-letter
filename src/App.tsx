import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Message from './common/Message'
import Heading from './components/section/Heading'
import { IWeddingData } from './components/section/interface/section.interface'
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
  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
