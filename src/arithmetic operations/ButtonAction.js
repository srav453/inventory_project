//Creating Three fields(2 for input,1 is to Display result) .created 4 buttons(Addition,subtraction,multplication,divison).
//On each button click it will display the respective result in the 3rd textfield



import { useState } from "react";  

const ButtonAction =() => {


    const [ num1,setNum1]= useState();
    const [ num2,setNum2]= useState();
    const [ result,setResult]= useState();


    function Trigger1(event){

        setNum1(event.target.value);
    }
    function Trigger2(event){
    
        setNum2(event.target.value);

    }
    function addFun(){

        let add1=parseInt(num1,10)+parseInt(num2,10);
        console.log(add1);
        setResult(add1);

        }

        function subFun(){

            let sub1=parseInt(num1,10)-parseInt(num2,10);
        setResult(sub1);

            }

            function mulFun(){
                let mul1=parseInt(num1,10)*parseInt(num2,10);
                setResult(mul1);
        
                }

                function divFun(){

                    let div1=parseInt(num1,10)/parseInt(num2,10);
        setResult(div1);

                    
                    }
    return <div> 

    <h1 align="center">Performing Arithmetic operations</h1>

Number1 : <input type="number"placeholder="Enter number1 here"onChange={Trigger1}/><br/>
Number2 : <input type="number"placeholder="Enter number2 here"onChange={Trigger2}/><br/>
Display Result : <input type="number"placeholder="Result Displayed here" value={result}/><br/>

<button onClick={addFun}>ADDITION</button><br/>
<button onClick={subFun}>SUBTRACTION</button><br/>
<button onClick={mulFun}>MULTIPLICATION</button><br/>
<button onClick={divFun}>DIVISION</button><br/>
</div>

}
export default ButtonAction;