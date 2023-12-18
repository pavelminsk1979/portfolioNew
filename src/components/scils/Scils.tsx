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
  const screenWidth = window.innerWidth

  const isScreenSizeBig = screenWidth > 700

  console.log(isScreenSizeBig)

  const dataScills = [
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '1',
      textSkill: 'REACT',
      width: '180px',
      widthMobile: '100px',
    },
    {
      iconSkill: <SiRedux className={st.icon} />,
      id: '2',
      textSkill: 'REDUX',
      width: '180px',
      widthMobile: '100px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '3',
      textSkill: 'REACT TOOLKIT',
      width: '300px',
      widthMobile: '150px',
    },
    {
      iconSkill: <FaFigma className={st.icon} />,
      id: '4',
      textSkill: 'FIGMA',
      width: '180px',
      widthMobile: '100px',
    },
    {
      iconSkill: <TbBrandStorybook className={st.icon} />,
      id: '5',
      textSkill: 'STORYBOOK',
      width: '240px',
      widthMobile: '130px',
    },
    {
      iconSkill: <FaGitAlt className={st.icon} />,
      id: '6',
      textSkill: 'GIT',
      width: '180px',
      widthMobile: '100px',
    },
    {
      iconSkill: <SiReactquery className={st.icon} />,
      id: '7',
      textSkill: 'RTK QUERU',
      width: '240px',
      widthMobile: '110px',
    },
    {
      iconSkill: <IoLogoJavascript className={st.icon} />,
      id: '8',
      textSkill: 'JAVASCRIPT',
      width: '240px',
      widthMobile: '120px',
    },
    {
      iconSkill: <TbBrandTypescript className={st.icon} />,
      id: '9',
      textSkill: 'TYPESCRIPT',
      width: '260px',
      widthMobile: '120px',
    },
    {
      iconSkill: <PiFileHtml className={st.icon} />,
      id: '8',
      textSkill: 'HTML&CSS',
      width: '240px',
      widthMobile: '110px',
    },
    {
      iconSkill: <BsFiletypeScss className={st.icon} />,
      id: '9',
      textSkill: 'SCSS',
      width: '180px',
      widthMobile: '100px',
    },
  ]

  return (
    <div className={st.main}>
      {dataScills.map(({ iconSkill, id, textSkill, width, widthMobile }) => {
        return (
          <div
            className={isScreenSizeBig ? st.textScil : st.textScilMobile}
            key={id}
            style={isScreenSizeBig ? { width } : { width: widthMobile }}
          >
            <span className={isScreenSizeBig ? st.text : st.textMobile}>{textSkill}</span>
            <div className={isScreenSizeBig ? st.iconScil : st.iconScilMobile}>{iconSkill}</div>
          </div>
        )
      })}
    </div>
  )
}
