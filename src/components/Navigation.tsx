import { useNavigate } from 'react-router-dom'

import { CgMenuRound } from 'react-icons/cg'

import st from './Navigation.module.scss'

import { SwitchComponent } from './switchComponent/SwitchComponent'
import { SlClose } from 'react-icons/sl'
import { useState } from 'react'

export const Navigation = () => {
  const navigate = useNavigate()
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)
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
        <span className={st.headersText}>ПРОЕКТЫ</span>
        <span className={st.headersText}>КОНТАКТЫ</span>
        <span className={st.headersTextQestion}>ЗАДАТЬ ВОПРОС</span>
        <SwitchComponent handlerOnChackedChange={handlerOnChackedChange} />
      </div>
    </div>
  )
}
