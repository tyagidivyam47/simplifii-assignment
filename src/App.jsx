import { Routes, Route} from "react-router-dom";
import Add from "./Add";
import "./App.css";
import Home from "./Home";

function App() {
  

   return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;
