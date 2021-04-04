import React from "react"



export default function videlop(){
    return(
        <video 
        autoPlay
        loop muted
        style={{
            "width":"100%",
            "height":"100%",
             }}>
            <source src={process.env.PUBLIC_URL + '/video/fl.mp4'} type="video/mp4"/>
        </video>
    )
}