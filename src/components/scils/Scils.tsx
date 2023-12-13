import { GrReactjs } from 'react-icons/gr'

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
      iconSkill: <GrReactjs className={st.icon} />,
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
      iconSkill: <GrReactjs className={st.icon} />,
      id: '4',
      textSkill: 'FIGMA',
      width: '180px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '5',
      textSkill: 'STORYBOOK',
      width: '240px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '6',
      textSkill: 'GIT',
      width: '180px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '7',
      textSkill: 'RTK QUERU',
      width: '240px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '8',
      textSkill: 'JAVASCRIPT',
      width: '240px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '9',
      textSkill: 'TYPESCRIPT',
      width: '240px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '8',
      textSkill: 'HTML&CSS',
      width: '240px',
    },
    {
      iconSkill: <GrReactjs className={st.icon} />,
      id: '9',
      textSkill: 'SASS',
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

{
  /*   <div className={st.textScil}>
              <span className={st.text}>REACT</span>
      
              <div className={st.iconScil}>
                <GrReactjs className={st.icon} />
              </div>
            </div>*/
}
