import { BsFiletypeScss } from 'react-icons/bs'
import { FaFigma } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'
import { GrReactjs } from 'react-icons/gr'
import { IoLogoJavascript } from 'react-icons/io'
import { PiFileHtml } from 'react-icons/pi'
import { SiReactquery, SiRedux } from 'react-icons/si'
import { TbBrandStorybook, TbBrandTypescript } from 'react-icons/tb'

import st from './Scils.module.scss'

export const Scils = () => {
  const dataScills = [
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '1',
      textSkill: 'REACT',
      width: '180px',
    },
    {
      iconSkill: <SiRedux className={st.icon} />,
      id: '2',
      textSkill: 'REDUX',
      width: '180px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '3',
      textSkill: 'REACT TOOLKIT',
      width: '300px',
    },
    {
      iconSkill: <FaFigma className={st.icon} />,
      id: '4',
      textSkill: 'FIGMA',
      width: '180px',
    },
    {
      iconSkill: <TbBrandStorybook className={st.icon} />,
      id: '5',
      textSkill: 'STORYBOOK',
      width: '240px',
    },
    {
      iconSkill: <FaGitAlt className={st.icon} />,
      id: '6',
      textSkill: 'GIT',
      width: '180px',
    },
    {
      iconSkill: <SiReactquery className={st.icon} />,
      id: '7',
      textSkill: 'RTK QUERU',
      width: '240px',
    },
    {
      iconSkill: <IoLogoJavascript className={st.icon} />,
      id: '8',
      textSkill: 'JAVASCRIPT',
      width: '240px',
    },
    {
      iconSkill: <TbBrandTypescript className={st.icon} />,
      id: '9',
      textSkill: 'TYPESCRIPT',
      width: '260px',
    },
    {
      iconSkill: <PiFileHtml className={st.icon} />,
      id: '8',
      textSkill: 'HTML&CSS',
      width: '240px',
    },
    {
      iconSkill: <BsFiletypeScss className={st.icon} />,
      id: '9',
      textSkill: 'SCSS',
      width: '180px',
    },
  ]

  return (
    <div className={st.main}>
      {dataScills.map(({ iconSkill, id, textSkill, width }) => {
        return (
          <div className={st.textScil} key={id} style={{ width }}>
            <span className={st.text}>{textSkill}</span>
            <div className={st.iconScil}>{iconSkill}</div>
          </div>
        )
      })}
    </div>
  )
}
