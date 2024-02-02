import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react'
import { IAccordion } from './interface/accordion.interface'
import styles from './style/accordion.module.scss'

const cx = classNames.bind(styles)
const Accordion = ({ label, children }: PropsWithChildren<IAccordion>) => {
  /** 아코디언 박스 펼치기 관리 상태 */
  const [expanded, setExpanded] = useState<boolean>(false)

  /** 아이콘 클릭할때 펼치는 상태 변경해주는 함수 */
  const iconArrowDownClick = () => {
    setExpanded((prev) => !prev)
  }
  return (
    <div className={cx('wrap-accoridon', expanded ? 'open' : 'close')}>
      <div className={cx('wrap-header')} onClick={iconArrowDownClick}>
        <span>{label}</span>
        <IconArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}
const IconArrowDown = ({ className }: { className: string }) => {
  return (
    <svg version="1.1" viewBox="0 0 512 512" className={className}>
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}

export default Accordion
