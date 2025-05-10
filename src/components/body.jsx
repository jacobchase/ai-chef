import React from "react"
import ClaudeRecipe from "./clauderecipe"
import Ingredients from "./ingredients"

export default function body(){
    const [ingredients, setIngredients ] = React.useState([]) 
    const [isShown, setIsShown] = React.useState(false)
    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    function toggleShown(){
        setIsShown(prev => !prev)
    }
    return(
        <main>
            <form action={handleSubmit} className="IngredientForm">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 &&
            <Ingredients ingredients ={ingredients} toggleShown={toggleShown}/>
}
        {isShown && <ClaudeRecipe/>
        }

        </main>
    )
}