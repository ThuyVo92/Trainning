import React,{Component} from 'react';
import '../../assets/App.scss';
import Person from '../../Components/Person';
import AddPerson from '../AddPerson';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      Persons: [
        {
        id: 1,
        name: 'ball',
        gender: "male",
        age: 20,
        },
        {
        id: 2,
        name: 'coin',
        gender: "female",
        age: 30
        },
        {
        id: 3,
        name: 'candy',
        gender: "male",
        age: 21
        }
      ],
      isActive: true
    }
  }

  CLickHandle = () => {
    const isActive = this.state.isActive;
    this.setState({isActive : !isActive})
  }

  DeletePerson = (PersonIndex) => {
    const Persons = this.state.Persons;
    Persons.splice(PersonIndex,1);
    this.setState({Persons: Persons})
  }

  render(){
    
    let mapPerson = this.state.Persons.map((person, index) => (
      <Person 
        key={index}
        id={person.id}
        name={person.name}
        gender={person.gender}
        age={person.age}
      />
    ))

    return (
      <div className="container ">
        <div className="row flex align-center box-content">
          <div className="col-left">
            <div className="ListButton">
              <button  className="button button-add" onClick = {this.CLickHandle}
            >Add Person</button>
            <AddPerson />
              <button 
                className="button button-remove" 
                onClick ={() => this.DeletePerson()}
            >Remove Perso
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
