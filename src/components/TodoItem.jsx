//   import React from "react";

//   function MainContent() {
//      return ( 
//  <div class="todoList">
//    <h1>My To-Do List</h1>
//    <div class="items">
//      <input id="item1" type="checkbox" checked />
//      <label for="item1"> Make a to-do List </label>

//      <input id="item7" type="checkbox" />
//      <label for="item7">Learn React, and JS, git gud</label>

//      <input id="item2" type="checkbox" />
//      <label for="item2">Do fun projects that are fun to do and visit</label>

//      <input id="item3" type="checkbox"/>
//      <label for="item3">Get a carreer and monetize our skills into a business</label>

//      <input id="item4" type="checkbox"/>
//      <label for="item4">Switzerland</label>

//      <input id="item5" type="checkbox"/>
//      <label for="item5">Travel</label>

//      <input id="item6" type="checkbox"/>
//      <label for="item6">Marry</label>

//      <h2 class="done">Done</h2>
//      <h2 class="pending">Pending</h2>
//    </div>
//  </div>
    
//   )
//   }

//   export default MainContent


import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
      
      type="checkbox"
       checked={props.item.completed} 
       onChange={() => props.handleChange(props.item.id)}/>
      
      <p>{props.item.text}</p>

    </div>
  )
}

export default TodoItem