import st from './Info.module.scss'

import fonFoto from '../../assets/image/fon1.jpg'
import myFotoBlack from '../../assets/image/meY.png'
import { ShortInfo } from '../../components/shortInfo/ShortInfo'

export const Info = () => {
  return (
    <>
      <ShortInfo />
      <div className={st.blokTwoImg}>
        <img alt={'Моя фотография'} className={st.image} src={myFotoBlack} />
        <img alt={'Фотография фона'} className={st.imageFon} src={fonFoto} />
      </div>
    </>
  )
}
