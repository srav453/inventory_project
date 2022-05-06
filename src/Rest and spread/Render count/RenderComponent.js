import {useState,useEffect} from "react";

const RenderComponent =() =>{
    const [count, setCount]= useState(0);
    const [content, setContent]=useState();
    useEffect(()=>{
        let sum=0;
        sum=sum+count;
        setContent(sum);

    },[count]);
    return(
        <div>
            <h1>['Rendering count=${content}']</h1>
            <button onclick={()=> setCount((preValue)=> preValue +1)}>
                {""}
                Update count
            </button>
        </div>
    );

};
export default RenderComponent;