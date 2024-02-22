import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Likes from "./pages/Likes.jsx"
import Home from './pages/Home.jsx'

export default function App() {
  return (
   <div>
   <Router>
    
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/likes" element={<Likes />}/>
    </Routes>
    </Router>

   </div>
  );
  
}

