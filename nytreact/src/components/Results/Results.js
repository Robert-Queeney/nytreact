import React from "react"; 
import "./React.css"; 

const Results = props => (
   <div className="info">
    <div id={props.id}>
        <h3>{props.title}
        <button id={props.id} onClick={props.saveButton} className="btn btn-info saves">Save</button>
        </h3>
        <p>{props.url}</p>
        <p>{props.date}</p>
    </div>
    </div> 
);

export default Results; 