import {h} from 'preact';
import "./board.css"
import {BoardState} from "./store";

export interface SquareProps {
  index: number
  board: BoardState
  drop: (i: number) => {}
}

export default function Square({index, board, drop}: SquareProps) {
  return <div className="square" onClick={() => drop(index)}> {board[index]} </div>
}
