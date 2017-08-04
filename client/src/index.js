import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


import {Board} from './Board';
import {LoginComponents} from './Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={LoginComponents} />
          <Route path={'/board'} component={Board} />
        </Switch>

      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
