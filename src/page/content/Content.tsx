import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'
import { Main } from '../../components/main/Main'
import { Scils } from '../../components/scils/Scils'

export const Content = () => {
  return (
    <div className={st.main}>
      <Navigation />
      <Main />
      <Scils />

      {/* <div className={st.main}>блок на всю страницу</div>*/}
    </div>
  )
}
