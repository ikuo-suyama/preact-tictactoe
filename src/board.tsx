import {h, Component} from 'preact';
import "./board.css"
import Square from "./square";

export default class Board extends Component {
  render() {
    return <div>
      <div className="board-row">
        <Square value="a"/>
        <Square value="b"/>
        <Square value="c"/>
      </div>
      <div className="board-row">
        <Square value="a"/>
        <Square value="b"/>
        <Square value="c"/>
      </div>
      <div className="board-row">
        <Square value="a"/>
        <Square value="b"/>
        <Square value="c"/>
      </div>
    </div>
  }
}

