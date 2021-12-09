import React from "react";
import "./Input.css"
// import { Input, Space } from 'antd';

export default class Input extends React.Component{
    state = {
        inputValue: '',
    };

    handleChange = (evt) => {
        const queryValue = evt.target.value;
        this.setState({ inputValue: queryValue });
        this.props.onSearchChange(queryValue)
    }

    render(){
        return(
            <div>
                <div className='input-wrapper'>
                    <input
                        onChange={this.handleChange}
                        value={this.state.inputValue}
                        className='search-input' type='text' placeholder='Find pokemon'></input>
                    <button type='button' className='search-button'>Search</button>
                </div>
            </div>
        );
    }
}