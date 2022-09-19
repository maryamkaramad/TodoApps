const TodoItem= ({todo,todos,setTodos,setFormStatus,setForm}) =>{ 

    const handleDelete= id=>{
        setTodos(todos.filter(todo => todo.id !==id ))
      }
      
      const handleCheck = id => {
       setTodos(todos.map(todo => todo.id === id ? {...todo, state: !todo.state} : todo));
      }
      
      
      
      const handleUpdate = todo =>{
        setFormStatus("update");
      setForm(todo);
      
      }

    return(
        <div style={{border:"1px solid gray",margin:"20px"  }}>
        <div>id:{todo.id}</div>
        <div>title:{todo.title}</div>
        <div style={{cursor:"pointer"}} onClick={()=>handleCheck(todo.id)}>state:{todo.state ? 'yes' : 'no'}</div>
        <div>discription:{todo.discription}</div>
    <button style={{background:"green",color:"white",cursor:"pointer", margin:"10px"}}  onClick={()=> handleUpdate(todo)}>update</button>
    <button style={{background:"red",color:"white",cursor:"pointer" ,margin:"10px" }} onClick={()=>handleDelete(todo.id)}>delete</button>
    
        </div>

    )
}

export default TodoItem