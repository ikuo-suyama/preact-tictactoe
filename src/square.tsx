import {h, Component} from 'preact';
import "./board.css"
import {BoardState} from "./store";

export interface SquareProps {
  index: number
  board: BoardState
  drop: (i: number) => {}
}

export default function Square(p: SquareProps) {
  return <div className="square" onClick={() => {p.drop(p.index)}}> {p.board[p.index]} </div>
}

