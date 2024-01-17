import { Fade } from 'react-awesome-reveal'

import st from './Scils.module.scss'

import { DATA_SCILLS } from '../../constants/constantDataScills'

export const Scils = () => {
  return (
    <div className={st.main}>
      {DATA_SCILLS.map(({ iconSkill, id, textSkill }) => {
        return (
          <Fade key={id}>
            <div className={st.skillItem}>
              <div className={st.iconWraper}>
                <div className={st.icon}>{iconSkill}</div>
              </div>
              <div className={st.textWraper}>
                <span className={st.text}>{textSkill}</span>
              </div>
            </div>
          </Fade>
        )
      })}
    </div>
  )
}
