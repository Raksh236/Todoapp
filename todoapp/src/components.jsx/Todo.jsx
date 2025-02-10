import { useState } from "react";
import Form from "./Form";
import Todoitem from "./Todoitem";
import Todolist from "./Todolist";
import Footer from "./Footer";
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  
  const compl=todos.filter((todo)=>todo.done).length
  const totaltodos=todos.length
  return (
    
    <div>
    <Form todos={todos} setTodos={setTodos}/>

    <Todolist todos={todos} setTodos={setTodos}/>
    <Footer compl={compl} totaltodos={totaltodos}/>
    </div>
  );
}
