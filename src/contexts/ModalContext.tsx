import Modal from '@/common/Modal'
import { ComponentProps, createContext } from 'react'

type IModal = ComponentProps<typeof Modal>
type ModalOptions = Omit<IModal, 'open'>
interface IModalContext {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<IModalContext | undefined>(undefined)

const ModalContext = () => {}
