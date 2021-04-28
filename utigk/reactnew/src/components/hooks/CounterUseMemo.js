import React , {useState, useMemo } from 'react'

export const Counter = () => {
    let [counterone, setCounterOne] = useState(0)
    let [countertwo, setCounterTwo] = useState(0)

    const intreamentCountone = () => {
        setCounterOne(counterone + 1)
    }

    const intreamentCounttwo = () => {
        setCounterTwo(countertwo + 1)
    }
    

    const isEven = useMemo(() => {
        let i = 0;
        while(i< 2000000000) i++

        return counterone % 2 === 0
    }, [counterone])

    return(
        <div>
            <h1>counter</h1>
            <div>
                <button onClick={intreamentCountone}>counter 1 {counterone}</button>
                {isEven ? 'even' : 'odd'}
            </div>

            <div>
                <button onClick={intreamentCounttwo}>counter 2 {countertwo}</button>
            </div>
        </div>
    )
} 