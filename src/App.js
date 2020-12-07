import React, { Component } from 'react'

// Importation de librairie axios afin d'effectuer des requêtes HTTP dans l'application ReactJS
//import axios from 'axios';

import './App.css';

// lien API : https://api.schooldigger.com/v1/schools

class App extends Component {
   constructor(props) {
     super(props)



     this.state = {
      numberOfPages: '',
      numberOfSchools: '',
      schoolList: '' 
     }
   }

   changeHandler = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   submitHandler = e => {
     e.preventDefault()
     console.log(this.state)
   }


  


/* Structure du code JSX, préparations */
render() {
  // destructuration des valeurs attribuées ci-dessus
  const { numberOfPages, numberOfSchools, schoolList } = this.state; 
    return (
      // Lignes de code JSX
      <div className="mainTitle">

        <form onSubmit={this.submitHandler}>
          
          <div className="inputData">

          <input type="text" 
          name="numberOfPages" 
          value={numberOfPages} 
          onChange={this.numberOfPages} />

          </div>


          <div className="inputData">

          <input type="text" 
          name="numberOfSchools" 
          value={numberOfSchools} 
          onChange={this.numberOfSchools} />

          </div>
          
          <div className="inputData">

          <input 
          type="text" 
          name="schoolList" 
          value={schoolList} 
          onChange={this.schoolList} />

          </div>

          <button type="submit">Envoyer</button>
        </form>    
      </div>
    )
  }
}

export default App;
