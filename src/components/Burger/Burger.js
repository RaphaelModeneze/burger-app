import React from 'react';
import classes from './Burger.css';
import BurguerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurguerIngredient key={igKey + i} type={igKey}></BurguerIngredient>;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (tranformedIngredients.length === 0)
        tranformedIngredients = <p>Please start adding ingredients!</p>

    return (
        <div className={classes.Burger}>
            <BurguerIngredient type="bread-top"></BurguerIngredient>
            {tranformedIngredients}
            <BurguerIngredient type="bread-bottom"></BurguerIngredient>
        </div>
    );
}

export default burger;