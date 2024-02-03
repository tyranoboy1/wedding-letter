import { useModalContext } from '@/contexts/ModalContext'
import { useEffect, useRef } from 'react'
import { IWeddingData } from '../section/interface/section.interface'

const AttendCountModal = ({ wedding }: { wedding: IWeddingData }) => {
  const { open, close } = useModalContext()
  const $input = useRef<HTMLInputElement>(null)
  const haveSeenModal = localStorage.getItem('@have-seen-modal')
  useEffect(() => {
    if (haveSeenModal === 'true') {
      return
    }
    open({
      title: `현재 참석자: ${wedding.attendCount}명`,
      body: (
        <div>
          <input
            ref={$input}
            placeholder="참석 가능 인원을 추가해주세요"
            style={{ width: '100%' }}
            type="number"
          />
        </div>
      ),
      onCloseButton: () => {
        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
      confirmButton: async () => {
        if ($input.current === null) {
          return
        }
        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        localStorage.setItem('@have-seen-modal', 'true')
        close()
      },
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return null
}

export default AttendCountModal
