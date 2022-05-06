import { useEffect,useState } from 'react';
const Dependency =()=>{

const [var1,setstate1]=useState(0);
const [state2,setstate2]=useState();
    useEffect(()=>{
        {console.log("No dependcy useEffect called ")}

    },[]);
    useEffect(()=>{
        {console.log("single state dependcy useEffect called  ")}
setstate1("value2");
    },[var1]);
    useEffect(()=>{
        {console.log("either or state dependcy useEffect called ")}
        setstate2(400);
{console.log(state2)}

    },[var1,state2]);
    function setHello(value){
console.log(value);
    }      

    return (<div>
        {console.log("calling 1 started ")} 
        
        <button type="submit" onClick={()=>{setHello(1000)}}>Click me</button><br/>
    
        <button type="submit" onClick={()=>setstate1("value")}>Increment</button><br/>
    </div>)
    
    
    }
    export default Dependency;


   