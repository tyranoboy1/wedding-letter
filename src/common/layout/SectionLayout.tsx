import classNames from 'classnames/bind'
import styles from './style/sectionLayout.module.scss'

const cx = classNames.bind(styles)
const SectionLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <section className={cx(['container', className])}>{children}</section>
}

export default SectionLayout
