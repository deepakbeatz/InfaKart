import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Main from './containers/main/main'

export default function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Main />

      </div>

    </BrowserRouter>
  )
}

