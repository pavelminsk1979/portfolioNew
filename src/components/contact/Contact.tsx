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
        </div>
        <div className={st.minBlockLink}>
          <img alt={'фото проэкта '} className={st.imgPhoneTelegramMail} src={imgTelegram} />
        </div>
        <div className={st.minBlockLink}>
          <img alt={'фото проэкта '} className={st.imgPhoneTelegramMail} src={imgMail} />
        </div>
      </div>

      <FormSendMessage />
    </div>
  )
}
