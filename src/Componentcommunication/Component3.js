import {useState} from "react";
const Component3 = (props) =>{
    const Data3="Component3 Data2";
    const [StateData3,SetStateData3]=useState(Data3);

    function Comp3Fun3(){

        SetStateData3("Component3 Refreshment");
        console.log("Welcome to component3");
        props.call2();

    }
    return<div>
        {Data3}<br/>
        {StateData3}<br/>
        <h1>THIS IS COMPONENT3</h1><br/>
        <button onClick={Comp3Fun3}>SUBMIT</button>
    </div>
    
    
}
export default Component3;
