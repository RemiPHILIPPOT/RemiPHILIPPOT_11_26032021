import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ApartmentPage from "./pages/ApartmentPage";

export default function App() {
  return (
    <Router>
        <Header/>            
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route exact path="/" component={HomePage} />  
          <Route path="/apartment/:id" component={ApartmentPage} />  
          <Route component={ErrorPage}/>
        </Switch>
        <Footer/>
    </Router>
  );
}



