import { Fade } from 'react-awesome-reveal'

import st from './Contact.module.scss'

import imgMail from '../../assets/image/mail.png'
import imgPhone from '../../assets/image/phone.png'
import imgTelegram from '../../assets/image/telegr.jpg'
import { FormSendMessage } from './formSendMessage/FormSendMessage'

export const Contact = () => {
  return (
    <div className={st.main} id={'contact'}>
      <div className={st.blocLink}>
        <Fade>
          <div className={st.minBlockLink}>
            <img alt={'фото телефона '} className={st.imgPhoneTelegramMail} src={imgPhone} />
            <span className={st.contactPhoneTelegrMail}>+375 29 645 78 48</span>
          </div>
          <div className={st.minBlockLink}>
            <a className={st.linkTelegram} href={'https://t.me/pavvelpotapov'}>
              <img alt={'фото телеграм '} className={st.imgPhoneTelegramMail} src={imgTelegram} />
            </a>

            <span className={st.contactPhoneTelegrMail}>https://t.me/pavvelpotapov</span>
          </div>
          <div className={st.minBlockLink}>
            <img alt={'фото почты '} className={st.imgPhoneTelegramMail} src={imgMail} />
            <span className={st.contactPhoneTelegrMail}>pavvel.potapov@gmail.com</span>
          </div>
        </Fade>
      </div>

      <FormSendMessage isUseForModal={false} />
    </div>
  )
}
