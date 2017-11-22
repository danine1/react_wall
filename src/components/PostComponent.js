import React from 'react';
import ReactDOM from 'react-dom';


export default class Post extends React.Component{


    constructor(props) {
        super(props); //call the constructor of React.Component

    }

    render() {

        return (

            <li className="post">

                <div className="user">You</div>

                <div className="time">{ this.props.published_at }</div>

                <h3> { this.props.title }</h3>

                <p>{ this.props.text }</p>

            </li>

        );
     


    }


}