import {h, render} from 'preact';
import App from './index'

const spy = jest.fn()

describe("<App /> e2e tests", () => {
  let scratch;

  beforeEach(done => {
    scratch = document.createElement('div');
    render(<App/>, scratch);
    done()
  });

  it("should display proper information about pages", () => {
    expect(scratch.innerHTML).toContain("-");
  });
});