import React from 'react';
import { persons } from './file2';
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
//props 
function WelcomePerson(props) {
    const { firstName, lastName, gender, email } = props.person;
  
    return (
      <p style={{color:"red"}} >
        Welcome, {firstName} {lastName}, {gender}, {email}
      </p>
    );
  }
  
  //props 

export default function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson  person={persons[0]} />
        {persons.map((p,index) => <WelcomePerson key={index} person={p} />)}

      </div>
    );
  }     
