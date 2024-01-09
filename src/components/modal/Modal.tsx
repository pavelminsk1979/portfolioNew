import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import st from './Modal.module.scss'

type PropsType = {
  children: ReactNode
}
export const Modal = ({ children }: PropsType) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button>Имя кнопки</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={st.DialogOverlay} />
      <Dialog.Content className={st.DialogContent}>
        <Dialog.Title className={st.DialogTitle}>Заголовок</Dialog.Title>
        <Dialog.Description className={st.DialogDescription}>Какойто текст</Dialog.Description>
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
