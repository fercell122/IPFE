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
            <source src="https://videolopp.s3.amazonaws.com/fl.mp4" type="video/mp4"/>
        </video>
    )
}