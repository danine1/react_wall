import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

export default class NewPostForm extends React.Component
{
    constructor(props){
        super(props);

        //set initial state of this component
        this.state = {
            new_post_text: '' //default value - empty string
        }
    }

    formSubmitted(event) {
        event.preventDefault();//stop the form from actually being submitted
        // console.log('Form is being submitted');

        $.ajax({
            method: 'post',
            url: 'api/create-post.php',
            data: {
                text: this.state.new_post_text
            },
            success: (data) => {

                //call the newPostWasAdded function of FeedComponent
                //which was given to this component as this.props.functionToRun
                this.props.functionToRun();

                //change the text back to an empty string
                this.setState({
                    new_post_text: ''
                });
            }
        })
    }

    textChanged(event) {
        this.setState({
            new_post_text: event.target.value
        })
    }

    render() {

        return (
            <div className="new_post">
            
                <form action="" onSubmit={ (event) => this.formSubmitted(event) }>

                    <textarea name="text" id="" cols="30" rows="10" placeholder="What are you thinking about?" 
                        value={ this.state.new_post_text }
                        onChange={ (event) => this.textChanged(event) }
                    ></textarea>

                    <input type="submit" value="add" />

                </form>
            
            </div>
        );
     


    }


}