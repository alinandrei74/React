import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GithubUser from './components/fecheo';

function App() {
  return (
    <div className="App">
      <h1>GitHub User Info</h1>
      <GithubUser username="octocat" />
    </div>
  );
}

export default App
