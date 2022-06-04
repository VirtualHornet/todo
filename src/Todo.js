import React, { useState } from "react";

export default ()=>{

    const [todo,Add]= useState("");



    return(
        <div>
            <label>
                Add todo:
            </label>
            <input 
                value={todo}
                name="todo"
                type="text"
                onChange={(e)=>Add(e.target.value)}
            ></input>
          
            <p>{(todo==="")?"Todos:":todo}</p>
        </div>
    );
}