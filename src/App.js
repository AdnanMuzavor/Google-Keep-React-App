import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App(){


  const [listitem,setlistitem]=useState([]);

 const addnote=(newitem)=>{
 if(newitem.title!="" && newitem.content!=""){
 


    setlistitem((oldarr)=>{
        return [...oldarr,newitem];
    });
  
  }
else{
  alert("enter the data before clicking add button");
}
 }

const deleteitem=(id)=>{
  setlistitem((oldlistitem)=>{
  return oldlistitem.filter((ele,indx)=>{
    return indx!=id;
  })

})


}

 return(
   <>
  <Header/>
   <br/>
     
  <CreateNote passnote={addnote}/>

  <br/>
  <div className="placer">
    {listitem.map((element,indx)=>{
      return <Note 
      title={element.title}
      content={element.content}
      key={indx}
      id={indx}
      delete={deleteitem}/>
    })}
  </div>
  <br/>
  <Footer/> 

</>
 );
}

// function App() {
//   let greeting = "";
//   let cur = new Date(1999,12,2,10);
//   const CSS = {};
  
//   let curhour = cur.getHours();
//   if (curhour > 3 && curhour < 12) {
//     greeting = "Good Morning";
//     CSS.color = "green";
//   }
//   if (curhour > 12 && curhour < 20) {
//     greeting = "Good Afternoon";
//     CSS.color = "red";
//   } else {
//     greeting = "Good Night";
//     CSS.color = "blue";
//   }
//   return (
//     <div className="divtag">
//       <h1 className="h1-tag">
//         Hello sir,<span style={CSS}>{greeting}</span>
//       </h1>
//     </div>
//   );
// }

export default App;
