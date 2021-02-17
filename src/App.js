import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/global.scss'
import css from './styles.module.scss'
import Hint from './components/Hint'
import Switch from './components/Switch'
import { Form, Container  } from 'react-bootstrap'

function App() {
  const {register, handleSubmit, watch, errors} = useForm({
    defaultValues: {
      sum: null,
      radio: "mouth",
      ndfl: true
    }
  })
  const radioButtons = [
    {
      type: 'radio',
      label: 'Оклад за месяц',
      value: 'mouth',
      hint: 'МРОТ - Минимальный размер оплаты труда, разный для разных регионов'
    },
    {
      type: 'radio',
      label: 'МРОТ',
      hint: 'МРОТ - Минимальный размер оплаты труда, разный для разных регионов',
      value: 'mrot'
    },
    {
      type: 'radio',
      label: 'Оплата за день',
      value: 'day'
    },
    {
      type: 'radio',
      label: 'Оплата за час',
      value: 'hours'
    }
  ]
  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(watch("ndfl"))
  return (
    <div className={css.app}>
        <h2 className={css.title}>Сумма</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {radioButtons.map((input, index) => (
            <div className={css.radioBox} key={index}>
              <Form.Check
                className={css.customInput}
                ref={register}
                key={index}
                type={input.type}
                id={`radio-${index}`}
                label={input.label}
                name={input.type}
                value={input.value}
              />
              {input.hint && <Hint>{input.hint}</Hint>}
            </div>
          ))}
          <Switch register={register} />
          <Form.Group className={css.box} controlId="sum">
            <Form.Control type="number" name="sum" ref={register}/>
            <Form.Label>₽ {watch("radio") === 'mouth' || watch("radio") === 'mrot' ? '': watch("radio") === 'day' ? 'в день' : 'в час' }</Form.Label>
          </Form.Group>
        </Form>
        {watch("sum") && watch("radio") === 'mouth' && (<div className={css.info}>
          <div className={css.item}><b>{watch("sum")}</b> сотрудник будет получать на руки</div>
          <div className={css.item}><b>{watch("sum")/100*13 }</b> НДФЛ, 13% от оклада </div>
          <div className={css.item}><b>{watch("sum")/100*113}</b> за сотрудника в месяц</div>
        </div>)}
    </div>
  );
}

export default App
