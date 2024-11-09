import "./App.css";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="container">
      <Sidebar className="sidebar-container" />
      <Canvas className="canvas-container" />
    </div>
  );
}

export default App;
