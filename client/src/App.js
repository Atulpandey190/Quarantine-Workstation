import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { Dashboard } from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
function App() {
  return (
    <Router>

       <Routes>
         <Route exact path='/' element={<Home/>}>
         </Route>
       </Routes>

    </Router>
  );
}

export default App;
