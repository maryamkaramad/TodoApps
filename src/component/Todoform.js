const Todoform=({form,formStatus,todos,setTodos,setFormStatus,setForm})=>{
    const handlechange= (e)=>{
        // if(e.target.name==="title")
        // setForm({...form,title:e.target.value})
      
      setForm({...form,[e.target.name]:e.target.value})
      }
      const handleSubmit= e => {
        e.preventDefault();
      if (formStatus=== "add"){
        setTodos([...todos,{id : Math.floor(Math.random()*1000) , title:form.title ,discription:form.discription , state:false}])
      }else{
      setTodos(todos.map(todo=> todo.id=== form.id ? form:todo))}
      
      
      
        setForm( {title:"",discription:""})
        setFormStatus("add")
      }

    return(
<div style={{margin:"15px 100px"}}>
todoForm
<div >
  <form onSubmit={handleSubmit}>
  <input style={{marginRight:"50px"}} onChange={handlechange}  name={"title"} value={form.title}/>
  <input   onChange={handlechange} name={"discription" }value={form.discription} />
  <button type='submit' style={{background:"red",color:"white",cursor:"pointer"}}>
    {formStatus ==="add" ? "submit" : "update"}
  </button>
  </form>
</div>
</div>

    )
}

export default Todoform