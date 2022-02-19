import React from 'react'

const MySelect = ({options, defaultValue, value, onChange }) => { //принимает массив опций
    return (
        //пропсами принмаем value и фу-ию onChange(чтобы следить за изменением значения внутри select)
        <select 
        value={value}
        onChange={event =>onChange(event.target.value)}//передаем сразу значение который выбрал пользователь 
        >
             {/* сортировка */}
          <option disabled='true' value="">{defaultValue}</option>
          {options.map(option =>
        //   по массиву опций с помощью map итерируемся и для каждой опции отрисовываем тег option
            <option key={option.value} value={option.value}>
            {option.name}
            </option>
            )}
        </select>
    )
}

export default MySelect