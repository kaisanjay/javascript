import React from 'react';
import Stodo from './Stodo'
import {useTodoContext} from './TodoContext'

const TodoData = () => {
    const {state, dispatch} = useTodoContext()
    console.log(state)
    const deletetodo = (id) => {
        dispatch({type: 'deletetodo', id: id})
    }

    const handleCheck = (id) => {
        dispatch({type: 'comp', id:id})

    }
    return(
        <div>
            {state && state.map((item)=>{
                return <Stodo key={item.id} 
                    compCheck={() =>handleCheck(item.id)} // dont need to pass the data you got from child define handleCheck(child data)
                    value={item.value}
                    id={item.id}
                    deletetodo={() => deletetodo(item.id)}
                    isCompleted={item.isCompleted}/>
            })}
        </div>
    )
}

export default TodoData