import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'

import st from '../Works.module.scss'

import { DataProject } from '../../../constants/constantDataProjects'

type PropsType = {
  currentData: DataProject
  currentFotoProject: string
  handleClickLeftNextFotoProject: () => void
  handleClickRightNextFotoProject: () => void
  handleOnclichSwitch: (nameFoto: string) => void
}

export const BlockPicturesAndButtons = ({
  currentData,
  currentFotoProject,
  handleClickLeftNextFotoProject,
  handleClickRightNextFotoProject,
  handleOnclichSwitch,
}: PropsType) => {
  return (
    <div className={st.blockImgAndButton}>
      <img alt={'фото проэкта '} className={st.imgProject} src={currentFotoProject} />
      <div className={st.blockSwitch}>
        <BiSolidLeftArrow className={st.arrowSwitch} onClick={handleClickLeftNextFotoProject} />
        {currentData.imgsAloneProject.map(el => {
          return el === currentFotoProject ? (
            <div className={st.activeElem} key={el} onClick={() => handleOnclichSwitch(el)} />
          ) : (
            <div className={st.notActiveElem} key={el} onClick={() => handleOnclichSwitch(el)} />
          )
        })}
        <BiSolidRightArrow className={st.arrowSwitch} onClick={handleClickRightNextFotoProject} />
      </div>
      <a className={st.link} href={currentData.link} rel={'noreferrer'} target={'_blank'}>
        ВХОД НА ПРЕЗЕНТАЦИЮ ПРОЕКТА
      </a>
    </div>
  )
}
