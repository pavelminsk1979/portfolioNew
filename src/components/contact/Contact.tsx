import st from './Contact.module.scss'
import { FormSendMessage } from './formSendMessage/FormSendMessage.tsx'
import imgPhone from '../../assets/image/phone.png'
import imgTelegram from '../../assets/image/telegr.jpg'
import imgMail from '../../assets/image/mail.png'

export const Contact = () => {
  return (
    <div className={st.main}>
      <div className={st.blocLink}>
        <div className={st.minBlockLink}>
          <img alt={'фото проэкта '} className={st.imgPhoneTelegramMail} src={imgPhone} />
          <span className={st.contactPhoneTelegrMail}>+375 29 645 78 48</span>
        </div>
        <div className={st.minBlockLink}>
          <a href={'https://t.me/pavvelpotapov'}>
            <img alt={'фото проэкта '} className={st.imgPhoneTelegramMail} src={imgTelegram} />
          </a>

          <span className={st.contactPhoneTelegrMail}>https://t.me/pavvelpotapov</span>
        </div>
        <div className={st.minBlockLink}>
          <img alt={'фото проэкта '} className={st.imgPhoneTelegramMail} src={imgMail} />
          <span className={st.contactPhoneTelegrMail}>pavvel.potapov@gmail.com</span>
        </div>
      </div>

      <FormSendMessage />
    </div>
  )
}
