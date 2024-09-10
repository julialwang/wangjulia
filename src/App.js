import logo from "./imgs/ambigram.png";
import "./styles/App.css";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
import TypingBar from "./components/TypingBar.js";
import Experience from "./components/Experience.js";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="App">
          <NavBar />
          <header className="App-header">
            <div className="name-chunk">
              <h1
                style={{
                  fontFamily: "Ubuntu Mono, monospace",
                  fontSize: "68px",
                  marginBottom: "1vh",
                  color: "#DFDFDF",
                }}
              >
                Julia L. Wang
              </h1>
              <div style={{ textAlign: "left", height: "100px" }}>
                <TypingBar />
              </div>
              <div
                style={{
                  fontFamily: "Cambay",
                  fontSize: "18px",
                  color: "#DFDFDF",
                  textAlign: "left",
                  alignContent: "left",
                }}
              >
                After four long years of nursing a Bootstrap portfolio during my
                undergrad, I finally learned React thanks to my day job. I'm a
                bit of a designer at heart, so the skills I've built this site
                with don't quite live up to my vision.<br></br>
                Nonetheless, my efforts symbolize my goal as a junior developer:{" "}
                <b
                  style={{
                    backgroundColor: "#AB4E68",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                  }}
                >
                  Design elegant software systems, pencil-to-paper, then learn
                  everything needed to build them, fingers-to-keyboard.
                </b>
              </div>
            </div>
            <div style={{ marginRight: "10vw" }}>
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </header>
          <Intro />
        </div>
      </div>
      <Experience />
      <div style={{ textAlign: "center" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
