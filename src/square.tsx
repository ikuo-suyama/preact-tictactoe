import {h, Component} from 'preact';
import "./board.css"
import {BoardState} from "./store";

export interface Props {
  index: number
  board: BoardState
  drop: (i: number) => {}
}

export default function Square(p: Props) {
  return <div className="square" onClick={() => {p.drop(p.index)}}> {p.board[p.index]} </div>
}

