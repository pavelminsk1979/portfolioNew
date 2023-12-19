import { useState } from 'react'

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

import imgSamuraiWai from '../../assets/image/fotoSamuraiWay.jpg'
import imgMySocial from '../../assets/image/mySamuraiWai.jpg'
import imgSocial from '../../assets/image/social.png'
import {
  handleClickLeftArrowNewProjects,
  handleClickRighttArrowNewProjects,
} from '../../utils/utils'

export const Works = () => {
  const [currentFotoProject, setCurrentFotoProject] = useState(imgSocial)
  const imgsAloneProject = [imgSocial, imgSamuraiWai, imgMySocial]
  const handleClickLeftNextFotoProject = () => {
    let curentIndex = imgsAloneProject.indexOf(currentFotoProject)

    if (curentIndex === 0) {
      curentIndex = imgsAloneProject.length
    }

    setCurrentFotoProject(imgsAloneProject[curentIndex - 1])
  }
  const handleClickRightNextFotoProject = () => {
    let curentIndex = imgsAloneProject.indexOf(currentFotoProject)

    if (curentIndex === imgsAloneProject.length - 1) {
      curentIndex = -1
    }

    setCurrentFotoProject(imgsAloneProject[curentIndex + 1])
  }
  const handleOnclichSwitch = (nameFoto: string) => {
    setCurrentFotoProject(nameFoto)
  }

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
            {imgsAloneProject.map(el => {
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
