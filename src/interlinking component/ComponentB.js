const ComponentB=(props) =>{

    let numVar=1000;
    function ClickHandler(){
        props.funAttr(props.pass1);
    }


    return(
        <div>
            {props.pass1}
            <br/>
            {props.passNum1}
            <br/>
            {props.objAttr.language}
            <br/>
            {props.arrayAttr[3]}
            <br/>
            {props.arrayObj[1].name}
            <br/>

            <button onClick={ClickHandler}>Click Here</button>
        </div>
    );
};

export default ComponentB;