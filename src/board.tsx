import {h, Component} from 'preact';
import "./board.css"

export default class Board extends Component {
  render() {
    return <div>
      <div className="board-row">
        <div className="square">a</div>
        <div className="square">b</div>
        <div className="square">c</div>
      </div>
      <div className="board-row">
        <div className="square">a</div>
        <div className="square">b</div>
        <div className="square">c</div>
      </div>
      <div className="board-row">
        <div className="square">a</div>
        <div className="square">b</div>
        <div className="square">c</div>
      </div>
    </div>
  }
}

