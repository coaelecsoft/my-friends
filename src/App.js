import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './home.js'
import About from './about.js'
import Galery from './galery.js'
import Contact from './contact.js'
import './components/main-style.scss'
function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/galery" element={<Galery />} />
              <Route path="/contact" element={<Contact />} />
              
          </Routes>
      </BrowserRouter>
  );
}

export default App;
