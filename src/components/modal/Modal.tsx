import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import st from './Modal.module.scss'

type PropsType = {
  children: ReactNode
  isOpenModal: boolean
  setIsOpenModal: (value: boolean) => void
}
export const Modal = ({ children, isOpenModal, setIsOpenModal }: PropsType) => {
  const handleCloseModal = () => {
    setIsOpenModal(false)
  }

  return (
    <Dialog.Root onOpenChange={handleCloseModal} open={isOpenModal}>
      <Dialog.Portal>
        <Dialog.Overlay className={st.DialogOverlay} />
        <Dialog.Content className={st.DialogContent}>
          {children}
          <Dialog.Close>
            <button className={st.IconButton}>
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
