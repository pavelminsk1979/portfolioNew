import * as Switch from '@radix-ui/react-switch'

import st from './SwitchComponent.module.scss'

type PropsType = {
  handlerOnChackedChange: (checked: boolean) => void
}
export const SwitchComponent = ({ handlerOnChackedChange }: PropsType) => {
  return (
    <Switch.Root className={st.SwitchRoot} onCheckedChange={handlerOnChackedChange}>
      <Switch.Thumb className={st.SwitchThumb} />
    </Switch.Root>
  )
}
