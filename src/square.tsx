import {h, Component} from 'preact';
import "./board.css"

export interface Props {
  value: string
}

export default function Square(p: Props) {
  return <div className="square"> {p.value} </div>
}

