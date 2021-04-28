import React, {useState} from 'react';
import './todo.css'

const Stodo = ({value, id, isCompleted, deletetodo, compCheck}) => {
    return(
        <div className={isCompleted ? 'todoitem cross': 'todoitem'}>
            <br/>
            <div>value : {value}</div>
            <button  onClick={compCheck}>mark complete</button>
            <button onClick={deletetodo}>delete</button>
            <br/>
        </div>


    )
}

export default Stodo