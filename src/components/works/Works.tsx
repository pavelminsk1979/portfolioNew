import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

import {
  handleClickLeftArrowNewProjects,
  handleClickRighttArrowNewProjects,
} from '../../utils/utils'

export const Works = () => {
  return (
    <div className={st.main}>
      <div className={st.leftArrowWrapper}>
        <BsFillArrowLeftSquareFill
          className={st.leftArrowBig}
          onClick={handleClickLeftArrowNewProjects}
        />
      </div>
      <div className={st.frame}></div>
      <div className={st.rightArrowWrapper}>
        <BsFillArrowRightSquareFill
          className={st.rightArrowBig}
          onClick={handleClickRighttArrowNewProjects}
        />
      </div>
    </div>
  )
}
