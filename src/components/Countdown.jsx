import React from "react";
import CountdownTimer from "./CountdownTimer";
import Header from "./Header";
export default function Countdown(){
    const deadline = new Date('2023-12-31T23:59:59.999Z').getTime();
    return(
        
        <div className="grid grid-flow-row auto-rows-max items-center bg-[#f9d9eb]">
            <div className="pt-10 text-4xl text-pink-700 text-center pb-8 font-serif">The Countdown</div>
            <CountdownTimer deadline={deadline}/>
            <div className="pt-10 text-4xl text-purple-950 text-center mt-0 pb-10 font-serif">
              <p className="text-2xl  text-black text-center">Meet Us At</p>
              This Address, Street 71,Amsterdam
            </div>
        </div>
    )
}