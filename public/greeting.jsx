/*export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];*/

import { useState } from "react"

  export function getdata(){
    const[name,setName] = useState('')
    return(
      <>
      <form >
        <input type="text" value={name} onChange={changename}/>
        <button >send</button>
      </form>
      
      
      </>
    )
  }

  function changename(e){
       setName(e=>e.target.value)
  }
