import  {useState} from "react";
import Component2 from "./Component2";
const Component1 =(props) =>{

var data1="OLD DATA FROM COMP1";
const [variable1,SetNewVariable1] =useState(data1);
 
function Comp1Fun1(){
    console.log(data1);
    console.log("Trying to change the data of a variable component1");
    const newvariable ="NEW DATA FROM COMP1";
    SetNewVariable1(newvariable);
}
 return
 <div>
     <h2>{data1}</h2><br/>
     <h3>{variable1}</h3><br/>
     <Component2 call={Comp1Fun1}/>
 </div>
}

export default Component1;