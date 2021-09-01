import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import { React } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SignUp from './pages/Auth/SignUp';
import Conversations from './pages/Conversations/Conversations';
import Chat from './pages/Chat/Chat';
import AuthContext from './store/auth-context';

function App() {

  return (
    <Router>
      <Switch>
        <AuthContext.Provider value={{
            isAuthenticated: false,
            username: null,
            userID: null
        }}>
          <Route exact path='/' component={LandingPage}>
          </Route>

          <Route exact path='/signup' component={SignUp}>
          </Route>

          <Route exact path='/conversations' component={Conversations}>
          </Route>

          <Route exact path='/conversation/:id' component={Chat}>
          </Route>

          {/* <Route path='*' component={LandingPage}>
          </Route> */}
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
