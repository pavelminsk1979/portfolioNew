import { useNavigate } from 'react-router-dom'

import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'

export const Content = () => {
  const navigate = useNavigate()
  const handleOnClickNavigate = () => {
    navigate('/info')
  }

  return (
    <div>
      <Navigation />
      <div onClick={handleOnClickNavigate}>кратко</div>
      <div className={st.main}>блок на всю страницу</div>
      <div className={st.main}>блок на всю страницу</div>
    </div>
  )
}
