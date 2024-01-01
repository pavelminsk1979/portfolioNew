import st from './Contact.module.scss'

export const Contact = () => {
  return (
    <div className={st.main}>
      <div className={st.blocLink}>
        <div className={st.minBlockLink}>1</div>
        <div className={st.minBlockLink}>2</div>
        <div className={st.minBlockLink}>3</div>
      </div>
      <div className={st.blockForm}></div>
    </div>
  )
}
