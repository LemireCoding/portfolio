import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Axios from 'axios';
import { Transition,Grid,Card,Image } from 'semantic-ui-react'
export default class CardsProject extends Component {
    constructor(props) {
        super(props);
      }

      state = {
        projects: []
      }

      componentDidMount() {

        const fetchProjects = async () => { 
            
            const res = await Axios.get('http://localhost:3001/api/projects');

            this.setState({projects: res.data})
        };
        fetchProjects();
        }


        
  render() {
   
    let projects = this.state.projects;
    
    return (
    
        <Card.Group centered >

            {
            projects.map(function(item, i){
               
                return (

                <Card key={i} style={{width:"150px",height:"300px"}}>
                    {(item.technology == "C#" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='c.png' wrapped ui={false} />) 
                        : null
                    )}
               {(item.technology == "PHP" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='php.png' wrapped ui={false} />) 
                        : null
                    )}
                     {(item.technology == "Javascript" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='Javascript.png' wrapped ui={false} />) 
                        : null
                    )}
                     {(item.technology == "React" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='react.png' wrapped ui={false} />) 
                        : null
                    )}
                     {(item.technology == "Java" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='Java.png' wrapped ui={false} />) 
                        : null
                    )}
                    {(item.technology == "Python" ? 
                        (<Image style={{maxHeight:"160px"}} as='a' href={item.projecturl} src='Python.png' wrapped ui={false} />) 
                        : null
                    )}
               <Card.Content>
               
                 <Card.Description>
                  {item.projectname}
                 </Card.Description>
                 </Card.Content>
                 <Card.Content extra>
                   <a href={item.githuburl}>
                   <Icon name='github' />
                   View GitHub
                 </a>
                 </Card.Content>
               </Card>
                )

            })

         }
             
           
        </Card.Group>
    )
  }
}