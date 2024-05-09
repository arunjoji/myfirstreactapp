import './App.css';
import Nav from './Components/Nav';
import "./Assets/Common.css";
import Main from './Components/Main';
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="appWarpper">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
