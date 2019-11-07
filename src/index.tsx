import {h, render} from 'preact';
import ConnectedBoard from "./board";
import store from "./store";
import {Provider} from "redux-zero/preact";

const App = () => (
  <Provider store={store}>
    <ConnectedBoard />
  </Provider>
);
export default App

// render(<App/>, document.body);