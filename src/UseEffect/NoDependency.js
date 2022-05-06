import { useEffect } from 'react';

const NoDependency=()=>{
    useEffect(()=>{

        console.log("useEffect called")
    });

    function hello(value){
        console.log(value);

    }

    return(<div>
        {console.log("Rendering started")}

        <button type="submit" onClick={()=>hello(Math.random().toString())}>Hello</button>
    </div>)
}

export default NoDependency;