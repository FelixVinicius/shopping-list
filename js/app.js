const input = document.querySelector('#username');
input.addEventListener('keydom', function (e) {
  console.log('Key Down');
});

input.addEventListener('keyup', function (e) {
  console.log('Key up');
});

input.addEventListener('keypress', function (e) {
  console.log('Key press');
});

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) {
      return;
    }
    const newItemText = this.value;
    const newListItem = document.createElement('li');
    newListItem.innerText = newItemText;
    itemsUl.appendChild(newListItem);
    this.value = '';
  }
});
