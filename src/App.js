import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header title = "My Todos List" showSearchBar = {false}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
