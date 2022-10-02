import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import PhoneBar from './components/PhoneBar/PhoneBar';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
