import React from 'react';
import Style from './error.module.css';

const Error = (props) => {
    return <span className={Style.error}>{props.value}</span>
};

export default Error;