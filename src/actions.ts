import Store from "redux-zero/interfaces/Store";
import {BoardState} from "./store";

const actions = (store: Store) => ({
  drop: (state: BoardState, index: number) => {
    const ret = [...state.board];
    ret[index] = 'o';
    return {board: ret}
  },
});

export default actions;