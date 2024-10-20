import {BrowserRouter} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedbacks from './components/Feedbacks';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Works from './components/Works';
import Tech from './components/Tech';
import { StarsCanvas } from './components';

const  App=()=> {
  return (
    <BrowserRouter>
    <div className='relative bg-primary z-0'>
     <div className='bg-hero-pattern bg-cover bg-repeat bg-center'>
     <Navbar />
     <Hero />
     </div>
     <About />
     <Experience />
     <Tech />
     <Works />
     <Feedbacks />
     <div className='relative z-0'>
     <Contact />
     <StarsCanvas />
     </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
