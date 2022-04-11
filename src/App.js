import "./App.css";

// Sidebar
import Header from "./Components/Sidebar/Header";
import Info from "./Components/Sidebar/Info";
import Social from "./Components/Sidebar/Social";
import Languages from "./Components/Sidebar/Languages";
import Divider from "./Components/Sidebar/Divider";

// Main content
import Experience from "./Components/MainContent/Experience";
import LatestProjects from "./Components/MainContent/LatestProjects";
import Education from "./Components/MainContent/Education";
import Skills from "./Components/MainContent/Skills";

function App() {
  return (
    <div className="App">
      <div className="side-container">
        <Header />
        <Divider />
        <Info />
        <Divider />
        <Social />
        <Divider />
        <Languages />
      </div>
      <div className="main-container">
        <Experience />
        <LatestProjects />
        <Education />
        <Skills />
      </div>
    </div>
  );
}

export default App;
