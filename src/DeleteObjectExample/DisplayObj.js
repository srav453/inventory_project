import Form from "./Form";

import { useState } from 'react';

const DisplayObj =()=>{
    const [MyArray,setMyArray] = useState([]);
    const MyFunction=(value)=>{
    setMyArray((preValue)=>{
        return [{Key:value}, ...preValue];
    });

    };

    const deleteFunction=(value)=>{
        if(value){
            setMyArray((prevValue)=>{
                const updatedResult = prevValue.filter((res)=> res.key !== value);
                return updatedResult;
            });

        } else{
            setMyArray((preValue)=>{
                let newValues=[...preValue];
                newValues.shift();
                return newValues;

            });
        }
    };

    return(
        <div>
            <h2>Remove Object from an Array</h2>
            {<Form addAttr={MyFunction} removeAttr={deleteFunction}/>}
            {MyArray.map((values, index)=>{
                return <p key={index}>{JSON.stringify(values)},</p>;
            }
            )}
        </div>
    );
};

export default DisplayObj;
