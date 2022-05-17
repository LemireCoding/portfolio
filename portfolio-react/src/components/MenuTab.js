import React, { Component } from 'react';
import {

  Link

} from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react';

export default class MenuTab extends Component {
  state = { activeItem: 'projects' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
      <Menu icon='labeled' vertical style={{backgroundColor: "rgba(117, 190, 218, 0.0)", border:"none", boxShadow:"none"}}>
         <Link to="/projects">
         <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
          style={{margin:"1em",width:"4em", minWidth:"4em", padding:"0.2em"}}
        >
          <i className="icon">
            <img width={38} height={38} style={{marginLeft:"-0.15em"}} src="folder.png" />
          </i>
          <div style={{marginTop: "2em",color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"10px",
           textDecoration:"none",
           textShadow:"0px 1px 0px #263666",}}>Projects</div>
        </Menu.Item>
        </Link>
          
        <Link to="/contact">
         <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          style={{margin:"1em",width:"4em", minWidth:"4em", padding:"0.2em"}}
        >
          <i className="icon">
            <img width={38} height={38} style={{marginLeft:"-0.15em"}}  src="folder.png" />
          </i>
          <div style={{marginTop: "2em",color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"10px",
           textDecoration:"none",
           textShadow:"0px 1px 0px #263666",}}>Contact</div>
        </Menu.Item>
        </Link>

        <Link to="/admin">
         <Menu.Item
          name='admin'
          active={activeItem === 'admin'}
          onClick={this.handleItemClick}
          style={{margin:"1em",width:"4em", minWidth:"4em", padding:"0.2em"}}

        >
          <i className="icon">
            <img width={38} height={38} style={{marginLeft:"-0.15em"}}  src="powershell.png" />
          </i>
          <div style={{marginTop: "2em",color:"#ffffff",
           fontFamily:"Arial",
           fontSize:"10px",
           textDecoration:"none",
           textShadow:"0px 1px 0px #263666",}}>Admin</div>
        </Menu.Item>
        </Link>
      </Menu>
    )
  }
}