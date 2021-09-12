import './App.css';
import SignIn from './views/SignIn';
import Home from './views/Home';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMe } from './store/actions/auth';
import PageNotFound from  './views/PageNotFound';
import { AuthRoute, PrivateRoute } from "./HOCs/Route";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if(token) (dispatch(fetchMe))
  }, [dispatch, token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>          
         
           <AuthRoute path="/signin" exact component={SignIn}  redirectPath="/"/>
           <PrivateRoute path="/" exact component={Home}  redirectPath="/signin"  />
           <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
