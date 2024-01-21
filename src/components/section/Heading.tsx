import SectionLayout from '@/common/layout/SectionLayout'
import classNames from 'classnames/bind'
import { format, getDay, parseISO } from 'date-fns'
import { DAYS } from './constants/day'
import { IHeading } from './interface/heading.interface'

import styles from './style/heading.module.scss'

const cx = classNames.bind(styles)
/** 날짜, 요일을 나타내는 헤더 컴포넌트 */
const Heading = (props: IHeading) => {
  const { date } = props
  const weddingDate = parseISO(date)

  /** 날짜 형식에 맞게 변환해주는 함수 */
  const dateFomat = (pdate: Date) => {
    return format(pdate, 'yy.MM.dd')
  }
  /** 요일 형식에 맞게 변환해주는 함수 */
  const daysFormat = (pday: Date) => {
    return getDay(pday)
  }
  return (
    <SectionLayout className={cx('container')}>
      <div className={cx('txt-date')}>{dateFomat(weddingDate)}</div>
      <div className={cx('txt-day')}>{DAYS[daysFormat(weddingDate)]}</div>
    </SectionLayout>
  )
}

export default Heading
