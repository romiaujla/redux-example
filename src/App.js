import React from 'react';
import './App.css';

import Posts from './Components/Posts'
import PostForm from './Components/Postform';

function App() {
  return (
    <div className="App">
      <PostForm></PostForm>
      <hr></hr>
      <Posts></Posts>
    </div>
  );
}

export default App;
