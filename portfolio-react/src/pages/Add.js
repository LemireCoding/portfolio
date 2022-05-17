import React, { Component } from 'react'
import { Transition,Grid,Icon,Image,Header,Divider, Popup, Input, Form, Button,Dropdown} from 'semantic-ui-react'
import {
  
  Link,

} from "react-router-dom";

import Axios from 'axios';
export default class Add extends Component {
    state = { projectname: "",githuburl:"",projecturl:"",technology:"" };
render(){
    const handleOnChange = (e, data) => {
        console.log(data.value);
        this.setState({technology: data.value})
     }
  
    const insertProjects = () => {
       
        Axios.post('http://localhost:3001/api/addproject',{
            projectName : this.state.projectname,
            githubUrl: this.state.githuburl,
            projectUrl : this.state.projecturl,
            mainTechnology : this.state.technology
        }).then((response)=>{
          
        });};
    const options = [
        {
          key: 'PHP',
          text: 'PHP',
          value: 'PHP',
        
        },
        {
            key: 'Javascript',
            text: 'Javascript',
            value: 'Javascript',
          
          },
          {
            key: 'C#',
            text: 'C#',
            value: 'C#',
          
          },
          {
            key: 'React',
            text: 'React',
            value: 'React',
          
          },
          {
            key: 'Java',
            text: 'Java',
            value: 'Java',
          
          },
          {
            key: 'Python',
            text: 'Python',
            value: 'Python',
          },
        
      ]
      
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
            C:/Desktop/Admin/Add
           </div></Grid.Column>
           <Grid.Column floated="right" style={{textAlign:"right"}} width={5}> <Link to="/"><Icon color='grey' style={{opacity:"70%"}} name='close' /></Link></Grid.Column>
        </Grid.Row>
  
        <Grid.Row style={{marginTop:"10%"}}>
             <Grid.Column>
             <div style={{maxWidth:"60%",marginRight:"auto",marginLeft:"auto"}}>
                <Header>Create New Project Entries</Header>
                <Form>
                    <Input type='text' placeholder="Project Name"  onChange={(e)=>{
                        this.setState({projectname: e.target.value})
                    }}></Input>
                    <br></br>
                    <br></br>
                    <Input type='text' placeholder="Github Url" onChange={(e)=>{
                        this.setState({githuburl: e.target.value})
                    }}></Input>
                    <br></br>
                    <br></br>
                    <Input type='text' placeholder="Project Url" onChange={(e)=>{
                        this.setState({projecturl: e.target.value})
                    }}></Input>
                    <br></br>
                    <br></br>
                    <Dropdown
                        placeholder='Select Main Technology'
                        selection
                        options={options}
                        onChange={handleOnChange}
                    />
                    <br></br>
                    <br></br>
                    <Button onClick={insertProjects}>Create</Button>
                </Form>
             </div>
             </Grid.Column>
           </Grid.Row>
       </Grid>
    
  
    </Transition>
    
  );
}
}
