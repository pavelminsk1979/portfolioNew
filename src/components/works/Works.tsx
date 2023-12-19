import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

/*export const Works = () => {
  return (
    <div className={st.main}>
      <BsFillArrowLeftSquareFill className={st.leftArrowBig} />
      <div className={st.frame}></div>
      <BsFillArrowRightSquareFill className={st.rightArrowBig} />
    </div>
  )
}*/

export const Works = () => {
  return (
    <div className={st.main}>
      <div className={st.leftArrowWrapper}>
        <BsFillArrowLeftSquareFill className={st.leftArrowBig} />
      </div>
      <div className={st.frame}></div>
      <div className={st.rightArrowWrapper}>
        <BsFillArrowRightSquareFill className={st.rightArrowBig} />
      </div>
    </div>
  )
}
