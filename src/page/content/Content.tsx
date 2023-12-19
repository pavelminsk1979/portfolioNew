import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { Scils } from '../../components/scils/Scils'
import { Works } from '../../components/works/Works'

export const Content = () => {
  return (
    <div className={st.main}>
      <Navigation />
      <Main />
      <Scils />
      <Header />
      <Works />

      {/* <div className={st.main}>блок на всю страницу</div>*/}
    </div>
  )
}
