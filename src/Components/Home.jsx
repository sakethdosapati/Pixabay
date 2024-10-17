import React from "react";

function Home({search,searchHandle,api}){
    return(
        <>
            <div>
                <div>
                    <h1>Seach for images</h1>
                    <input type="text" placeholder="search for image" value={search} onChange={searchHandle} ></input>
                </div>
                <div>
                    {api.map((item)=>(
                        <div>
                            <img src={item.webformatURL}/>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
export default Home