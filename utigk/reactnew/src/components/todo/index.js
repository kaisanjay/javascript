import React from 'react';
import {TodoContextProvider} from './TodoContext'
import InputTodo from './InputTodo'
import TodoData from './TodoData'


const Todo = () => {
    return(
        <TodoContextProvider>
            <h2>Todo</h2>
            <InputTodo />
            <TodoData />
        </TodoContextProvider>
    )
}

export default Todo