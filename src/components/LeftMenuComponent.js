import React from 'react';
import ReactDOM from 'react-dom';


export default class LeftMenu extends React.Component{


    constructor(props) {
        super(props); //call the constructor of React.Component

    }

    render() {

        return (
            <nav className="leftmenu">
            
                <h2>You</h2>

                <a href="#">Selected posts</a>
                <a href="#">Messenger</a>
                <a href="#">Marketplace</a>
            
            </nav>
        );
     


    }


}