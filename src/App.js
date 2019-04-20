import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home'
import Posts from './containers/Posts'
import PostsNew from './containers/PostsNew'
import PostsShow from './containers/PostsShow'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/posts" component={Posts}/>
            <Route exact path="/posts/new" component={PostsNew}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
