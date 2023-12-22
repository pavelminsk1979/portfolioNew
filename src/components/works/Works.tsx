import { useState } from 'react'

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

import { DataProject } from '../../page/content/Content'

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
    <div className={st.main}>
      <div className={st.leftArrowWrapper}>
        <BsFillArrowLeftSquareFill
          className={st.leftArrowBig}
          onClick={handleClickLeftArrowNewProjects}
        />
      </div>
      <div className={st.frame}>
        <div className={st.blockTitleProjectAndTechnoloies}></div>
        <div className={st.blockImgAndButton}>
          <img alt={'фото проэкта '} className={st.imgProject} src={currentFotoProject} />
          <div className={st.blockSwitch}>
            <BiSolidLeftArrow className={st.arrowSwitch} onClick={handleClickLeftNextFotoProject} />
            {currentData.imgsAloneProject.map(el => {
              return el === currentFotoProject ? (
                <div className={st.activeElem} key={el} onClick={() => handleOnclichSwitch(el)} />
              ) : (
                <div
                  className={st.notActiveElem}
                  key={el}
                  onClick={() => handleOnclichSwitch(el)}
                />
              )
            })}
            <BiSolidRightArrow
              className={st.arrowSwitch}
              onClick={handleClickRightNextFotoProject}
            />
          </div>
          <button className={st.outputButton}>ВХОД НА ПРЕЗЕНТАЦИЮ ПРОЕКТА</button>
        </div>
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
