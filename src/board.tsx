import {h, Component} from 'preact';
import "./board.css"
import Square from "./square";
import actions from "./actions";
import {connect} from "redux-zero/preact";

const mapToProps = (board: string[]) => ({board});

class Board extends Component {
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

const ConnectedBoard = connect(
  mapToProps,
  actions
)((board: string[], drop:(i:number) => void) => (
  <Board />
));
export default ConnectedBoard

