import React, { Component } from 'react';
import { isAbsolute } from 'path';

export class Themes extends Component {
    state = {
        currentTheme: "standard"
    }
    
    render() {
        return (
            <ul id="theme-list" style={themeContainer}>
               <li onClick={this.props.changeTheme}>standard</li>
               <li onClick={this.props.changeTheme}>minimal</li>
               <li onClick={this.props.changeTheme}>material</li>
               <li onClick={this.props.changeTheme}>casual</li>
               <li onClick={this.props.changeTheme}>light</li>
               <li onClick={this.props.changeTheme}>Invert</li>
            </ul>
        )
    }
}

const themeContainer = {
    position: "fixed",
    color: "white",
    top: "20px",
    cursor: "pointer"
}

export default Themes;
