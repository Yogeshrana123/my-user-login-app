
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponents/Header";
import Home from "./MyComponents/Home";
import Login from "./MyComponents/Login";
import Details from "./MyComponents/Details";
import { Routes,Route} from "react-router-dom";



function App() {
  return (
         <>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/details" element={<Details/>}/>
          </Routes>
          </>
  );
}

export default App;
