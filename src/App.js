import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { Amplify, API } from 'aws-amplify';
import awsconfig from './aws-exports';
import axios from 'axios';
Amplify.configure(awsconfig);


function App() {

  const apiName = 'd8g1k79i5b';
  const path = '/qa/employee'; 
  const myInit = { // OPTIONAL
    headers: {
      "Authorization":"zdjnbjdfznbjkdfnbj",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers": "Content-Type,Access-Control-Allow-Origin,access-control-allow-origin,access-control-expose-headers,authorization,access-control-allow-credentials,access-control-allow-methods,cache-control,Accept,authorizationToken,Accept-Encoding,Content-Length,Connection,User-Agent",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    }, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
  };

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);


  async function fetchNotes() {

    API.get(apiName, path, myInit)
    .then(response => {
      console.log("Test :: >> ",response)
      setNotes(response);
    })
    .catch(error => {
      console.log("Error : ",error);
    });
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>

         


        <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
            </div>
          ))
        }
      </div>

      </header>
    </div>
  );
}

export default App;
