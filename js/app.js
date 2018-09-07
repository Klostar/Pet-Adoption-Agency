  document.addEventListener('DOMContentLoaded',() => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
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
  animalListItem.id = form.name.value;
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

  const about = document.createElement('p');
  about.textContent = form.about.value;
  animalListItem.appendChild(about);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Adopt'
  deleteButton.value = form.name.value
  animalListItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', handleDelete);

  return animalListItem;



}

const handleDelete = function(event){
console.log(event.target.value);
document.getElementById(event.target.value).remove();
}

const handleDeleteAllClick = function (event) {
  const animalList = document.querySelector('#animal-list')
  animalList.innerHTML = '';

}
