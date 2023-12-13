import { GrReactjs } from 'react-icons/gr'

import st from './Scils.module.scss'

export const Scils = () => {
  return (
    <div className={st.main}>
      <div className={st.textScil}>
        <span className={st.text}>REACT</span>

        <div className={st.iconScil}>
          <GrReactjs className={st.icon} />
        </div>
      </div>
    </div>
  )
}
