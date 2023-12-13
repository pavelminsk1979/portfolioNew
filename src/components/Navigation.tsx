import { useNavigate } from 'react-router-dom'

import st from './Navigation.module.scss'

import { SwitchComponent } from './switchComponent/SwitchComponent'

export const Navigation = () => {
  const navigate = useNavigate()
  const handleOnClickNavigate = () => {
    navigate('/info')
  }

  const handlerOnChackedChange = (checked: boolean) => {
    document.body.classList.toggle('dark-mode', checked)
  }

  return (
    <div className={st.main}>
      <div className={st.block}>
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
