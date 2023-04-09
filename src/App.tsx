import React from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button onClick={signOut}>Sign Out</button>
          </header>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
