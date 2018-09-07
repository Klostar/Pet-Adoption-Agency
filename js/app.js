document.addEventListener('DOMContentLoaded',() => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);
})

// console.log('contentloaded');
const handleNewItemFormSubmit = function(event){
  event.preventDefault();

const animalListItem = createAnimalListItem(event.target)
const animalList = document.querySelector('#animal-list');
animalList.appendChild(animalListItem);


event.target.reset();

}

const createAnimalListItem = function(form){
  const animalListItem = document.createElement('li');
  animalListItem.classList.add('animal-list-item');

  const name = document.createElement('h3');
  name.textContent = `Name: ${form.name.value}` ;
  animalListItem.appendChild(name)

  const age = document.createElement('h3');
  age.textContent = `Age: ${form.age.value}`;
  animalListItem.appendChild(age)

  const breed = document.createElement('h3');
  breed.textContent = `Breed: ${form.breed.value}`;
  animalListItem.appendChild(breed);

  const sex = document.createElement('h3');
  sex.textContent = form.sex.value;
  animalListItem.appendChild(sex);

  return animalListItem;


}
