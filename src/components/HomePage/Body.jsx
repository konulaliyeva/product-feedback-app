import React from "react";
import "./Body.css"
function Body (){
    return (
        <div className="suggestion_container">
           <div className="suggestion_content">
           <div className="number">
            <i className="fa-solid fa-angle-up"></i>
            <p>112</p>
           </div>
           <div className="content">
               <h4>Add tags for solution</h4>
               <p>Easier to search  fro solutions based on a specific task</p>
               <button>Feature</button>

           </div>
           <div className="comment">
           <i className="fas fa-comment"></i>
           2
           </div>
           </div>
        </div>
    )
}

export default Body;