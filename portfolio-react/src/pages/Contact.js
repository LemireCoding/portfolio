import React, { Component } from 'react'
import { Transition,Grid,Icon,Image,Header,Divider, Popup} from 'semantic-ui-react'
import {
  
  Link,

} from "react-router-dom";
export default class Contact extends Component {

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
            C:/Desktop/Contact
           </div></Grid.Column> 
           <Grid.Column floated="right" style={{textAlign:"right"}} width={5}> <Link to="/"><Icon color='grey' style={{opacity:"70%"}} name='close' /></Link></Grid.Column>
        </Grid.Row>
  
           <Grid.Row >
             <Grid.Column>
             <div style={{maxWidth:"60%",marginRight:"auto",marginLeft:"auto"}}>
             <Image centered src='olivier.jfif' size='tiny' bordered circular />
               <Header  as='h2'>
                Olivier Lemire
             </Header>
             <Header sub>SoftWare Developper</Header>
         
               </div>
             </Grid.Column>
           </Grid.Row>
           <Grid.Row>
             <Grid.Column>
               <div style={{maxWidth:"60%",marginRight:"auto",marginLeft:"auto"}}>
               <Divider />
               <Header sub  as='h3' floated='left'>
                Overview
             </Header>
             <br></br>
             <br></br>
             <div>When I got into the computer science program, 
               I had little to no knowledge related to the field.
                I quickly got addicted to the learning curve that the world of programming offers.
                What I love the most was working on algorithms and problem-solving cases,
                 therefore I found most of my fun in making feature logics
                  such as building an automated employee calendar and a custom text editor. If programming was a video game,
                   I would not even have completed 1% of it and I intend to continue my learnings, career or not.
                </div>
             <br></br>
             <br></br>
              <Grid centered>
                <Grid.Row>
                  <Grid.Column textAlign='center'  mobile={8} tablet={4} computer={4}>

                  <Popup
                   position='top center'
                  content='438-405-3112'
                  trigger={<a href='tel:+1-438-405-3112' style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="phone-call-icon.png" /></a>}/>
                  
                  </Grid.Column>
                  <Grid.Column textAlign='center' mobile={8} tablet={4} computer={4}>
                  <Popup
                   position='top center'
                  content='Olivierlemire2001@gmail.com'
                  trigger={<a href='mailto: olivierlemire2001@gmail.com' style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="email.png" /></a>}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
               </div>
            
             
             </Grid.Column>
           </Grid.Row>
           <Grid.Row>
             <Grid.Column>
             <div style={{maxWidth:"60%",marginRight:"auto",marginLeft:"auto"}}>
             <Divider />
               <Header sub as='h3' floated='left'>
                Socials
            
             </Header>
             <br></br>
             <br></br>
             <Grid centered>
                <Grid.Row>
                  <Grid.Column textAlign='center'  mobile={8} tablet={4} computer={4}>

                  <Popup
                   position='top center'
                  content='Facebook'
                  trigger={<a href='https://www.facebook.com/olivier.lemire.773' style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="facebook.png" /></a>}/>
                  
                  </Grid.Column>
                  <Grid.Column textAlign='center' mobile={8} tablet={4} computer={4}>
                  <Popup
                   position='top center'
                  content='LinkedIn'
                  trigger={<a href="https://www.linkedin.com/in/olivier-lemire-069544199/" style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="linkedin.png" /></a>}/>
                  </Grid.Column>
                  <Grid.Column textAlign='center' mobile={8} tablet={4} computer={4}>
                  <Popup
                   position='top center'
                  content='Instagram'
                  trigger={<a href="https://www.instagram.com/lemire_z/?hl=fr" style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="instagram.png" /></a>}/>
                  </Grid.Column>
                  <Grid.Column textAlign='center' mobile={8} tablet={4} computer={4}>
                  <Popup
                   position='top center'
                  content='Github'
                  trigger={<a href="https://github.com/LemireCoding" style={{height:"32px",width:"32px"}}><img width={32} height={32}  src="git.png" /></a>}/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
               </div>
             </Grid.Column>
           </Grid.Row>
       </Grid>
    
  
    </Transition>
    
  );
}
}

