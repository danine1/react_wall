import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import NewPostForm from './NewPostFormComponent.js';
import Post from './PostComponent.js';

export default class Feed extends React.Component{


    constructor(props) {
        super(props); //call the constructor of React.Component -- in PHP parent::construct($props)

        //set initial state
        this.state = {//the only time that we assign directly to the state
            posts: [],

            //illustrational data below
            orderBy: 'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null
        }

    }

    //componentDidMount is automatically called after component has been rendered
    componentDidMount() {

        this.refreshPosts();
       
    }

    refreshPosts() {

        $.ajax({
            method: 'get',
            url:'api/all-posts.php',
            dataType: 'json',
            success: (data) => {
                this.setState({
                    posts: data.posts
                });
            }
        })

    }

    newPostWasAdded() {
        this.refreshPosts();

        //tell parent
        this.props.postWasAdded();
    }

    render() {

        //prepare an array of <Post /> components
        let posts = [];//prepare an empty array
        for (let i in this.state.posts){//foreach of the data
            let post_data = this.state.posts[i];
            
            //add one <Post /> component to the array
            posts[i] = <Post 
                key={ post_data.id }
                title={ post_data.title }
                text={ post_data.text }
                published_at={ post_data.published_at }
                likes={ post_data.likes }
                />;
        }
        this.state
        return (
            <div className="feed">
          
                <NewPostForm functionToRun={ this.newPostWasAdded.bind(this) } />

                <button onClick={ () => this.refreshPosts() }>refresh</button>

                <ul>

                    { posts }

                </ul>

            </div>
        )
     

    }


}