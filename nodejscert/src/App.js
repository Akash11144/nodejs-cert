import React ,{ Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    response:[]
  };

  componentDidMount() {
    axios.get('http://localhost:5000/teamget').then(res=>{
      const response=res.data;
      console.log(response)
      console.log(res)
      this.setState(response);
    });
  }

  render(){
    return (
      <div>
        {console.log(this.state.response)}
        <h1>hello from front end</h1>
        <h1>data: {this.state.response}</h1>
        <h1>added this after deploying</h1>
        <h1>added second update after deploying</h1>
      </div>
    );
  }

}

export default App;