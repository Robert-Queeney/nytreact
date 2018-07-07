import React from "react"; 


const Saved = props => (
    <div className="savedContent">
    <h3>Saved Articles</h3>
        <div className="savedArticles">
            <div className="saved">
                <p>{props.title}
                <button id={props.id} className="btn btn-primary delete">Delete</button>
                </p>
            </div>
        </div>
    </div>
); 

export default Saved; 