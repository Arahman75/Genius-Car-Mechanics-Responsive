
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/notFound/NotFound';
import Header from './pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Header></Header>
       <Switch>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    <Route path='/home'>
      <Home></Home>
    </Route>
    <Route path='/login'>
      <Login></Login>
    </Route>
    <PrivateRoute path='/booking/:serviceId'>
      <Booking></Booking>
    </PrivateRoute>
    
<Route path='*'>
  <NotFound></NotFound>
</Route>
       </Switch>
     </Router>
    </AuthProvider>
  </div>
  );
}

export default App;
