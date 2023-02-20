
import ToDoItem from './ToDoItem'
import ToDoList from './ToDoHeader'
const listArray = [
  {  task: "Get out of bed", deadLine: "Wed Sep 13 2017" },
  { task: "Brush teeth", deadLine: "Thu Sep 14 2017" },
  { task: "Eat breakfast", deadLine: "Fri Sep 15 2017" }
];

function ToDo() {
  return (
    <div className="header">
      <ToDoList/>
      <ItemKey/>
      </div>  
  );
}
function ItemKey(){
return (
    <ul className="list">
{listArray.map((eachList,i)=> {
 return <TaskItem taskItem={eachList} key={i}/>
})}
    </ul>
)
}
function TaskItem({taskItem}){
return (
  <div className="eachitem">
<ToDoItem task={taskItem.task}
deadline={taskItem.deadLine}/> 
</div>)
}

export default ToDo