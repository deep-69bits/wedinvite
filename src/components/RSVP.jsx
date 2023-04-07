import React from "react";
export default function RSVP(){
    return(
        <div class="grid md:grid-cols-2 font-serif">
            <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" className="md:w-full md:h-screen w-0 h-0 object-cover mr-0"/>
            <div className="mx-auto max-w-xl md:pt-40 md:text-8xl text-6xl text-sky-800 md:ml-[20%] ml-10 pt-10">RSVP
                <p class="text-lg md:text-xl lg:text-2xl text-center py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-24">
                  I, <input type="text" placeholder="Name" class="mb-3 w-32 md:w-48 lg:w-64 border border-gray-400 rounded-sm px-2 py-1" /> am <input type="text" placeholder="Attending" class="my-3 w-32 md:w-48 lg:w-64 border border-gray-400 rounded-sm px-2 py-1" /> and I am bringing <input type="number" placeholder="No. pers" class="mt-3 w-32 md:w-48 lg:w-64 border border-gray-400 rounded-sm px-2 py-1" /> with me.
                </p>
            </div>
        </div>    
    )
}