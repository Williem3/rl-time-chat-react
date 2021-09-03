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
import io from "socket.io-client";

const socket = io.connect('/');

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

          <Route path='/signup'>
            <SignUp socket={socket}/>
          </Route>

          <Route path='/conversations' component={Conversations}>
          </Route>

          <Route path='/conversation/:roomname/:username' >
            <Chat socket={socket}/>
          </Route>

          {/* <Route path='*' component={LandingPage}>
          </Route> */}
        </AuthContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
