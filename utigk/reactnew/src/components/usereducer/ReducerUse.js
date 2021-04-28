import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increament':
            return state+1
        case 'decreament':
            return state-1
        case 'reset':
            return initialState
        default:
            return state;
    }
}

export const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            {console.log(count, 'count')}
            <h1>{count}</h1>
            <button onClick={() => {dispatch('increament')}}>Increament</button>
            <button onClick={() => {dispatch('reset')}}>Reset</button>
            <button onClick={() => {dispatch('decreament')}}>Decreament</button>
        </div>
    )
}


const oinitialState = {
    intialCount: 0
}

const oreducer = (state, action) => {
    switch(action.type) {
        case 'increament':
            return { intialCount: state.intialCount + 1}
        case 'decreament':
            return {intialCount : state.intialCount -1}
        case 'reset':
            return oinitialState
        default:
            return state;
    }

}

export const CounterTwoObject = () => {
    const [ocount, odispatch] = useReducer(oreducer, oinitialState)
    return(
        <div>
            <h1>{ocount.intialCount}</h1>
            <button onClick={() => {odispatch({type: 'increament'})}}>Increament</button>
            <button onClick={() => {odispatch({type : 'reset'})}}>Reset</button>
            <button onClick={() => {odispatch({type: 'decreament'})}}>Decreament</button>
        </div>
    )
}