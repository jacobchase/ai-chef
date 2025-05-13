import React from "react"
import ClaudeRecipe from "./clauderecipe"
import Ingredients from "./ingredients"
import {getRecipeFromMistral } from "../ai"

export default function body(){
    const [ingredients, setIngredients ] = React.useState([]) 
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView()
        }
    }, [recipe])
    
    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    async function toggleShown(){
       const recipeMarkdown = await getRecipeFromMistral(ingredients)
       setRecipe(recipeMarkdown)
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
        {recipe && <ClaudeRecipe recipe={recipe} ref={recipeSection}/>
        }

        </main>
    )
}