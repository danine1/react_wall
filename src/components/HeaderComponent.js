import React from 'react';
import ReactDOM from 'react-dom';


export default class Header extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            unread_posts: 0
        }
    }

    raiseNrOfPosts() {
        this.setState({
            unread_posts: this.state.unread_posts + 1
        });
    }
  

    render() {

        return (
            <header>
                Unread posts: <span className="unread">{ this.state.unread_posts }</span>
            </header>
        );
     


    }


}

