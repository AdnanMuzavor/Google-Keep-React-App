import React, {useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Button} from '@material-ui/core';
function CreateNote(props){


const [newitem,setnewitem]=useState({
    title:"",
    content:"",
})
    const Changetrack=(event)=>{
const {name,value}=event.target;

setnewitem((previtem)=>{
    return{
        ...previtem,
        [name]:value,
    };
});
console.log(newitem);


}


const submitdata=()=>{
props.passnote(newitem);

    // setlistitem((oldarr)=>{
    //     return [...oldarr,newitem];
    // });
    setnewitem((previtem)=>{
        return {
            title:"",
            content:"",
        }
    })

}

    return(
        <>
        <div className="container">
             <div className="textcontent">
            <input 
            type="text" 
            name="title"
            placeholder="enter yoir title"
            value={newitem.title}
            onChange={Changetrack}
            />
            <textarea 
            className="textarea"
            placeholder="enter your keep"
            onChange={Changetrack}
            name="content"
            value={newitem.content}
            />
            <Button className="btn" id="btnn" 
            onClick={submitdata}
            >
            <AddCircleIcon className="createbtn"/>
            </Button>
            </div> 

        </div>
        </>
    )
}

export default CreateNote;