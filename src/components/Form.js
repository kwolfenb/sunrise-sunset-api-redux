import React from 'react';
import {submit} from './../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchInfo} from './../actions';


const mapStateToProps = (state) => {
    return { 
        props: state
    }
}



function Form ({props}){
    console.log(props)
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
            <h2>Coordinates: {props.lat}, {props.long} </h2>
        </div>
    )
}

Form.propTypes = {
    dispatch: PropTypes.func
}


export default connect(mapStateToProps)(Form);