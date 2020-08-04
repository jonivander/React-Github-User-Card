import React from 'react';
import axios from 'axios';
import './App.css';






class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
    console.log("constructor is constructing!")
  }


  return (
    <div className="card">
      <img src={"image url of user"} />
      <div className='card-info'>
        <h3 className='name'>${username}</h3>
      </div>
    </div>
  );
}

export default App;
