import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'

import st from './Header.module.scss'

export const Header = () => {
  return (
    <div className={st.block}>
      <BsFillArrowLeftSquareFill className={st.leftArrow} />
      <h2 className={st.header}>ПРОЕКТЫ</h2>
      <BsFillArrowRightSquareFill className={st.rightArrow} />
    </div>
  )
}
