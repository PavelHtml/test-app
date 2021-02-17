import React, { useState } from 'react'
import cn from 'classnames'
import css from './styles.module.scss'

const Switch = ({ register }) => {
const [isOn, setSwitch] = useState(true)
return (
  <div className={css.switchBox}>
    <div className={cn({[css.item]: true, [css.active]: !isOn})}>Указать с НДФЛ</div>
      <label className={cn({[css.switch]: true, [css.active]: isOn})} onMouseUp={() => setSwitch(!isOn)}><input type='checkbox' ref={register} name="ndfl" className={css.switchInput}/></label>
    <div className={cn({[css.item]: true, [css.active]: isOn})}>без НДФЛ</div>
  </div>
)}


export default Switch
