import {useState} from "react";
const Form=(Props)=>{
    const[inputValue, SetInputValue] = useState("");

    function inputOnChangeHandler(event){
        SetInputValue(event.target.value);
    }

    function onSubmitHandler(event){
        event.preventDefault();
        Props.addAttr(inputValue);
        SetInputValue("");
    }
    function onDeleteHandler(event){
        event.preventDefault();
        Props.removeAttr(inputValue);

    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                <input>

                type="text"
                placeholder="Enter any value"
                value={inputValue}
                onChange={inputOnChangeHandler}
                </input>
                </div>
                <br/>
                <div>
                    <button type="submit"> Add Element</button>
                </div>
            </form>
            <br/>
            <form on onSubmit={onDeleteHandler}>
            <div>
                    <button type="submit"> Remove Element</button>
                </div>

            </form>
        </div>
    
    );
};

export default Form;