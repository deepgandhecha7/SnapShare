
import './App.css';
import Home from './Home.jsx';
import Postview from './Postview';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/instaclone" element={<Postview></Postview>} />
          <Route path="/k"  />

        </Routes>
      </Router>

    </>
    
  );
}

export default App;
