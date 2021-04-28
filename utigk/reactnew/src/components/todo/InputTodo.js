import React, { useState } from 'react';
import { useTodoContext } from './TodoContext'

const InputTodo = () => {
    let {dispatch} = useTodoContext()
    const [inputDo , setInputDo] = useState('')

    const addTodo = () => {
        console.log(dispatch)
        dispatch({type: 'addtodo', value: inputDo})
    }

    return(
        <div>
            <input type="text" value={inputDo} onChange={(e) => {setInputDo(e.target.value)}}/>
            <button onClick={addTodo}>Add ToDo</button>
        </div>
    )
}

export default InputTodo