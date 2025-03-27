import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Browse from './pages/Browse'
import NavController from './components/NavController'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/signup" /> {/* Yönlendirme için Redirect kullanıyoruz */}
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/browse" component={Browse} />
      </Switch>
      <NavController />
    </>
  )
}

export default App
