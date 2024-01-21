import logo from './imgs/logo.png';
import name from './imgs/name.png';

import './styles/App.css';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={name} className="App-logo" alt="logo" />
        <div>
          <h1>Julia L. Wang</h1>
          <p><em>Software engineer, bookworm, and full-time full-sender.</em></p>
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
