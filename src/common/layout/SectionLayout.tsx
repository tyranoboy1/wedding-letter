import classNames from 'classnames/bind'
import styles from './style/sectionLayout.module.scss'

const cx = classNames.bind(styles)
const SectionLayout = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: string
  title?: string
}) => {
  return (
    <section className={cx(['container', className])}>
      {title != null ? <div className={cx('txt-title')}>{title}</div> : null}
      {children}
    </section>
  )
}

export default SectionLayout
