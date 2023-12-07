import { useNavigate } from 'react-router-dom'

export const Content = () => {
  const navigate = useNavigate()
  const handleOnClickNavigate = () => {
    navigate('/info')
  }

  return (
    <div>
      <div onClick={handleOnClickNavigate}>кратко</div>
      <div>ГЛАВНАЯ</div>
    </div>
  )
}
