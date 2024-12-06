import Sidebar from "./Components/Sidebar"
import Topbar from "./Components/Topbar"
import NewLineCharts from "./Components/nLineCharts/NewLineCharts"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


import "./App.css"
import TabelNew from "./Components/gridTable/TabelNew"
import PieCharts from "./Components/nPicharts/PiCharts"
import Lavailabel from "./Components/nradiusChart/Lavailabel"

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
           
            
            <Route exact path="/">
              <TabelNew/>
              
            </Route>
            <Route exact path="/pichart">
              <NewLineCharts/>
            </Route>
            <Route exact path="/mostreq">
              <PieCharts/>
              
            </Route>
            <Route exact path="/leastavai">
              <Lavailabel/>
              
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
