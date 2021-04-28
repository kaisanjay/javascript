import React, {useState} from 'react';
import {Square} from './Square' 


export const Board = () => {
    const [squares, setSquares] =  useState({
        arr: Array(9).fill(null),
    })

    const [xIsNext, setNext] =  useState(true)


    const [currIndex, setcurrIndex] =  useState('')



    const squareClick = (index) => {
        // const nwsquares = squares.arr.slice();
        // nwsquares[index] = 'x'
        const nwsquares = squares.arr.map((item,oindex) => {
            if(oindex === index){
                return item = xIsNext ? 'X' : 'O';
            } else {
                return item
            }
        })
        if (calculateWinner(squares.arr) || squares.arr[index]) {
            return;
        }

        setNext(!xIsNext)

        setSquares({
            ...squares, arr: nwsquares
        })
        
        console.log(squares, 'hell jjj ')
    }

    const calculateWinner = (squares) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const winner = calculateWinner(squares.arr);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return(
        <div className="test">
            <div className="board-wpr">
                {status}
                <div className="board-row">
                    {console.log(squares.arr)}
                    { squares.arr.map((item, index) => {
                         return <Square value={item} index={index}  squareClick={() => squareClick(index)}/>
                    })}
                </div>
            </div>
        </div>
    )
}