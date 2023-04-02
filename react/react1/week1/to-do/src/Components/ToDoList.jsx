
import ToDoItem from './ToDoItem'
import ToDoListHeader from './ToDoHeader'
const listArray = [
  {  task: "Get out of bed", deadLine: "Wed Sep 13 2017" },
  { task: "Brush teeth", deadLine: "Thu Sep 14 2017" },
  { task: "Eat breakfast", deadLine: "Fri Sep 15 2017" }
];

function ToDo() {
  return (
    <div className="header">
      <ToDoListHeader/>
      {<ul className="list">
{listArray.map((eachList,i)=> {
 return <ToDoItem taskItem={eachList} key={i}/>
})}</ul>}
      </div>  
  );
}


export default ToDo