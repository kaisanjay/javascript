import React, { useContext ,createContext,useReducer } from 'react';

const TrellContext = createContext()

let initialState = [
    {
        title: 'Title 1',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'card text 1'
            },
            {
                id: 1,
                text: 'card text 2'
            }
        ]
    },
    {
        title: 'Title 2',
        id: 1,
        cards: [
            {
                id: 0,
                text: '2card text 1'
            },
            {
                id: 1,
                text: '2card text 2'
            }
        ]
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case 'addList':
            console.log('add')
            return [...state, {title: action.value, id: state.length, cards:[]}]
        case 'removeList':
            // console.log('remove', action.id, state)
            state.forEach((element, index) => {
                if(element.id === action.id) {
                    state.splice(index, 1)
                }
                // console.log(element, 'state')
            });
            return [...state, {}]
        case 'addCard':
            let {cardId, listId, value} = action
            let newState = state.map((element, index) => {
                if(element.id === listId) {
                    return {
                        ...element,
                        cards: [...element.cards, {id: cardId, text: value}]
                    }
                }
            });

            console.log(newState, 'newState')

            return [...state, newState];

        default:
            return state
    }

}

const TrellContextProvide = ({children}) => {
    const [trelloArr, dispatchList] = useReducer(reducer, initialState)

    return (
        <TrellContext.Provider value={'hello'}>{{...children}}</TrellContext.Provider>
    )
}


function useTrellContext() {
    const context = useContext(TrellContext)
    if (context === undefined) {
      throw new Error('useTrellContext must be used within a CountProvider')
    }
    return context
  }

export  { TrellContextProvide , useTrellContext}