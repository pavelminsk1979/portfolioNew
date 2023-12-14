import st from './Main.module.scss'

import myFotoImage from '../../assets/image/myFoto.jpg'
import { Scils } from '../scils/Scils'

export const Main = () => {
  const myFoto = {
    backgroundImage: `url(${myFotoImage})`,
  }

  return (
    <div className={st.main}>
      <div className={st.blockFotoAndInfo}>
        <p className={st.text}>
          Меня зовут Павел. Я фронтенд-разработчик с опытом коммерческой разработки 1.5 года.
          Специализируюсь на создании пользовательского интерфейса SPA-приложений.
        </p>
        <div className={st.foto} style={myFoto}></div>
      </div>
      <Scils />
    </div>
  )
}
