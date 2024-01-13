import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

import { DataProject } from '../../constants/constantDataProjects'
import { BlockPicturesAndButtons } from './blockPicturesAndButtons/BlockPicturesAndButtons'
import { DescriptionProject } from './descriptionProject/DescriptionProject'

type PropsType = {
  currentData: DataProject
  currentFotoProject: string
  handleClickLeftArrowNewProjects: () => void
  handleClickLeftNextFotoProject: () => void
  handleClickRightNextFotoProject: () => void
  handleClickRighttArrowNewProjects: () => void
  handleOnclichSwitch: (nameFoto: string) => void
}

export const Works = ({
  currentData,
  currentFotoProject,
  handleClickLeftArrowNewProjects,
  handleClickLeftNextFotoProject,
  handleClickRightNextFotoProject,
  handleClickRighttArrowNewProjects,
  handleOnclichSwitch,
}: PropsType) => {
  return (
    <div className={st.main} id={'works'}>
      <div className={st.leftArrowWrapper}>
        <BsFillArrowLeftSquareFill
          className={st.leftArrowBig}
          onClick={handleClickLeftArrowNewProjects}
        />
      </div>
      <div className={st.frame}>
        <DescriptionProject currentData={currentData} />
        <BlockPicturesAndButtons
          currentData={currentData}
          currentFotoProject={currentFotoProject}
          handleClickLeftNextFotoProject={handleClickLeftNextFotoProject}
          handleClickRightNextFotoProject={handleClickRightNextFotoProject}
          handleOnclichSwitch={handleOnclichSwitch}
        />
      </div>
      <div className={st.rightArrowWrapper}>
        <BsFillArrowRightSquareFill
          className={st.rightArrowBig}
          onClick={handleClickRighttArrowNewProjects}
        />
      </div>
    </div>
  )
}
