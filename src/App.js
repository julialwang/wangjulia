import logo from './imgs/ambigram.png';
import name from './imgs/name.png';
import './styles/App.css';
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import Intro from './components/Intro.js'
import TypingBar from './components/TypingBar.js'


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="name-chunk">
          <h1 style={{ fontFamily: 'Ubuntu Mono, monospace', fontSize: "68px", marginBottom: "12px", color: "#DFDFDF" }}>Julia L. Wang</h1>
          <div style={{ textAlign: "left", height: '100px' }}>
            <TypingBar />
          </div>
          <div style={{
            fontFamily: "Cambay", fontSize: "18px", color: "#DFDFDF", textAlign: 'left', alignContent: "left"
          }}>
            Born in snowy Toronto and raised in cloudy Seattle, I've never been one to love tanning. But swimming is certainly a skill that's in my arsenal, and I really like spending all of my free time doing absolutely nothing and trying to think of fonts that look nice together by using this tool. Hopefully these fonts are all on Google because otherwise I will be very sad!
          </div>
        </div>
        <div style={{ marginRight: '10vw' }} >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
