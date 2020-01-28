import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './Components/Posts'
import PostForm from './Components/Postform';

const store = createStore(() => [], {} , applyMiddleware())

class App extends Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm></PostForm>
          <hr></hr>
          <Posts></Posts>
        </div>
      </Provider>
    );  
  }
}

export default App;
