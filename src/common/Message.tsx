import styles from './style/message.module.scss'
import { IMessage } from './interface/message.interface'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
/** 로딩메세지, 에러메세지 컴포넌트 */
const Message = ({ type }: IMessage) => {
  return <div className={cx('container')}>dfdfdfdfdfdf</div>
}

export default Message
