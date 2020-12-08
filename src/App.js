import { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        <div className="react">{name}</div>
        <br />
        <div className="react">
          <MyComponent />
        </div>
      </div>
    )
  }
}

export default App;











