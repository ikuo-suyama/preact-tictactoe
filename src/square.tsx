import {h, Component} from 'preact';
import "./board.css"

export interface Props {
  value: string
  drop: (i: number) => {}
}

export default function Square(p: Props) {
  return <div className="square" onClick={() => {p.drop(1)}}> {p.value} </div>
}

