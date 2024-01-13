import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

import { CgMenuRound } from 'react-icons/cg'
import { SlClose } from 'react-icons/sl'

import st from './Navigation.module.scss'

import { FormSendMessage } from './contact/formSendMessage/FormSendMessage'
import { Modal } from './modal/Modal'
import { SwitchComponent } from './switchComponent/SwitchComponent'

export const Navigation = () => {
  const navigate = useNavigate()
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)

  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOnClickNavigate = () => {
    navigate('/info')
  }

  const handlerOnChackedChange = (checked: boolean) => {
    document.body.classList.toggle('dark-mode', checked)
  }

  const handleCgMenuRoundIconClick = () => {
    setIsOpenMenuMobile(true)
  }

  const handleSlCloseIconClick = () => {
    setIsOpenMenuMobile(false)
  }

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <div className={st.main}>
      <div className={st.block}>
        {isOpenMenuMobile ? (
          <SlClose className={st.iconClose} onClick={handleSlCloseIconClick} />
        ) : (
          <CgMenuRound className={st.menuBurger} onClick={handleCgMenuRoundIconClick} />
        )}

        <span className={st.headersText} onClick={handleOnClickNavigate}>
          КРАТКО
        </span>

        <Link className={st.headersText} offset={-60} smooth to={'works'}>
          ПРОЕКТЫ
        </Link>
        <Link className={st.headersText} smooth to={'contact'}>
          КОНТАКТЫ
        </Link>
        <span className={st.headersTextQestion} onClick={handleOpenModal}>
          ЗАДАТЬ ВОПРОС
        </span>
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
          <FormSendMessage isUseForModal />
        </Modal>
        <SwitchComponent handlerOnChackedChange={handlerOnChackedChange} />
      </div>
    </div>
  )
}
