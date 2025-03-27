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
  const [activeProfile, setActiveProfile] = useState(null);


  return (
    <>
      <Switch >
        <Route path="/" exact>
          <Redirect to="/signup" /> {/* Yönlendirme için Redirect kullanıyoruz */}
        </Route>
        <Route path="/signup">
        <SignUp />
        </Route>
        <Route path="/welcome" >
        <Welcome setActiveProfile={setActiveProfile}/>
        </Route>
        <Route path="/browse"  >
        <Browse activeProfile={activeProfile}/>
        </Route>
      </Switch>
      <NavController />
    </>
  )
}

export default App
