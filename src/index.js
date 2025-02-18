import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function App() {
  return (
   <div style={{backgroundColor:'gray',padding:'20px'}}>
     <Header/>
     <Content/>
     <Footer/>
     
   </div>
 
  );
}

function Header(){
  return(
    <div style={{backgroundColor :'yellow',color:'blue',padding:'20px'}}>
      <h1>Header

      </h1>
    </div>
  )
}

function Content(){
  function getResult(event){
    let ans1= event.target.op1.value;
     let ans2=event.target.op2.value;
     let ans3= event.target.op3.value;
     let ans4=event.target.op4.value;
     

     let res=0;
     if(ans1==="OOPL")
     {
      res++;
     }
    if(ans2==="Structured query language"){
      res++;
     }
    if(ans3==="Scripting language")
     {
      res++;
     }
     if(ans4==="Markup language")
     {
      res++;
     }
     alert("total marks :"+res);

  }
  return(
    <div style={{backgroundColor:'skyblue',padding:'20px',margin:'30px'}}>
   <h1>Content</h1>     
   <form onSubmit={getResult}>
   <Question
   ques="1.What is java"
   op1="OOPL"
   op2="Structured PL"
   op3="DBMS"
   name='op1'
   />
   <Question
   ques="2.What is SQL"
   op1="Structured query language"
   op2="Structured PL"
   op3="RDBMS"
    name='op2'
   />
   <Question 
   ques="3.What is JS"
   op1="OOPL"
   op2="Scripting language"
   op3="Markup language"
    name='op3'
   />
   <Question
   ques="4.What is HTML"
   op1="SL"
   op2="Markup language"
   op3="Scripting language"
    name='op4'
   />
   <input type='submit'value='Get Result'></input>
   
   </form>
    </div>
  )
}

function Footer(){
  return(
    <div className='foot'>
      <h1 style={{position:'relative',left:'10px',color:'blue'}}>Footer</h1>
    </div>
  )
}

function Question(props){
  return(
    <div style={{backgroundColor:'pink',borderRadius:'10px',margin:'10px',padding:'10px'}}>
     <h1 style={{backgroundColor:'lightsalmon',margin:'10px',position:'relative',top:'10px'}}>{props.ques}</h1><br></br>
     <input type='radio' name={props.name} value={props.op1} ></input><label >{props.op1}</label>
     <input type='radio' name={props.name} value={props.op2} ></input><label >{props.op2}</label>
     <input type='radio' name={props.name} value={props.op3} ></input><label >{props.op3}</label>
    
    </div>
  )
}