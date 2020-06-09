import React from 'react';
import burgerLogo from '../../assets/Images/burgerLogo.png'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img scr={burgerLogo} alt="burger-app"></img>
    </div>
);

export default logo;