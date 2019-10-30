import createStore from "redux-zero";

export interface BoardState {
  board: string[]
}
const initialState = {board: ['', '', '', '', '', '', '', '', '']};
const store = createStore(initialState);

export default store;