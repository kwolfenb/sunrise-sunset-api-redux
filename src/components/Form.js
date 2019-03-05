import React from 'react';
import {submit} from './../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchInfo} from './../actions';



function Form (){
let lat;
let long;

 function submitButton(e){

        e.preventDefault();
        fetchInfo(lat.value, long.value);
        lat.value = '';
        long.value = '';
    }

return (
    <div>
            <form onSubmit={submitButton}>
                <h1>test</h1>
                <input
                    ref={input => {lat = input}} 
                    type = 'number' placeholder='lat' 
                />
                <input type ='number' placeholder='long' ref={input => {long = input}}/>
                <button type='submit'>Submit</button>
            </form>
            <hr/>
            <h2>{}</h2>
        </div>
    )
}

Form.propTypes = {
    dispatch: PropTypes.func
}

const mapStateToProps = (state) => {
    return { 
        props: state
    }
}

export default connect(mapStateToProps)(Form);