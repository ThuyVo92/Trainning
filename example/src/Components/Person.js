import React,{Component} from 'react';


class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  // HandlePerson = () => {
  //   this.props.HandlePerson();
  // }
  SelectPerson = () => {
    this.props.SelectPerson(this.props.id);
  }

  render(){
    const select = this.props.ActivePer ? 'select' : '';
    return (
      <ul 
          id={this.props.id} 
          className={`ItemPerson ${select}`}
          onClick={this.SelectPerson}
      >
          <li >Name : {this.props.name}</li>
          <li >Gender : {this.props.gender}</li>
          <li>Age: {this.props.age}</li>          
      </ul>
    );
  }
}

export default Person;
