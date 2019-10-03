import React,{Component} from 'react';


class AddPerson extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.GenerateID(), name: '',gender:'',age:''
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let gender = target.gender;
    let age = target.age;
    let value = target.value;
    this.setState({
      [name] : value,
      [gender] : value,
      [age] : value
    })
  }

  onSubmit =  (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  }

  onClear = () =>{
    this.setState({
      name : '',
      gender: '',
      age : ''
    })
  }

  render(){
    return (
        <div className="Add-person">
          <h3>Add Person</h3>
          <form onSubmit = {this.onSubmit}>
            <div className="form-control">
              <label>Name</label>
              <input 
                type="text" 
                name="name"
                value = {this.state.name}
                onChange = {this.onChange}
              />
            </div>
            <div className="form-control">
              <label>Gender</label>
              <input 
                type="text" 
                name="gender"
                value = {this.state.gender}
                onChange = {this.onChange}
              />
            </div>
            <div className="form-control">
              <label>Age</label>
              <input 
                type="text" 
                name="age"
                value = {this.state.age}
                onChange = {this.onChange}
              />
            </div>
            <button className="button" type="submit">Submit</button>
          </form>
 
        </div>
       
    );
  }
}

export default AddPerson;
