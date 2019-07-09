import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
    super(props)
    this.state= {username: ' '}
  }

  handleChange = (event) =>{
    this.setState({username: event.target.value})
    console.log(this.state)
  }

  handleSubmit = (event) =>{
    alert('an input was submitted' + " " + event.target.username.value)
       }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
       <label htmlForm="username">
      Username: 
      <input type ='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder="input name"/>
      </label>
      <input type = 'submit' />
    </form> 
    )
  }
}
 export default Form;

