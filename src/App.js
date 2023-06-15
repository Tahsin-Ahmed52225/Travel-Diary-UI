import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/partials/navbar.components'
import Footer from './components/partials/footer.components'



function App() {
  return (
      <div className="App">
          <NavBar/>
          <Footer/>
      </div>
  );
}

export default App;
