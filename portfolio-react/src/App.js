import React, { useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import MenuTab from "./components/MenuTab";
import { Grid, Segment } from 'semantic-ui-react';
function App() {

  var date = new Date, dformat = [date.getMonth()+1, date.getDate(), date.getFullYear()].join('/');

  return (
    
    <div className="App" style={{backgroundSize:"cover",backgroundImage:'url(windowsBackground.jpg)', height:"100vh",margin:"0"}}>
      <Grid style={{ height:"95vh",margin:"0"}} >
      <BrowserRouter>
    
      <Grid.Row style={{margin:"0"}}>
        <Grid.Column floated='left' width={1}>
          <Segment basic style={{height:"100%"}}><MenuTab /></Segment>
        </Grid.Column>

        
      <Grid.Column width={10} >
     
       <Segment basic style={{height:"100%"}}>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/add" element={<Add/>}/>
        </Routes>
        </Segment>
       
      </Grid.Column>
   
      <Grid.Column floated='right' width={1}></Grid.Column>
    </Grid.Row>
     
     <div style={{ position: "fixed",bottom: "0",width: "100%",height: "2em",
        boxShadow:"inset 0px 1px 0px 0px #54a3f7",
        background:"linear-gradient(to bottom, #007dc1 5%, #0061a7 100%)",
        backgroundColor:"#007dc1",
        borderRadius:"3px",
        border:"1px solid #124d77",
        display:"inline-block",
        color:"#ffffff",
        fontFamily:"Arial",
        fontSize:"14px",
        padding:"9px 23px",
        textDecoration:"none",
        textShadow:"0px 1px 0px #154682"
      }}>
     <div  style={{
           height: "1.8em",
           boxShadow:"inset 0px 1px 0px 0px #54a3f7",
           background:"linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%)",
           backgroundColor:"#2dabf9",
           borderRadius:"2px",
          
           display:"inline-block",
           color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"15px",
           padding:"9px 23px",
           textDecoration:"none",
           textShadow:"0px 1px 0px #263666",
            position:"fixed",
            right:"0",
            bottom:"0",
            paddingTop:"0.2em"
      }}>
        {dformat}
      </div>  

      <div  style={{
           height: "1.8em",
           boxShadow:"inset 0px 1px 0px 0px #a4e271",
           background:"-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #acf500), color-stop(1, #8fcc00))",
           background:"-moz-linear-gradient(top, #acf500 5%, #8fcc00 100%)",
           background:"-webkit-linear-gradient(top, #acf500 5%, #8fcc00 100%)",
           background:"-o-linear-gradient(top, #acf500 5%, #8fcc00 100%)",
           background:"-ms-linear-gradient(top, #acf500 5%, #8fcc00 100%)",
           background:"linear-gradient(to bottom, #acf500 5%, #8fcc00 100%)",
           backgroundColor:"#acf500",
           borderRadius:"2px",
          border:"1px solid #74b807",
           display:"inline-block",
           color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"15px",
           padding:"9px 23px",
           textDecoration:"none",
           textShadow:"0px 1px 0px #263666",
            position:"fixed",
            left:"0",
            bottom:"0",
            paddingTop:"0.2em"
      }}>
        Olivier Lemire
      </div>  
     </div>
     </BrowserRouter>
     </Grid>
   
    </div>
  
    
  );
}

export default App;
