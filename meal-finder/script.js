const selectors = {
    search: () => document.querySelector('#search'),
    submit: () => document.querySelector('#submit'),
    random: () => document.querySelector('#random'),
    mealsEl: () => document.querySelector('#meals'),
    result: () => document.querySelector('#result'),
    singleMeal: () => document.querySelector('#single-meal')
}

// Search meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // Clear single meal
    selectors.singleMeal().innerHTML = '';

    // Get search term
    const term = selectors.search().value;

    // Validate input
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(r => r.json())
            .then(data => {
                selectors.result().innerHTML = `<h2>Search results for '${term}':</h2>`;

                if (!data.meals) {
                    selectors.result().innerHTML = `<h2>There are no search results. Try again!</h2>`;
                } else {
                    selectors.mealsEl().innerHTML = data.meals.map(meal => `
                    <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealId="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                    </div>
                    </div>  
                    `).join('');
                }
            });

        // Clear search text

        selectors.search().value = '';
    } else {
        alert('Please, enter something.');
    }
}

// Fetch meal by ID
function getMealById(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];

            addMealToDOM(meal);
        })
}

// Fetch random meal
function randomMeal(e) {
    selectors.mealsEl().innerHTML = '';
    selectors.result().innerHTML = '';

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(r => r.json())
        .then(data => {
            const meal = data.meals[0];

            addMealToDOM(meal);
        })

}
// Add meal to DOM
function addMealToDOM(meal) {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        } else {
            break;
        }
    }

    selectors.singleMeal().innerHTML = `
    <div class="single-meal">
    <h1>${meal.strMeal}</h1>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
    <div class="single-meal-info">
    ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
    ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
    </div>
    <div class="main">
    <p>${meal.strInstructions}</p>
    <h2>Ingredients</h2>
    <ul>
    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
    </div>
    `
}

// Event listeners
selectors.submit().addEventListener('submit', searchMeal);
selectors.random().addEventListener('click', randomMeal);
selectors.mealsEl().addEventListener('click', e => {
    const mealInfo = e.path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    })

    if (mealInfo) {
        const mealId = mealInfo.getAttribute('data-mealId');
        getMealById(mealId);
    }
})