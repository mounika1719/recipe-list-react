import React,{useState} from 'react'
import './App.css';
import Axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import Recipes from './components/Recipes'
import Alert from './components/Alert'

const App=()=> {
  const[query,setQuery] = useState("");
  const[recipes,setRecipes]= useState([]);
const [alert,setAlert] = useState("");

  const APP_ID= "4e9f05eb"
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498"
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async ()=>{
    if(query!==""){
      const result = await Axios.get(url);
      if(!result.data.more){
        return setAlert("No food with such name")
      }
      setRecipes(result.data.hits) // to get access to recipes array
      console.log(result)
      setAlert("");
      setQuery("")
    }else{
      setAlert('Enter Your Recipe Name')
    }
  }
  const handleChange =(e)=>{
    setQuery(e.target.value)
  }
  const submitData = e =>{
    e.preventDefault();
    getData();
  }
  return (
    <div className="App">
      <h1 >Best Food Recipes</h1>
      <form className='search-form' onSubmit={submitData}>
        {alert!==""&&<Alert alert={alert} />}
        <input type='text'
         placeholder='Search food'
         autoComplete='off'
         value={query} 
         onChange={handleChange} />
        <input type='submit' value='search'/>
      </form>
      <div className='recipes'>
        {recipes!==[]&& recipes.map(e=>
        <Recipes key={uuidv4} e={e} />)
        }
      </div>
    </div>
  );
}
export default App;
