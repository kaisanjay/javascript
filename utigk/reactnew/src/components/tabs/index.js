import React, { useState } from 'react'
import './tab.css'

let tabData = [
    {
        name: 'tab1',
        text: 'TabsTabs Tabs Tabs Tabs Tabs Tabs 11111111',
        id: '1',
    },
    {
        name: 'tab2',
        text: 'TabsTabs Tabs Tabs Tabs Tabs Tabs 2222222',
        id: '2',
    },
    {
        name: 'tab3',
        text: 'TabsTabs Tabs Tabs Tabs Tabs Tabs 33333333',
        id: '3',
    }
]

const Tabs = () => {
    const [tab, setTabData] = useState(tabData)
    const [active, setActive] = useState('1')

    let dataShow = tab.filter((item) => {
        return item.id === active 
    })

    const tabClick = (id) => {
        setActive(id)
        // dataShow = tab.filter((item) => {
        //     return item.id === active 
        // })
    }


    return(
        <div>
            {console.log(dataShow,tab,active, 'lolo')}
            hello tabs
            {tab.map((item) => {
                return (
                    <button
                     className={item.id === active ? 'active' : '' }
                     onClick={() => tabClick(item.id)}>{item.name}</button>
                )
            })}
            <div>
                {
                    dataShow[0].text
                }

            </div>
        </div>
    )
}

export default Tabs