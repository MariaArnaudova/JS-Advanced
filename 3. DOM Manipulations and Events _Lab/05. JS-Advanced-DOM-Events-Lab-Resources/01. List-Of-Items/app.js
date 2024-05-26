function addItem() {
    let inputElement = document.getElementById('newItemText').value;

    let listElements = document.getElementById('items');

    let newElement = document.createElement('li');
    newElement.textContent = inputElement;

    listElements.appendChild(newElement);

}