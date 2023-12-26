import st from '../Works.module.scss'

import { DataProject } from '../../../constants/constantDataProjects'

type PropsType = {
  currentData: DataProject
}

export const DescriptionProject = ({ currentData }: PropsType) => {
  return (
    <div className={st.blockTitleProjectAndTechnoloies}>
      <p>Приложение разработано на основе следующих технологий: </p>
      <p>{currentData.technologies}</p>
      <br />
      <p>Для входа в приложение можно воспользоваться: </p>
      <span>E-mail : </span> <span>{currentData.email}</span>
      <br />
      <span>password : </span> <span>{currentData.password}</span>
    </div>
  )
}
