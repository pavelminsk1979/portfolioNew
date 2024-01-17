import { Zoom } from 'react-awesome-reveal'

import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Header.module.scss'

type PropsType = {
  handleClickLeftArrowNewProjects: () => void
  handleClickRighttArrowNewProjects: () => void
}

export const Header = ({
  handleClickLeftArrowNewProjects,
  handleClickRighttArrowNewProjects,
}: PropsType) => {
  return (
    <div className={st.block}>
      <BsFillArrowLeftSquareFill
        className={st.leftArrow}
        onClick={handleClickLeftArrowNewProjects}
      />
      <h2 className={st.header}>
        <Zoom>ПРОЕКТЫ</Zoom>
      </h2>
      <BsFillArrowRightSquareFill
        className={st.rightArrow}
        onClick={handleClickRighttArrowNewProjects}
      />
    </div>
  )
}
