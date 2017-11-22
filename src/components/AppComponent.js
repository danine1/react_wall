import React from 'react';
import ReactDOM from 'react-dom';

import Header from './HeaderComponent.js';
import Contacts from './ContactsComponent.js';
import Feed from './FeedComponent.js';
import LeftMenu from './LeftMenuComponent.js';

export default class App extends React.Component
{

    postWasAdded() {
        this.header.raiseNrOfPosts();   
    }

    render() {
        return(
            <div id="page">
            
                    <Header ref={ (el) => { this.header = el; } }/>
            
                    <div>
            
                    <LeftMenu />
            
                    <Feed postWasAdded={ this.postWasAdded.bind(this) }/>
            
                    <Contacts />
            
                    </div>
            
                </div>
        );
    }
}