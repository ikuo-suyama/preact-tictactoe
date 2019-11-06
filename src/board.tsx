import {h} from 'preact';
import "./board.css"
import Square, {SquareProps} from "./square";
import actions from "./actions";
import {connect} from "redux-zero/preact";

const range = (to: number) => [...Array(to)];

function BoardRow({index, ...others}: SquareProps) {
  return <div className="board-row">
    {range(3).map((_, j: number) =>
      <Square {...others} index={index * 3 + j}/>
    )}
  </div>
}

function Board({props}) {
  return <div>
    {range(3).map((_, i: number) =>
      <BoardRow index={i} {...props}/>
    )}
  </div>
}

const mapToProps = ({board}) => ({board});

const ConnectedBoard = connect(
  mapToProps,
  actions
)((props) => {
  return <Board props={props}/>
});
export default ConnectedBoard

