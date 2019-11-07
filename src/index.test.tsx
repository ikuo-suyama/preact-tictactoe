import {h} from 'preact';
import App from './index'
import Board from './board'

import {mount} from 'enzyme'
import Square from './square';

describe("<App /> e2e tests", () => {

  let app;
  beforeEach(done => {
    app = mount(<App/>);
    done()
  });

  it("1つの<Board>を含む", () => {
    expect(app.find(Board).length).toEqual(1)
  });
  it("９つの<Square>を含む", () => {
    expect(app.find(Square).length).toEqual(9)
  });

});