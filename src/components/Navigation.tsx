import { useState } from 'react'
import { Zoom } from 'react-awesome-reveal'
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

  const [isButtonOne, setIsButtonOne] = useState(false)
  const handleOnClickNavigate = () => {
    navigate('/info')
  }

  const handlerOnChackedChange = (checked: boolean) => {
    document.body.classList.toggle('dark-mode', checked)
  }

  const handleOpenMenuMobile = () => {
    setIsOpenMenuMobile(true)
    setTimeout(() => {
      setIsButtonOne(true)
    }, 800)
  }

  const handleCloseMenuMobile = () => {
    setIsOpenMenuMobile(false)
    setIsButtonOne(false)
  }

  const handleOpenModal = () => {
    setIsOpenMenuMobile(false)
    setIsButtonOne(false)
    setIsOpenModal(true)
  }

  return (
    <div className={st.main}>
      {isOpenMenuMobile ? (
        <div className={st.blockMenuMobileIconAndButton}>
          <Zoom>
            <SlClose className={st.iconClose} onClick={handleCloseMenuMobile} />
            {isButtonOne && (
              <div className={st.blockMenuMobileButton}>
                <span className={st.buttonForMenuModal} onClick={handleOnClickNavigate}>
                  КРАТКО
                </span>

                <Link
                  className={st.buttonForMenuModal}
                  offset={-60}
                  onClick={handleCloseMenuMobile}
                  smooth
                  to={'works'}
                >
                  ПРОЕКТЫ
                </Link>
                <Link
                  className={st.buttonForMenuModal}
                  onClick={handleCloseMenuMobile}
                  smooth
                  to={'contact'}
                >
                  КОНТАКТЫ
                </Link>
                <span className={st.buttonForMenuModal} onClick={handleOpenModal}>
                  ЗАДАТЬ ВОПРОС
                </span>
                <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                  <FormSendMessage isUseForModal />
                </Modal>
              </div>
            )}
          </Zoom>
        </div>
      ) : (
        <div className={st.block}>
          <CgMenuRound className={st.menuBurger} onClick={handleOpenMenuMobile} />

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
      )}
    </div>
  )
}
