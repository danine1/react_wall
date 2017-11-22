import React from 'react';
import ReactDOM from 'react-dom';


export default class Contacts extends React.Component{


    constructor(props) {
        super(props); //call the constructor of React.Component

    }

    render() {

        return (
                <nav className="contacts">
    
                    <h2>Contacts</h2>
    
                    <a href="#">Mark Zuckerberg</a>
                    <a href="#">Jana Večerková</a>
                    <a href="#">Ada Lovelace</a>
                </nav>
          
        );
     


    }


}