import React, { useState } from 'react'
import cn from 'classnames'
import css from './styles.module.scss'

const Hint = ({ children }) => {
const [radioHint, setRadioHint] = useState(false)

return (
  <div
    className={css.hint}
    onMouseUp={() => setRadioHint(!radioHint)}>
    <div className={css.hintIcon}>
      {radioHint ? 'x' : 'i' }
    </div>
    <div className={cn({[css.hintText]: true, [css.active]: radioHint})}>
      {children}
    </div>
  </div>
)}


export default Hint
