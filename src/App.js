import Home from './Pages/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Pages/Navbar';
import './index.css';
import Register from './Pages/Register';
import Candidates from './Pages/Candidates';
import Results from './Pages/Results';
import NavbarS from './Pages/NavbarS';
import Fingerprint from './Pages/Fingerprint';
import Terminal from './Pages/Terminal';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Confirmation from './Pages/Confirmation';
import DetailPage from './Pages/detailPage'
import RegConfirm from './Pages/RegConfirm';
import EmailVerification from './Pages/EmailVerification';
import Admin from './Pages/admin/Admin';
import AdminNav from './Pages/AdminNav';
import AddCandidates from './Pages/admin/AddCandidates';
import AdminResults from './Pages/admin/AdminResults';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path={"/"}>
            <NavbarS/>
            <Home/>
          </Route>
          <Route path={"/Register"}>
            {/* <NavbarS/> */}
            <Register/>
          </Route>
          <Route path={"/Candidates"}>
            <Navbar/>
            <Candidates/>
          </Route>
          <Route path={"/Results"}>
            <Navbar/>
            <Results/>
          </Route>
          <Route path={"/Fingerprint"}>
            <NavbarS/>
            <Fingerprint/>
          </Route>
          <Route path={"/Terminal"}>
            <NavbarS/>
            <Terminal/>
          </Route>
          <Route path={"/DetailPage"}>
            <NavbarS/>
            <DetailPage/>
          </Route>
          <Route path={"/Login"}>
            {/* <NavbarS/> */}
            <Login/>
          </Route>
          <Route path={"/Signup"}>
            <NavbarS/>
            <Signup/>
          </Route>
          <Route path={"/Confirmation"}>
            <NavbarS/>
            <Confirmation/>
          </Route>
          <Route path={"/RegConfirm"}>
            <NavbarS/>
            <RegConfirm/>
          </Route>
          <Route path={"/EmailVerification"}>
            {/* <NavbarS/> */}
            <EmailVerification/>
          </Route>
          <Route path={"/Admin"}>
            <AdminNav/>
            <Admin/>
          </Route>
          <Route path={"/AddCandidates"}>
            <AdminNav/>
            <AddCandidates/>
          </Route>
          <Route path={"/AdminResults"}>
            <AdminNav/>
            <AdminResults/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
