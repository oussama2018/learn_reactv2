import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './component/Main';



function App() {
 return (
  <div>
  <Header name="anna" color="pruple"/>
  <Main greet="howdy"/>
  <Sidebar greet ="hi"/>
 </div>
 )

 
}

export default App;
