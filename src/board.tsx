import {h, Component} from 'preact';
import "./board.css"
import Square, {SquareProps} from "./square";
import actions from "./actions";
import {connect} from "redux-zero/preact";

const range = (to: number) => [...Array(to)];

class BoardRow extends Component<SquareProps> {
  render(props: SquareProps) {
    console.log(props);
    return <div className="board-row">
      {range(3).map((_, j: number) =>
        <Square {...props} index={props.index * 3 + j} />
      )}
    </div>
  }
}

class Board extends Component<any> {
  render({props}) {
    console.log(props);
    return <div>
      {range(3).map((_, i: number) =>
        <BoardRow index={i} {...props}/>
      )}
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

