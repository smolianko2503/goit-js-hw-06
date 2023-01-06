const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient =>
{
  const item = document.createElement('li');
  item.classList = 'item';
  item.textContent = ingredient;
  return item
});

list.append(...ingredientsList);
console.log(list)
