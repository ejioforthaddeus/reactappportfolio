import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Planes from './Components/Planes/Planes';
import Programe from './Components/Programs/Programe';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Programe/>
      <Reasons/>
      <Planes/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
