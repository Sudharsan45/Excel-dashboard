const $todo = document.getElementById("inp");
const $todolist = document.getElementById("todolist");

$todo.addEventListener("keypress", (e) => {
  if (e.code === "Enter" && e.target.value!=='') {
    let to = e.target.value;
    let todoid = new Date().getDate();
    
    let todoitem = document.createElement("li");
    
    
    todoitem.innerHTML = `<input id="${todoid}" type="checkbox">
   <label for="${todoid}">${to}</label> `;
    $todolist.appendChild(todoitem);
  }
});
$todolist.addEventListener('click',(e)=>{
   
   if(e.target.checked){
    e.target.parentElement.classList.add('completed');
    }
    else{
         e.target.parentElement.classList.remove('completed'); 
    }
})