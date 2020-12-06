import React, { Component } from 'react';

// Importation de librairie axios afin d'effectuer des requêtes HTTP dans l'application ReactJS
import axios from 'axios';

import './App.css';

// lien API : https://api.schooldigger.com/v1/schools

class App extends Component {

  /* Méthode componentDidMount(), hook qui va permettre */
  componentDidMount() {
    axios.get('https://api.schooldigger.com/v1/schools');
  }

  constructor(props) {
  /* - Creation du constructeur, 
     - Appel de la classe parente, (superclasse) : keyword `super`*/
    super(props);

    this.state = {value: ''};

    /* Rappel des méthodes  */
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  


/* Structure du code JSX, préparations */
render() {
    return (
      // Lignes de code JSX
      <div className="mainTitle">
        <h1>Recherches d'Informations par états</h1>
        <h1 className="subTitle">getAllSchools</h1>    
      </div>
    );
  }
}

export default App;
