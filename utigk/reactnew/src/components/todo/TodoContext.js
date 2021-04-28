import React,{createContext, useContext, useReducer} from 'react';

const TodoContext = createContext()

const initialState = [
    
]

const reducer = (state, action) => {
    switch(action.type) {
        case 'addtodo':
            const taskDetails = {
                id: Math.floor(Math.random() * 1000),
                value: action.value,
                isCompleted: false,
            };
            return [...state, taskDetails]
        case 'deletetodo':
            let newState = state.filter((item) => {
                return item.id !== action.id
            })
            return [...newState]
        case 'comp':
            // const element = state.findIndex((elem) => elem.id === action.id);
            // const newStateComp = [...state]
            // newStateComp[element] = {
            //     ...newStateComp[element],
            //     isCompleted: !newStateComp[element].isCompleted
            // }
            let newSf = state.map((item) => {
                if(item.id === action.id) {
                    return {...item, isCompleted: !item.isCompleted}
                } else {
                    return item
                }
            })
            return newSf
        default:
            return state
    }

}

const TodoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {state, dispatch}

    return(
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

function useTodoContext() {
    const Context  = useContext(TodoContext)


    if(Context === 'undefined') {
        throw new Error('useTodoContext must be used within a TodoContextProvider')
    }

    return Context
}

export {useTodoContext, TodoContextProvider}
