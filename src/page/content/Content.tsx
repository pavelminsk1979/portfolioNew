import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'
import { Main } from '../../components/main/Main'

export const Content = () => {
  return (
    <div className={st.main}>
      <Navigation />
      <Main />

      {/* <div className={st.main}>блок на всю страницу</div>*/}
    </div>
  )
}
