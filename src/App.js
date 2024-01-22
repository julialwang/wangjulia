import logo from './imgs/ambigram.png';
import name from './imgs/name.png';
import './styles/App.css';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Intro from './components/Intro.js'
import TypingBar from './components/TypingBar.js'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <div className="name-chunk">
            <h1 style={{ fontFamily: 'Ubuntu Mono, monospace', fontSize: "68px", marginBottom: "1vh", color: "#DFDFDF" }}>Julia L. Wang</h1>
            <div style={{ textAlign: "left", height: '100px' }}>
              <TypingBar />
            </div>
            <div style={{
              fontFamily: "Cambay", fontSize: "18px", color: "#DFDFDF", textAlign: 'left', alignContent: "left"
            }}>
              After four long years of stubbornly nursing a Bootstrap portfolio during my undergrad, I was finally driven to learn UX development thanks to my day job. I'm a bit of a designer at heart, so the nascent skills I've built this site with don't even come close to my vision (yet).<br></br>Nonetheless, it's symbolic of my goal as a junior developer: <b style={{backgroundColor:"#AB4E68", paddingLeft:"5px", paddingRight:"5px"}}>Design elegant software systems, pencil-to-paper, then learn everything needed to build them, fingers-to-keyboard.</b>
            </div>
          </div>
          <div style={{ marginRight: '10vw' }} >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
        <Intro />
      </div>
      <Footer />
    </div>
  );
}

export default App;
