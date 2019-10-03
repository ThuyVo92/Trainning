import React,{Component} from 'react';
import '../../assets/App.scss';
import Person from '../../Components/Person';
import AddPerson from '../../Components/AddPerson';
import randomString from 'randomstring'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Persons: [
        {
        id: this.GenerateID(),
        name: 'ball',
        gender: "male",
        age: 20,
        },
        {
        id: this.GenerateID(),
        name: 'coin',
        gender: "female",
        age: 30
        },
        {
        id: this.GenerateID(),
        name: 'candy',
        gender: "male",
        age: 21
        }
      ],
      isActive: false,
      ActivePer: false,
      SelectIndex: null,
    }
  }

  GenerateID (){
    let x = randomString.generate({
      numeric : '123456789'
    })
    return x;
  }

  CLickHandle = () => {
    const isActive = this.state.isActive;
    this.setState({isActive : !isActive})
  }

  HandlePerson = () => {
    const ActivePer = this.state.ActivePer;
    this.setState({
      ActivePer : !ActivePer
    })
  }

  DeletePerson = () => {
    const Persons = this.state.Persons;
    Persons.splice(this.state.SelectIndex,1);
    this.setState({Persons: Persons})
  }

  onSubmit = (data) => {
    let Persons = this.state.Persons;
    Persons.push(data);
    this.setState({
      Persons : Persons
    })
  }

  SelectPerson = (id) => {
    let Persons = this.state.Persons;
    let index = Persons.findIndex(person => 
      person.id === id ? this.HandlePerson() : ''
    )
   
    this.setState({
      SelectIndex : index,
    })
  }

  render(){

    let elmAddPerson = this.state.isActive ? < AddPerson GenerateID={this.GenerateID} onSubmit = {this.onSubmit} /> : "";

    let mapPerson = null;

    if (this.state.Persons){
      mapPerson = this.state.Persons.map((person, index) => (
        <Person 
          key={index}
          id={person.id}
          name={person.name}
          gender={person.gender}
          age={person.age}
          SelectPerson = {this.SelectPerson}
          ActivePer = {this.state.ActivePer}
          HandlePerson = {this.HandlePerson}
        />
      ))
    }

    return (
      <div className="container ">
        <div className="row flex align-center box-content">
          <div className="col-left">
            <div className="ListButton">
              <button  className="button button-add" onClick = {this.CLickHandle}
            >Add Person</button>
            {elmAddPerson}
              <button 
                className="button button-remove" 
                onClick ={() => this.DeletePerson()}
            >Remove Person
              </button>
            </div>
          </div>
          <div className="col-right">
            <div className="List-person">
              <h1>List Person</h1>
              {mapPerson}
            </div>
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
