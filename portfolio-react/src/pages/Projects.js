import React, { Component, useEffect } from 'react'
import { Transition,Grid,Icon,Card,Image } from 'semantic-ui-react'
import CardsProject from '../components/CardsProject';
import {
  
  Link,

} from "react-router-dom";
import Axios from 'axios';
export default class Projects extends Component {

  componentDidMount() {
    this.toggleVisibility();
  }
  state = { visible: false }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))
    
render(){

  
  const { visible } = this.state
  return (
    
    <Transition visible={visible} animation='scale' duration={500}>

      <Grid style={{backgroundColor:"whitesmoke", border:".2px solid rgba(0,0,0,0.24)",boxShadow:"-1px 0px 16px 2px rgba(0,0,0,0.24)" ,height:"100%"}} >
        <Grid.Row style={{backgroundColor:"#08B2E3",padding:"0"}}>
        <Grid.Column style={{padding:"0",width:"3.25% !important"}}><img width={12} height={12}  src="folder.png" /></Grid.Column>
        <Grid.Column  width={1}><div style={{color:"grey",
           fontFamily:"Arial",
           fontSize:"10px",
           textDecoration:"none", textAlign:"left"
          }}> | </div></Grid.Column>
            <Grid.Column only='computer' width={5}> <div style={{color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"10px",
           textDecoration:"none", textAlign:"left", padding:"0"
          }}>
            C:/Desktop/Projects
           </div></Grid.Column>
           <Grid.Column floated="right" style={{textAlign:"right"}} width={5}> <Link to="/"><Icon color='grey' style={{opacity:"70%"}} name='close' /></Link></Grid.Column>
        </Grid.Row>
        <Grid.Row><Grid.Column>PROJECTS</Grid.Column>  </Grid.Row>
           <Grid.Row >
            
             <Grid.Column style={{overflow:"scroll",height:"70vh",overflowX: "hidden"}}>
              <CardsProject/>
            
             </Grid.Column>
           </Grid.Row>
       </Grid>
    
  
    </Transition>
    
  );
}
}

