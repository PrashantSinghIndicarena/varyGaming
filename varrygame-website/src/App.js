
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeLandingPage from './components/home/HomeSe-1/HomeLandingPage';
import HomeLandingPage01 from './components/home/HomeSec-2/HomeLandingPage01';
import HomeLandingPage02 from './components/home/HomeSec-3/HomeLandingPage02';
import HomeLandingPage03 from './components/home/HomeSec-4/HomeLandingPage03';
import HomeLandingPage04 from './components/home/HomeSec-5/HomeLandingPage04';
import HomeLandingPage05 from './components/home/HomeSec-6/HomeLandingPage05';
import InputBox from './components/home/HomeSec-7/InputBox/InputBox';

function App() {
  return (
    <div className="App">
       <Navbar />
       <HomeLandingPage />
       <HomeLandingPage01 />
       <HomeLandingPage02 />
       <HomeLandingPage03 />
       <HomeLandingPage04 />
       <HomeLandingPage05 />
       <InputBox />
    </div>
  );
}

export default App;
