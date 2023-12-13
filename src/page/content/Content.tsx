import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'

export const Content = () => {
  return (
    <div className={st.main}>
      <Navigation />

      <div className={st.main}>блок на всю страницу</div>
      <div className={st.main}>блок на всю страницу</div>
    </div>
  )
}
