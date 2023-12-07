import { useNavigate } from 'react-router-dom'

export const Info = () => {
  const navigate = useNavigate()
  const handleOnClickNavigate = () => {
    navigate('/')
  }

  return (
    <div>
      <div onClick={handleOnClickNavigate}>Вернутся на главную</div>
      <div>КРАТКО ОБО МНЕ </div>
    </div>
  )
}
