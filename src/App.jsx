import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";
import "./App.css";
import Home from "./Home";

function App() {
  

  // const content = datas.map((data) => (
  //   <tr>
  //     <td>{data._id}</td>
  //     <td>{data.name}</td>
  //     <td>{data.email}</td>
  //     <td>{data.phone}</td>
  //     <td>{data.country}</td>
  //   </tr>
  // ));

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
