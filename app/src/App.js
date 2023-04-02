import "./App.css";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Series from "./components/Series";
import Peliculas from "./components/Peliculas";
function App() {
  const [title, setTitle] = useState("Titles");
  return (
    <div>
      <nav>
        <h1>DEMO Streaming</h1>
        <button>log in</button>
        <button>Start your free trial</button>
      </nav>
      <div>
        <h1>Popular {title}</h1>
      </div>
      <div>
        <Routes>
          <Route path={'/*'} element={<Home/>}/>
          <Route path={"/series"} element={<Series/>} />
          <Route path={"/movies"} element={<Peliculas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
