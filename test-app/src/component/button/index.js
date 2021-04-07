// this button component will pass 2 props: a buttonText and an emitEvent() function
// the emitEvent() function: when button is clicked, it will emit an event to parent component 
// then we capture this event in parent component and use that to dispatch() an action(that fetches API) to the reducers

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component {
    submitEvent(){
        if(this.props.emitEvent){//如果这个emitEvent存在就trigger it
            this.props.emitEvent();
        }
    }

    render(){
        const {buttonText} = this.props;
        return(
            <button data-test="buttonComponent" onClick={()=>{this.submitEvent()}}>
                {buttonText}
            </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};

export default SharedButton;