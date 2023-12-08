import st from './Info.module.scss'

import myFotoBlack from '../../assets/image/meY.png'
import { ShortInfo } from '../../components/shortInfo/ShortInfo'

export const Info = () => {
  return (
    <div className={st.main}>
      <ShortInfo />
      <img alt={'Моя фотография'} className={st.image} src={myFotoBlack} />
    </div>
  )
}
