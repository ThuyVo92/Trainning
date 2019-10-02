import React,{Component} from 'react';


class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    const AddClass = this.props.isActive ? 'open' : ''
    return (
        <div className={`Add-person ${AddClass}`}>
          <h3>Add Person</h3>
          <div className="form-control">
            <label>Name</label>
            <input type="text"/>
          </div>
          <div className="form-control">
            <label>Gender</label>
            <input type="text"/>
          </div>
          <div className="form-control">
            <label>Age</label>
            <input type="text"/>
          </div>
          <button type="submit">Submit</button>
        </div>
       
    );
  }
}

export default Form;
