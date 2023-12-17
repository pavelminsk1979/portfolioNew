import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'
import { Main } from '../../components/main/Main'
import { Scils } from '../../components/scils/Scils'
import { Works } from '../../components/works/Works'

export const Content = () => {
  return (
    <div className={st.main}>
      <Navigation />
      <Main />
      <Scils />
      <Works />

      {/* <div className={st.main}>блок на всю страницу</div>*/}
    </div>
  )
}
