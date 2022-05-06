import ComponentB from "./ComponentB";

const ComponentA =()=>{
    let VariableA = "VariableA";
    let num1 = 10;

    let obj1 ={
        name:"React",
        language:"JavaScript",
    };
    let MyArray =[1,2,3,4];
    let ArrayObj=[
        {
            name:"A",
        },
        {
            name:"B",
        },
    ];

    function MyFunction(value){
        console.log(value);

    }

    function buttonClickHandler(){
        console.log("  button Click Handler");
    }
    return(
        <div>
            <ComponentB
            pass1={VariableA}
            passnum1={num1}
            objAttr={obj1}
            arrayAttr={MyArray}
            arrayObj={ArrayObj}
            funAttr={MyFunction}
            />
            <button onClick={ buttonClickHandler}>ComponentA Button</button>
        </div>
    );
};

export default ComponentA;