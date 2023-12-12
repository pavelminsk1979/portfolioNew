import { useNavigate } from 'react-router-dom'

import st from './ShortInfo.module.scss'

import { SwitchComponent } from '../switchComponent/SwitchComponent'

export const ShortInfo = () => {
  const navigate = useNavigate()

  const handleOnClickNavigate = () => {
    navigate('/')
  }

  const handlerOnChackedChange = (checked: boolean) => {
    document.body.classList.toggle('dark-mode', checked)
  }

  return (
    <div className={st.main}>
      <div className={st.header} onClick={handleOnClickNavigate}>
        <span onClick={handleOnClickNavigate}>вернуться на главную</span>
      </div>

      <div className={st.switchDarkTheme}>
        <SwitchComponent handlerOnChackedChange={handlerOnChackedChange} />
      </div>
    </div>
  )
}
