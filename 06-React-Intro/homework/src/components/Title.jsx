import React from "react";
import Style from './Title.module.css';

const Title = (props) => <span className={Style.button}>
    {props.value}
    </span>;

export default Title;