import React, { Component, useState, useEffect } from 'react'
import { Transition,Grid,Icon,Image,Header,Divider, Popup, Input, Form, Button} from 'semantic-ui-react'
import {
  Link,

} from "react-router-dom";

import Axios from 'axios';
export default class Admin extends Component {

  state = { username: "",password:"" };
render(){
    
 const submitUser = () => {
    Axios.get('http://localhost:3001/api/user',{params:{usern: this.state.username, pw:  this.state.password}}).then((response)=>{
    
    if(Object.keys(response.data).length>=1){
        window.location.href = '../add'; 
    } else {
        alert("Wrong credentials");
    }
    })


 };
  return (
    
    <Transition visible={true} animation='scale' duration={500}>

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
            C:/Desktop/Admin
           </div></Grid.Column>
           <Grid.Column floated="right" style={{textAlign:"right"}} width={5}> <Link to="/"><Icon color='grey' style={{opacity:"70%"}} name='close' /></Link></Grid.Column>
        </Grid.Row>
  
        <Grid.Row style={{marginTop:"10%"}}>
             <Grid.Column>
             <div style={{maxWidth:"60%",marginRight:"auto",marginLeft:"auto"}}>
                <Header>Please LogIn to access Admin features</Header>
                <Form>
                    <Input type='text' onChange={(e)=>{
                        this.setState({username: e.target.value})
                    }}></Input>
                    <br></br>
                    <br></br>
                    <Input type='password'  onChange={(e)=>{
                        this.setState({ password : e.target.value})
                    }}></Input>
                    <br></br>
                    <br></br>
                    <Button onClick={submitUser}>LogIn</Button>
                </Form>
             </div>
             </Grid.Column>
           </Grid.Row>
       </Grid>
    
  
    </Transition>
    
  );
}
}

