document.addEventListener('DOMContentLoaded',() => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);
})

// console.log('contentloaded');
const handleNewItemFormSubmit = function(event){
  event.preventDefault();


}
