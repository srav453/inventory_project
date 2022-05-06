import Splitfirst from "./Splitfirst";

import Splitsecond from "./Splitsecond";

import Splitthird from "./Splitthird";

const SplitCompex =(props)=>{

    return(
        <div>
            <div>master splitComponent 0</div>
            <div>master splitComponent 00</div>
            <div>master splitComponent 000</div>
            <div>master splitComponent 0000</div>


            <Splitfirst/>
            <Splitsecond/>
            <Splitthird/>
        </div>
    );
};

export default SplitCompex;