import { useNavigate } from 'react-router-dom'

import st from './ShortInfo.module.scss'

import telegramImage from '../../assets/image/telegr.jpg'

export const ShortInfo = () => {
  const navigate = useNavigate()

  const handleOnClickNavigate = () => {
    navigate('/')
  }

  document.body.classList.toggle('dark-mode', true)

  const telegramFoto = {
    backgroundImage: `url(${telegramImage})`,
  }

  return (
    <div className={st.main}>
      <div className={st.header} onClick={handleOnClickNavigate}>
        <span className={st.textReturnMain} onClick={handleOnClickNavigate}>
          вернуться на главную
        </span>
      </div>

      <div className={st.blockContent}>
        <div className={st.frame}>
          <div className={st.upperAngles}>
            <div className={st.upLt} />
            <div className={st.upRt} />
          </div>

          <div className={st.blockText}>
            <div className={st.text}>
              <p className={st.contentText}>
                Павел Потапов. Фронденд разработчик. Мой стек технологий включает: React,Redux,Redux
                Toolkit,RTK Query,JavaScript,TypeScript, GIT , SCSS. Покрытие кода тестами.Имею опыт
                работы с различными UI-библиотеками.Опыт работы в комерческой разработке 1 год 6
                месяцев. <br /> pavvel.potapov@gmail.com
                {/*   <br />
                https://t.me/pavvelpotapov*/}
              </p>
            </div>
          </div>

          <div className={st.lowerAngles}>
            <div className={st.lowLt} />
            <div className={st.lowRt} />
          </div>
        </div>
      </div>
      <div className={st.pictureBlock}>
        <a href={'https://t.me/pavvelpotapov'}>
          <div className={st.picture} style={telegramFoto}></div>
        </a>
      </div>
    </div>
  )
}
