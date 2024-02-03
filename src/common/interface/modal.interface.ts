export interface IModal {
  isOpen: boolean
  title?: string
  body: React.ReactNode
  onCloseButtonLabel?: string
  onCloseButton: () => void
  confirmButtonLabel?: string
  confirmButton: () => void
}
