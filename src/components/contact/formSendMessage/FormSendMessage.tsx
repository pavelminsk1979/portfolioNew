import { useRef } from 'react'

import emailjs from '@emailjs/browser'

import st from '../Contact.module.scss'

export const FormSendMessage = () => {
  const form = useRef(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    if (!form.current) {
      return
    }

    emailjs.sendForm('service_b411dhd', 'template_smq3ouy', form.current, 'XFYYbCE5Onbqy9kvu').then(
      result => {
        alert('Спасибо, что проявили интерес к моей персоне! Я обязательно свяжусь с вами.')
        console.log(result.text)
      },
      error => {
        alert(
          'Сообщение не доставлено, пожалуйста воспользуйтесь котактом telegram или почты gmail'
        )
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <form className={st.blockForm} onSubmit={sendEmail} ref={form}>
      <input className={st.input} name={'name'} placeholder={'Имя'} type={'text'} />
      <input
        className={st.input}
        name={'subject'}
        placeholder={'Адрес почты или Telegram'}
        type={'text'}
      />
      <textarea
        className={st.textarea}
        name={'message'}
        placeholder={'Сообщение'}
        required
      ></textarea>
      <button className={st.button} type={'submit'}>
        ОТПРАВИТЬ СООБЩЕНИЕ
      </button>
    </form>
  )
}
