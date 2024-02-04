import Modal from '@/common/Modal'
import {
  ComponentProps,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

type IModal = ComponentProps<typeof Modal>
type ModalOptions = Omit<IModal, 'open'>
interface IModalContext {
  open: (options: ModalOptions) => void
  close: () => void
}

const Context = createContext<IModalContext | undefined>(undefined)

const initalState: IModal = {
  open: false,
  body: null,
  confirmButton: () => {},
  onCloseButton: () => {},
}
export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<IModal>(initalState)
  const $portal_root = document.getElementById('root-portal')
  const open = useCallback((options: ModalOptions) => {
    setModal({ ...options, open: true })
  }, [])
  const close = useCallback(() => {
    setModal(initalState)
  }, [])

  const values = useMemo(
    () => ({
      open,
      close,
    }),
    [open, close],
  )
  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root != null
        ? createPortal(<Modal {...modal} />, $portal_root)
        : null}
    </Context.Provider>
  )
}

export function useModalContext() {
  const values = useContext(Context)

  if (values == null) {
    throw new Error('ModalContext 안에서 사용해주세요')
  }

  return values
}
