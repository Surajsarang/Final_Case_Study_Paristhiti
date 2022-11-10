import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleImageSlider from "react-simple-image-slider";
import Home from './home';
import AboutUs from './aboutus';




const routing  = (

  <Router>
      <h3 align="center">Routing implementation in React JS</h3>
      <hr/>
      <div style={{textAlign: 'center'}}> 
          <Link to="/">Home</Link> |
          <Link to="/aboutus">ABOUT US</Link> |
               
      </div>
      <hr/>
      <Routes>
          <Route path="/"  element = { <App /> }  />
          <Route path="/Employees"  element = { <AboutUs /> }  />
          <Route path="/OurWork"  element = { <OurWork /> }  />
          <Route path="/Register"  element = { <Register /> }  />
          <Route path="/"  element = { <Donation /> }  />
          <Route path="/"  element = { <ContactUs/> }  />
      </Routes>
  </Router>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
