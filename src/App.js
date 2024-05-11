import './App.css';
import Nav from './Components/Nav';
import "./Assets/Common.css";
import Main from './Components/Main';
import Footer from "./Components/Footer"
import { Routes, Route } from "react-router-dom";
import Reservation from './Components/Reservation';
import Confirmation from './Confirmation';
import { useState,useEffect } from 'react';

function App() {
  const [rData, setRData] = useState("");
 useEffect(()=>{console.log(rData)},[rData])
  return (
    <div className="appWarpper">
      <Nav/>
      <Routes>
      {/* <Route index element={<Main/>} /> */}
      <Route exact path="/" element={<Main/>} />
      <Route exact path="reservation" element={<Reservation setRData={setRData}/>} />
      <Route exact path="confirmation" element={<Confirmation setRData={setRData}/>} />
      <Route exact path="*" element={<Main/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
