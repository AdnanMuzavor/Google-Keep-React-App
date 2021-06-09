import React from 'react';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note(props){

    const deletingcall=()=>{
        props.delete(props.id);
    }
    return(
        <span>
        <div className="note">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
            <button className="delbtn" onClick={deletingcall}>
                <DeleteOutlineIcon className="deleteIcon "></DeleteOutlineIcon>
            </button>
        </div></span>
    )
}

export default Note;