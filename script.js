// Sample recipe data (you can replace this with your own data)
const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g Pecorino Romano cheese", "50g Parmesan cheese", "2 cloves garlic", "Black pepper", "Salt"],
        instructions: "...",
        image: "spaghetti_carbonara.jpg"
    },
    {
        title: "Chicken Alfredo",
        ingredients: ["250g fettuccine pasta", "1 cup cooked chicken breast, diced", "2 cups heavy cream", "1 cup grated Parmesan cheese", "1/2 cup unsalted butter", "Salt and pepper to taste"],
        instructions: "...",
        image: "chicken_alfredo.jpg"
    },
    {
        title: "Vegetarian Stir-Fry",
        ingredients: ["1 cup broccoli florets", "1 cup sliced bell peppers", "1 cup sliced carrots", "1 cup snap peas", "2 cloves garlic, minced", "3 tbsp soy sauce", "2 tbsp sesame oil", "1 tbsp honey"],
        instructions: "...",
        image: "vegetarian_stir_fry.jpg"
    },
    {
        title: "Penne Pasta",
        ingredients: ["250g penne pasta", "1/2 cup tomato sauce", "1/4 cup grated Parmesan cheese", "1/4 cup fresh basil leaves", "2 cloves garlic, minced", "Salt and pepper to taste"],
        instructions: "...",
        image: "penne_pasta.jpg"
    },
    {
        title: "Garlic Pasta",
        ingredients: ["200g spaghetti", "3 cloves garlic, minced", "2 tbsp olive oil", "1/4 cup grated Parmesan cheese", "Chopped parsley for garnish", "Salt and pepper to taste"],
        instructions: "...",
        image: "garlic_pasta.jpg"
    },
    {
        title: "Biryani",
        ingredients: ["1 cup basmati rice", "500g chicken, cut into pieces", "1 large onion, thinly sliced", "1/4 cup plain yogurt", "2 tbsp biryani masala", "1/2 cup chopped mint leaves", "1/2 cup chopped coriander leaves", "Ghee for cooking"],
        instructions: "...",
        image: "biryani.jpg"
    },
    {
        title: "Chicken Karahi",
        ingredients: ["500g chicken, cut into pieces", "2 tomatoes, chopped", "1 onion, sliced", "2 green chilies, chopped", "1/2 cup yogurt", "1 tsp ginger-garlic paste", "1 tsp cumin powder", "1 tsp coriander powder", "Oil for cooking"],
        instructions: "...",
        image: "chicken_karahi.jpg"
    },
    // Add more recipes here
];

// Function to display a list of recipes
function displayRecipeList() {
    const recipeList = document.getElementById("recipe-list");

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement("a");
        recipeItem.classList.add("recipe-item");
        recipeItem.href = `recipe_${index}.html`; // Link to the dedicated recipe page
        recipeItem.innerHTML = `
            <h2>${recipe.title}</h2>
            <img class="recipe-image" src="images/${getSafeImageName(recipe.image)}" alt="${recipe.title}">
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Function to read the recipe index from the URL and display the corresponding recipe
function displayRecipeFromURL() {
    const params = new URLSearchParams(window.location.search);
    const recipeIndex = params.get('index');

    if (recipeIndex !== null && recipeIndex >= 0 && recipeIndex < recipes.length) {
        displayRecipeDetails(recipeIndex);
    }
}

// Function to display recipe details
function displayRecipeDetails(index) {
    const recipe = recipes[index];
    const recipeDetails = document.getElementById("recipe-details");
    recipeDetails.innerHTML = `
        <h2>${recipe.title}</h2>
        <h3>Ingredients:</h3>
        <p>${recipe.ingredients.join(", ")}</p>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
        <img class="recipe-image" src="images/${getSafeImageName(recipe.image)}" alt="${recipe.title}">
    `;
}

// Function to safely handle image file names
function getSafeImageName(imageName) {
    return imageName.replace(/\s/g, "_").toLowerCase(); // Replace spaces with underscores and convert to lowercase
}

// Function to navigate back to the recipe list
function goBackToRecipeList() {
    window.location.href = 'index.html';
}

// Function to print the recipe
function printRecipe() {
    window.print();
}

// Function to search for recipes using search bar
function searchRecipes() {
    const searchInput = document.getElementById("recipe-search");
    const searchTerm = searchInput.value.toLowerCase();

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
    );

    // Update the displayed recipe list with the filtered recipes
    displayFilteredRecipeList(filteredRecipes);
}

// Functon to display filtered recipes using search bar
function displayFilteredRecipeList(filteredRecipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ''; // Clear the existing list

    filteredRecipes.forEach((recipe, index) => {
        const recipeItem = document.createElement("a");
        recipeItem.classList.add("recipe-item");
        recipeItem.href = `recipe_${recipes.indexOf(recipe)}.html`; // Use the index of the original recipe array
        recipeItem.innerHTML = `
            <h2>${recipe.title}</h2>
            <img class="recipe-image" src="images/${getSafeImageName(recipe.image)}" alt="${recipe.title}">
        `;
        recipeList.appendChild(recipeItem);
    });
}

// Function to rate recipes
function rateRecipe(rating) {
    // Perform the necessary actions to store or display the rating
    alert(`You rated the recipe ${rating} stars!`);
}

// Initialize the recipe list
displayRecipeList();
// Display the recipe details if the index is present in the URL
displayRecipeFromURL();