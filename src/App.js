import './App.css';
import Navbar from './components/Navbar/Navbar';
import WaveHome from './components/WaveHome/WaveHome';
import About from './components/About/About';
import CourseList from './components/CourseList/CourseList';
import Choose from './components/Choose/Choose';
import Testimonial from './components/Testimonial/Testimonial';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Whatsapp from './components/Social/Whatsapp';
import Phone from './components/Social/Phone';
import BackTop from './components/Social/BackTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WaveHome/>
      <About/>
      <CourseList/>
      <Choose/>
      <Testimonial/>
      <Leaderboard/>
      <Contact/>
      <Footer/>
      <Whatsapp/>
      <Phone/>
      <BackTop/>
    </div>
  );
}

export default App;