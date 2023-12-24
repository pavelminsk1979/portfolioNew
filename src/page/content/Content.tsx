import { useState } from 'react'

import st from './Content.module.scss'

import { Navigation } from '../../components/Navigation'
import { Header } from '../../components/header/Header'
import { Main } from '../../components/main/Main'
import { Scils } from '../../components/scils/Scils'
import { Works } from '../../components/works/Works'
import { DATA_PROJECTS } from '../../constants/constantDataProjects'

export const Content = () => {
  const [currentData, setCurrentData] = useState(DATA_PROJECTS[0])

  const [currentFotoProject, setCurrentFotoProject] = useState(currentData.imgsAloneProject[0])

  const handleClickLeftArrowNewProjects = () => {
    let currentId = currentData.id

    if (currentId === 0) {
      currentId = DATA_PROJECTS.length
    }

    setCurrentData(DATA_PROJECTS[currentId - 1])
    setCurrentFotoProject(DATA_PROJECTS[currentId - 1].imgsAloneProject[0])
  }
  const handleClickRighttArrowNewProjects = () => {
    let currentId = currentData.id

    if (currentId === DATA_PROJECTS.length - 1) {
      currentId = -1
    }
    setCurrentData(DATA_PROJECTS[currentId + 1])
    setCurrentFotoProject(DATA_PROJECTS[currentId + 1].imgsAloneProject[0])
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
      <Navigation />
      <Main />
      <Scils />
      <Header
        handleClickLeftArrowNewProjects={handleClickLeftArrowNewProjects}
        handleClickRighttArrowNewProjects={handleClickRighttArrowNewProjects}
      />
      <Works
        currentData={currentData}
        currentFotoProject={currentFotoProject}
        handleClickLeftArrowNewProjects={handleClickLeftArrowNewProjects}
        handleClickLeftNextFotoProject={handleClickLeftNextFotoProject}
        handleClickRightNextFotoProject={handleClickRightNextFotoProject}
        handleClickRighttArrowNewProjects={handleClickRighttArrowNewProjects}
        handleOnclichSwitch={handleOnclichSwitch}
      />
    </div>
  )
}
