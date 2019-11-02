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
        <Square index={0} drop={drop} board={board}/>
        <Square index={1} drop={drop} board={board}/>
        <Square index={2} drop={drop} board={board}/>
      </div>
      <div className="board-row">
        <Square index={3} drop={drop} board={board}/>
        <Square index={4} drop={drop} board={board}/>
        <Square index={5} drop={drop} board={board}/>
      </div>
      <div className="board-row">
        <Square index={6} drop={drop} board={board}/>
        <Square index={7} drop={drop} board={board}/>
        <Square index={8} drop={drop} board={board}/>
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

