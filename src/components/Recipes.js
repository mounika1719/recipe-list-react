import React,{ useState} from 'react'
import RecipesData from './RecipesData'
const Recipes = ({e})=>{
    const[show,setShow] = useState(false)
    const{label,image,url,ingredients} = e.recipe;
    return(
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' rel='noopener
            noreferrer'>live video</a>
            <button onClick={()=>setShow(!show)}>Ingredients</button>
            {show &&<RecipesData ingredients={ingredients} />}
        </div>
    )
}
export default Recipes
