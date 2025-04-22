export default function body(){
    var ingredients = ["Mayonnaise", "Lettuce"]
    function addIngredient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
    }
    const ingredientsList = ingredients.map((ingredient) => 
        <li>{ingredient}</li>
    )
    return(
        <main>
            <form onSubmit={addIngredient} className="IngredientForm">
                <input type="text" placeholder="e.g. oregano" aria-label="add-ingredient" name="Ingredient"/>
                <button>+ Add Ingredient</button>
            </form>
            <ul>
            {ingredientsList}
            </ul>
        </main>
    )
}