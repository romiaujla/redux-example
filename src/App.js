import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './Components/Posts'
import PostForm from './Components/Postform';
import store from './store';

class App extends Component {
  
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
