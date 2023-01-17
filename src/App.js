import logo from './logo.svg';
import './App.css';
import "./Toheeb";
import Toheeb from './Toheeb';
import Header from './myComponents/HeaderFolder/Header';
import Milk from './myComponents/HeaderFolder/Milk';
import Footer from './myComponents/Footer/Footer';
import Headers from './myComponents/Header/Headers';
import {Akande} from './myComponents/Header/Headers';
import Showcase from './myComponents/Header/Showcase';
import { Tomato } from './myComponents/Header/Showcase';
import { Orange } from './myComponents/Header/Showcase';

function App() {
  return (
    <div className="App">
      {/* <p>welcome to react class</p> */}


      {/* <Toheeb/> */}
      {/* <Footer />
      <Milk />
      <Header /> */}
      <Headers />
      <Akande />
      <Showcase name = "ade"/>
      <Showcase name = "son"/>
      <Showcase name = "door"/>
      <Showcase name = "ola"/>
      <Tomato />
      <Orange />
   
   

    </div>
  );
}

export default App;
