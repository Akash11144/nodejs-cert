import React ,{ Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    response:{}
  };

  componentDidMount() {
    axios.get('/api/v1/say-something').then(res=>{
      const response=res.data;
      this.setState({response});
    });
  }

  render(){
    return (
      <div>
        <h1>hello from front end</h1>
        <h1>{this.state.response.body}</h1>
        <h1>added this after deploying</h1>
      </div>
    );
  }

}

export default App;