import React, { Component } from 'react';
import Table from './componets/table';
import Paint from './componets/paint';
import './App.css';

export default class App extends Component {

 
   state = {
      firstName: '',
      lastName: '',
      email: '',
      users: []
    }



  submitHandler = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, users } = this.state
    this.setState({
      users: [...users, { firstName, lastName, email, id: new Date().getTime(), isEdit: false }],
      firstName: '',
      lastName: '',
      email: '',
      item: {}

    })
  }
  changeHandler = (event) => {
    const { target: { name, value } } = event
    this.setState({
      [name]: value

    })

  }

  
  cancleRow=()=>{
    this.setState({
        firstName:'',
        lastName:'',
        email:''
    })
}





  render() {
    const { firstName, lastName, email, users } = this.state
    return <>
      <div className='paint' >
        <div className="view"  >
          <Paint changeHandler={this.changeHandler} submitHandler={this.submitHandler} submitHandler={this.submitHandler} cancleRow={this.cancleRow} firstName={firstName} lastName={lastName} email={email} />
    
        </div>
        <Table users={users} changeHandler={this.changeHandler} deleteRow={this.deleteRow} firstName={firstName} lastName={lastName} email={email} />
      </div>
    </>
  }
}


