import { useState } from 'react'

import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Works.module.scss'

import imgSamuraiWai from '../../assets/image/fotoSamuraiWay.jpg'
import imgMySocial from '../../assets/image/mySamuraiWai.jpg'
import imgSamuraiWaiLogin from '../../assets/image/mySamuraiWaiLogin.jpg'
import imgSocial from '../../assets/image/social.png'
import imgTask1 from '../../assets/image/task1jpg.jpg'
import imgTask2 from '../../assets/image/task2.jpg'
import imgTask3 from '../../assets/image/task3.jpg'
import imgTask4 from '../../assets/image/task4jpg.jpg'
import imgTaskMain from '../../assets/image/taskMain.jpg'

export const Works = () => {
  const data = [
    { id: 0, imgsAloneProject: [imgSocial, imgSamuraiWai, imgMySocial, imgSamuraiWaiLogin] },
    { id: 1, imgsAloneProject: [imgTaskMain, imgTask1, imgTask2, imgTask3, imgTask4] },
  ]
  const [currentData, setCurrentData] = useState(data[0])

  const [currentFotoProject, setCurrentFotoProject] = useState(currentData.imgsAloneProject[0])

  const handleClickLeftArrowNewProjects = () => {
    let currentId = currentData.id

    if (currentId === 0) {
      currentId = data.length
    }

    setCurrentData(data[currentId - 1])
    setCurrentFotoProject(data[currentId - 1].imgsAloneProject[0])
  }
  const handleClickRighttArrowNewProjects = () => {
    let currentId = currentData.id

    if (currentId === data.length - 1) {
      currentId = -1
    }
    setCurrentData(data[currentId + 1])
    setCurrentFotoProject(data[currentId + 1].imgsAloneProject[0])
  }

  const handleClickLeftNextFotoProject = () => {
    let curentIndex = currentData.imgsAloneProject.indexOf(currentFotoProject)

    if (curentIndex === 0) {
      curentIndex = currentData.imgsAloneProject.length
    }

    setCurrentFotoProject(currentData.imgsAloneProject[curentIndex - 1])
  }
  const handleClickRightNextFotoProject = () => {
    let curentIndex = currentData.imgsAloneProject.indexOf(currentFotoProject)

    if (curentIndex === currentData.imgsAloneProject.length - 1) {
      curentIndex = -1
    }

    setCurrentFotoProject(currentData.imgsAloneProject[curentIndex + 1])
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
