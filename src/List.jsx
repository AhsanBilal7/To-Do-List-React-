import React, { useState } from "react";
import "./List.css";
import Items from "./Items";
function List() {
  const [task, settask] = useState("Dummy");
  const [items, setitems] = useState([]);

  const change = (event) => {
    const value = event.target.value;
    settask(value);
    // console.log(value)
  };
  const click = () => {
    //   setitems.append();
    setitems((oldArray) => oldArray.concat(task))
    settask(" ")
};
// const cancle = (ok) =>
// {
//    console.log(`Deleted the Key no:  `)
//    console.log(ok)
//    setitems((oldArray) => oldArray.splice(ok,1))
// //    array.splice(index, 1);

// }
function remove(arr,id)
{
   
    return 
    
}
const cancle = (id) => {

    console.log("Deleted");
    setitems((oldarray) => {
        return oldarray.filter((arry,index) =>{
            return index !== id ;
        })
    })
 
  };
  console.log(items)
  return (
    <div className="maindiv">
<h2 style={{color:'white'}}>To Do List React Program</h2>
      <div className="centerdiv">
        <div className="heading">
        <h3>Add To Do</h3>
          <input
            onChange={change}
            type="text"
            name="list"
            value={task}
            placeholder="Enter the Work"
          />
          <button onClick={click} className="button">
            +
          </button>
        </div>
        <div className="list">
          <ol>
            {items.map((itemvalue,index) => {
                {/* console.log(index) */}
              return (
                <Items onselect = {cancle} id = {index} key = {index} text = {itemvalue} />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default List;
