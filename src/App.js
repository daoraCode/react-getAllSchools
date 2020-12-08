import React, { useState, useEffect } from "react";
import "./App.css";

/* librairie lodash javaScript pour modules node.js */ 
import _ from 'lodash'




/* Import de la librairie axios pour utiliser les requêtes HTTP, 
récupérer de la data, se connecter à l'API getAllSchools */
import Axios from "axios";



/* Compsants principal */
const App = () => {

  /* - Utilisation du hook useState() : useState(initialState, setState), utilisation 
  d'une valeur initiale et d'une fonction d'update pour cette valeur */
  const [state, setState] = useState({});



  /* - Utilisation du hook useEffect() : useEffect((effect(function)), (dependancy([]))) */
  useEffect(() => {
    fetchData();
  });


  /* Recherches de données (arrows method) - url and paramaters - retour de fonctions 
  promesses pour récupérer les bonnes réponses URLs et les erreurs de réponses URLs grâce au .then() catch() */
  const fetchData = async () => {
    const appKey = "afcfd1b6ca056f4c03e8fec5b3fdc984";
    const appID = "e34ae722"
    const st = "LA";
    Axios.get(`https://api.schooldigger.com/v1.2/schools?st=${st}&appID=${appID}&appKey=${appKey}`)
      .then((res) => {
      setState(res.data)
    })
      .then((res) => {
      console.log(res)
    })

  };

  //
//
  return (
    
    // Lignes JSX
    <div className="mainDivider">

      {_.isEmpty(state) ? "Chargement" : (

      <div>
      <h1 className="title">Recherches d'Informations par états - getAllSchools</h1>
      <p>NOM DE L'ECOLE : ${state.schoolList[0].schoolName}</p>

      <input className={"input"} />
      <button className="button">Obtenir</button>
      </div>
      
      )}
      
    </div>
  );
};



export default App;
