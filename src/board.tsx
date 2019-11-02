import {h, Component} from 'preact';
import "./board.css"
import Square from "./square";
import actions from "./actions";
import {connect} from "redux-zero/preact";

class Board extends Component<any> {
  render({props}) {
    console.log(props);
    const {board, drop} = props;
    return <div>
      <div className="board-row">
        <Square value={board[0]} drop={drop}/>
        <Square value={board[1]} drop={drop}/>
        <Square value={board[2]} drop={drop}/>
      </div>
      <div className="board-row">
        <Square value={board[3]} drop={drop}/>
        <Square value={board[4]} drop={drop}/>
        <Square value={board[5]} drop={drop}/>
      </div>
      <div className="board-row">
        <Square value={board[6]} drop={drop}/>
        <Square value={board[7]} drop={drop}/>
        <Square value={board[8]} drop={drop}/>
      </div>
    </div>
  }
}

const mapToProps = ({board}) => ({board});

const ConnectedBoard = connect(
  mapToProps,
  actions
)((props) => {
  return <Board props={props}/>
});
export default ConnectedBoard

