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

      <div className={st.blockContent}>
        <div className={st.frame}>
          <div className={st.upperAngles}>
            <div className={st.upLt} />
            <div className={st.upRt} />
          </div>

          <div className={st.blockText}>
            <div className={st.text}>
              <p>
                Павел Потапов. Фронденд разработчик. Мой стек технологий включает: React,
                Redux,Redux Toolkit, RTK Query, JavaScript,TypeScript,GIT , SCSS. Разрабатываю
                компоненты, покрываю код тестами.Имею опыт работы с различными UI-библиотеками.Опыт
                работы в комерческой разработке 1 год 6 месяцев. <br /> pavvel.potapov@gmail.com
                <br />
                https://t.me/pavvelpotapov
              </p>
            </div>
          </div>

          <div className={st.lowerAngles}>
            <div className={st.lowLt} />
            <div className={st.lowRt} />
          </div>
        </div>
      </div>
      <div className={st.switchDarkTheme}>
        <SwitchComponent handlerOnChackedChange={handlerOnChackedChange} />
      </div>
    </div>
  )
}
