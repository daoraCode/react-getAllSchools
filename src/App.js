import React, { Component } from 'react'

/* Importation de librairie axios afin d'effectuer des requêtes HTTP dans l'application ReactJS */
// import axios from 'axios';

import './App.css';

// lien API : https://api.schooldigger.com/v1/schools

class App extends Component { 


    /* - Informations/données (donnéees API de getAllSchools) 
    à afficher quand le Composant utilise le render() est lancé */ 
   constructor(props) {
     super(props)
      this.state = {
      numberOfPages: '',
      numberOfSchools: '',
      schoolList: '' 
     }
   }

   // méthode événementielle consacrée aux inputs
   changeHandler = e => {
      this.setState({ [e.target.name]: e.target.value })
   }

   // méthode événementielle consacrée aux envois
   submitHandler = e => {
     e.preventDefault() // pour éviter un rafraichissement de la page
     console.log(this.state) // App.js:32 {numberOfPages: "", numberOfSchools: "", schoolList: ""}
   }
  


  /* Méthode reponsable de l'interface, à ressemblera l'UI construite */
render() {
  /* Structure du code JSX, préparations */

  // - destructuration des valeurs attribuées API définies dans le constructeurs

  /* En créant une déstructuration : toute mes valeurs seront 
  décomposées et équivaudront d'une certaine manière à une seule et même variable `this.state`, méthode permettant donc de raccourcir le code  */

  const { numberOfPages, numberOfSchools, schoolList } = this.state; 
 // - ! placer defaultValue au lieu de value, auquel cas il y aura des erreurs ------------------ DESTRUCTURING
 // - le defautValue ne causera pas la mise à jour de la valeur initiale du DOM


    return (
      // Lignes de code JSX
      <div className="mainTitle">




        <form onSubmit={this.submitHandler}>
          
          <div className="inputData">

          <input type="text" 
          name="numberOfPages" 
          defaultValue={numberOfPages} 
          onChange={this.numberOfPages} />

          </div>


          <div className="inputData">

          <input type="text" 
          name="numberOfSchools" 
          defaultValue={numberOfSchools} 
          onChange={this.numberOfSchools} />

          </div>
          
          <div className="inputData">

          <input 
          type="text" 
          name="schoolList" 
          defaultValue={schoolList} 
          onChange={this.schoolList} />

          </div>

          <button type="submit">Envoyer</button>
        </form>    
      </div>
    )
  }
}

export default App;
