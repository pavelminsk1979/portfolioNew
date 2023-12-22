import { useState } from 'react'

import imgSamuraiWai from '../assets/image/fotoSamuraiWay.jpg'
import imgLearnDecks1 from '../assets/image/learnDecks1.jpg'
import imgLearnDecks2 from '../assets/image/learnDecks2.jpg'
import imgLearnDecks3 from '../assets/image/learnDecks3.jpg'
import imgLearnDecks4 from '../assets/image/learnDecks4.jpg'
import imgLearnDecks5 from '../assets/image/learnDecks5.jpg'
import imgLearnDeckMains from '../assets/image/learnDecksMain.jpg'
import imgMySocial from '../assets/image/mySamuraiWai.jpg'
import imgSamuraiWaiLogin from '../assets/image/mySamuraiWaiLogin.jpg'
import imgSocial from '../assets/image/social.png'
import imgTask1 from '../assets/image/task1jpg.jpg'
import imgTask2 from '../assets/image/task2.jpg'
import imgTask3 from '../assets/image/task3.jpg'
import imgTask4 from '../assets/image/task4jpg.jpg'
import imgTaskMain from '../assets/image/taskMain.jpg'

export const useChangeDataCurrentProject = () => {
  const data = [
    { id: 0, imgsAloneProject: [imgSocial, imgSamuraiWai, imgMySocial, imgSamuraiWaiLogin] },
    { id: 1, imgsAloneProject: [imgTaskMain, imgTask1, imgTask2, imgTask3, imgTask4] },
    {
      id: 2,
      imgsAloneProject: [
        imgLearnDeckMains,
        imgLearnDecks1,
        imgLearnDecks2,
        imgLearnDecks3,
        imgLearnDecks4,
        imgLearnDecks5,
      ],
    },
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

  return {
    currentData,
    currentFotoProject,
    handleClickLeftArrowNewProjects,
    handleClickLeftNextFotoProject,
    handleClickRightNextFotoProject,
    handleClickRighttArrowNewProjects,
    handleOnclichSwitch,
  }
}
