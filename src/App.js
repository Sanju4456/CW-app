import './App.css';
import Homepage from "./Page/Homepage/Homepage"
import Loginpage from './Page/Loginpage/Loginpage';
import Signuppage from './Page/Signuppage/Signuppage';
import{ BrowserRouter as Router,Switch,Route,Link,} from "react-router-dom";

function App(){
  const user =false;
  return (
   <Router>
     <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/login">
          {user ? <Homepage/> : <Loginpage/> }
        </Route>
        <Route exact path="/signup">
          {user ? <Homepage/> : <Signuppage/> }
        </Route>
      </Switch>
    </Router>
 
  );
   

}
export default App;



