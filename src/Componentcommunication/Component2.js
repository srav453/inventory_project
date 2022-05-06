import Component3 from "./Component3";
import { useState } from "react";
const Component2 = (props) =>{
    const[variable2,setVariabble2] = useState("");
    function Comp2Fun2(){

        props.call();
        setVariabble2("Component2 Function2");

    }
    return <div>
        {variable2}
        <h2>This is Component33</h2>
        <Component3 call2 ={Comp2Fun2}/>
    </div>
}

export default Component2;