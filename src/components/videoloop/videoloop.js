import React from "react"
import videoloop from "../../assets/video/fl.mp4"


export default function videlop(){
    return(
        <video 
        autoPlay
        loop muted
        style={{
            "width":"100%",
            "height":"100%",
             }}>
            <source src={videoloop} type="video/mp4"/>
        </video>
    )
}