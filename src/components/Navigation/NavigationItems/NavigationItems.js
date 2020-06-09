import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Bruger builder</NavigationItem>
        <NavigationItem link="/">checkout</NavigationItem>
    </ul>
);

export default navigationItems;