import './App.css';
import Header from './Components/Header';
import { Todos } from "./Components/Todos";
import Footer from './Components/Footer';
import { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("onDelete called", todo)
    setTodos(
      todos.filter((child) => {
        return child !== todo
      })
    )

  }

  let [todos,setTodos] = useState([
    {
      srno: 1,
      title: "Learn React",
      description: "You have gotta learn react"
    },
    {
      srno: 2,
      title: "Learn Blockchain",
      description: "You have gotta learn blockchain"
    },
    {
      srno: 3,
      title: "Learn Swift",
      description: "You have gotta learn blockchain"
    }
  ])

  return (
    <>
      <Header title="My Todos List" showSearchBar={false} />
      <Todos todos={todos} onDelete = {onDelete} />
      <Footer />

    </>
  );
}

export default App;
