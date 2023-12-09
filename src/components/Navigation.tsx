import st from './Navigation.module.scss'

import { SwitchComponent } from './switchComponent/SwitchComponent'

export const Navigation = () => {
  const handlerOnChackedChange = (checked: boolean) => {
    console.log(checked)
    document.body.classList.toggle('dark-mode', checked)
  }

  return (
    <div>
      <div className={st.main}>Кратко</div>
      <SwitchComponent handlerOnChackedChange={handlerOnChackedChange} />
    </div>
  )
}
