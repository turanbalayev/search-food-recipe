import React from 'react';

const Recipe = (props) => {
    return (
        <div className="single-recipe">
            <h1 style={{ marginBottom: "10px" }}>{props.title}</h1>

            <img src={props.image} alt={props.title} style={{ width: "100%", height: "auto" }} />
            <ul style={{ listStyle: "none" }}>{props.ingredients.map(ing => {
                return (<li>{ing.text}</li>)
            })}</ul>

            <p>{parseInt(props.calories)}</p>
        </div>
    )
}

export default Recipe;