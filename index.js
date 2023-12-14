/**
 * Task:
 * - Write the code to help a user choose the perfect Christmas dinner idea
 *   based on the number of people attending.
 * - Include a checkbox for the user to specify the meal
 *   should be vegetarian-friendly.
 *
 * Dinner suggestions (or choose your own!):
 * Vegetarian: Winter Squash Risotto
 * 4 people or less: Ham
 * 5+ people: Turkey
 *
 * Stretch goals:
 * - Add more dietary options.
 * - Show recipes when the meal has been selected.
 *
 * 
 */


const btn = document.getElementById('btn')
const numInput = document.getElementById('num-input')
const vegetarianInput = document.getElementById('vegetarian-input')
const foodDisplay = document.getElementById('food')

btn.addEventListener('click', () => {
    const numGuests = +numInput.value
    const isVegetarian = vegetarianInput.checked

    if (isNaN(numGuests) || numGuests <= 0) {
        alert('Please enter a valid number of guests.')
        return
    }

    const dinnerSuggestion = isVegetarian
        ? 'Winter Squash Risotto'
        : numGuests <= 4
        ? 'Ham'
        : 'Turkey'

    foodDisplay.textContent = dinnerSuggestion
})
