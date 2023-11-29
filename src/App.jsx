import './App.css';
import Navbar from './components/Navbar';
import WhiteSpace from './components/WhiteSpace';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Services from './pages/Services';

function App() {
  return (
    <div className='bg-[#DCDCDC]'>
    <Navbar/>
    <HomePage/>
    <WhiteSpace/>
    <AboutPage/>
    <Services/>
    </div>
  );
}

export default App;
