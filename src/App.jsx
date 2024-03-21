import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Likes from "./pages/Likes.jsx"
import Home from './pages/Home.jsx'
import { ChakraProvider, CSSReset } from "@chakra-ui/react"


export default function App() {
  return (
   <ChakraProvider>
      {/* Override CSSReset styles */}
      <CSSReset config={{
             scrollBehavior: "smooth", // Enable smooth scrolling
        
}} />

   <Router>
    
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/likes" element={<Likes />}/>
    </Routes>
    </Router>

   </ChakraProvider>
  );
  
}

