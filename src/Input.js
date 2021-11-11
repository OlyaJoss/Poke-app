import React from "react";
import "./Input.css"
// import { Input, Space } from 'antd';



// const { Search } = Input;
// const onSearch = value => console.log(value);
export default () => {
    return (
        <div>
            <div className='input-wrapper'>
                <input className='search-input' type='text' placeholder='Find pokemon'></input>
                <button type='button' className='search-button'>Search</button>
            </div>
        </div>
        // <Space direction="vertical">
        // <Search
        //       placeholder="Find pokemon"
        //       allowClear
        //       enterButton="Search"
        //       size="large"
        //       color="#E5E5E5"
        //       onSearch={onSearch}
        //       style={{ backgroundColor: 'background: '}}
        //     />
        // </Space>
    );
}