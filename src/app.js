import React, { Component } from 'react';
// import {Route,Router,Switch} from 'react-router-dom';
import Count from './containers/Count';
import Person from './containers/Person';
import Dnd from './containers/Dnd';
// import {Link,Switch,Route} from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';



export default class App extends Component {
  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        {/* <div>
          <Link to="/count">count</Link>
          <Link to="/person">person</Link>
        </div> */}
        {/* <div>
        <Switch>
          <Route path="/count" component={Count} />
          <Route path="/person" component={Person} />
        </Switch>

        </div> */}
        <Count />
        <hr/>
        <Person></Person>
        <hr/>
        <Dnd></Dnd>
      </DndProvider>

    )
  }
}
