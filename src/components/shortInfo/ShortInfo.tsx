import { useNavigate } from 'react-router-dom'

import st from './ShortInfo.module.scss'

export const ShortInfo = () => {
  const navigate = useNavigate()
  const handleOnClickNavigate = () => {
    navigate('/')
  }

  return (
    <div className={st.main}>
      <div onClick={handleOnClickNavigate}>Вернутся на главную</div>
      <div>КРАТКО ОБО МНЕ</div>
    </div>
  )
}
