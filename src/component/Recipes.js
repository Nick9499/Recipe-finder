import React from 'react';
import style from '../recipe.module.css';
export const Recipes = ({title, calorie, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1 > {title} </h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li> {ingredient.text} </li>
                ))}
            </ol>
            <p> {calorie} </p>
            <img className={style.img} src={image} alt="food"/>
        </div>
    )
}
