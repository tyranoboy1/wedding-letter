import classNames from 'classnames/bind'
import React from 'react'
import Dimmed from './Dimmed'
import { IModal } from './interface/modal.interface'
import styles from './style/modal.module.scss'

const cx = classNames.bind(styles)
const Modal = ({
  isOpen,
  title,
  body,
  onCloseButtonLabel = '닫기',
  confirmButtonLabel = '확인',
  onCloseButton,
  confirmButton,
}: IModal) => {
  if (!isOpen) {
    return null
  }

  return (
    <Dimmed>
      <div className={cx('wrap-modal')}>
        <div className={cx('wrap-body')}>
          <div className={cx('wrap-content')}>
            {title ? <div>{title}</div> : null}
            {body}
          </div>
          <div className={cx('wrap-buttons')}>
            <button onClick={onCloseButton}>{onCloseButtonLabel}</button>
            <button onClick={confirmButton}>{confirmButtonLabel}</button>
          </div>
        </div>
      </div>
    </Dimmed>
  )
}
export default Modal
