import React,{Component} from 'react';


class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  SelectPerson = () => {
    this.props.SelectPerson(this.props.id);
  }

  render(){
    return (
      <ul id={this.props.id} className="ItemPerson" onClick={() => this.SelectPerson()}>
          <li >Name : {this.props.name}</li>
          <li >Gender : {this.props.gender}</li>
          <li>Age: {this.props.age}</li>          
      </ul>
    );
  }
}

export default Person;
