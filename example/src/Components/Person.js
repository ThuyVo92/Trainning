import React,{Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  render(){
    return (
      <ul id={this.props.id} className="ItemPerson">
          <li >Name : {this.props.name}</li>
          <li >Gender : {this.props.gender}</li>
          <li>Age: {this.props.age}</li>          
      </ul>
    );
  }
}

export default App;
