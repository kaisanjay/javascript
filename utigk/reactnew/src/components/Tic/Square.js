import React, {useState} from 'react';

import './Tic.css'


export const Square = ({value, index, squareClick}) => {
    return(
        <div className="square" onClick={() => squareClick(index)}>
            {value}
        </div>
    )
}