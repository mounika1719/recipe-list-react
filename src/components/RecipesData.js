import React from 'react';
import {v4 as uuidv4} from 'uuid'
const RecipesData=({ingredients})=>{
    return ingredients.map(e=>{
        return(
            <ul className='ing-list' key={uuidv4()}>
            <li className='ing-text'>{e.text}</li>
            <li className='ing-weight'>{e.weight}</li>
            </ul>
        )
    })
}
export default RecipesData;
