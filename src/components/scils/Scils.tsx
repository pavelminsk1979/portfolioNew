import st from './Scils.module.scss'

import { DATA_SCILLS } from '../../constants/constantDataScills'

export const Scils = () => {
  const screenWidth = window.innerWidth

  const isScreenSizeBig = screenWidth > 700

  return (
    <div className={st.main}>
      {DATA_SCILLS.map(({ iconSkill, id, textSkill, width, widthMobile }) => {
        return (
          <div
            className={isScreenSizeBig ? st.textScil : st.textScilMobile}
            key={id}
            style={isScreenSizeBig ? { width } : { width: widthMobile }}
          >
            <span className={isScreenSizeBig ? st.text : st.textMobile}>{textSkill}</span>
            <div className={isScreenSizeBig ? st.iconScil : st.iconScilMobile}>{iconSkill}</div>
          </div>
        )
      })}
    </div>
  )
}
