import React from "react"
import Parallax from "../../components/Parallax/Parallax"
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "./components";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import image from "../../assets/images/bg2.jpg"
import VideoL from "../../components/videoloop/videoloop.js"

const useStyles = makeStyles(styles);


export default function Landing(){
    const classes = useStyles();
    return(
      
      <div>
        <Parallax image={image}>
        <div className={classes.container}>
        <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Initial Project Front-End .</h1>
                <h3 className={classes.subtitle}>
                  A Business site based on React.
                </h3>
                
              </div>
              </GridItem>
              
          </GridContainer>
        </div>
        
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
      <VideoL/>
      </div>
      </div>
    )
}