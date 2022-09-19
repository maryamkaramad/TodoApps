
import './App.css';
import { useState } from 'react';
import Todoform from './component/Todoform';
import TodoItem from './component/TodoItem';

function App() {
const [todos, setTodos] = useState([
  { id:1, title:"buy milk", state: false, discription: "import" },
  { id:2, title:"call mom", state: true, discription: "import" },
  { id:3, title:"go to homes sister ", state: false, discription: "import" },
])

const[form,setForm]=useState(
  {title:"",discription:""}
)

const[formStatus,setFormStatus]=useState("add")





  return (
  
<div>
<Todoform form={form} formStatus={formStatus} todos={todos} setTodos={setTodos} setFormStatus={setFormStatus} setForm={setForm}/>
  {todos.map(todo => <TodoItem todo={todo} todos={todos} setTodos={setTodos} setFormStatus={setFormStatus} setForm={setForm}/> )}
</div>
  );
}

export default App;
