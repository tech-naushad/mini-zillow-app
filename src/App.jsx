import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyRoutes from './features/property/pages/PropertyRoutes';

function App() {
  return (
    <>
      <Router>
       <PropertyRoutes />
      </Router>
    </>
  );
}

export default App;

    
  