let buttonAdd = document.querySelector('.circle');
buttonAdd.addEventListener('click', () => {modal.style.display = 'block'});
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let sumbit = document.querySelector('.sumbit');
let containerForPersonItem = document.querySelector('.containerForPersonItem');
let chosenCost = document.querySelector('.chosenCost');
let chosenDescription = document.querySelector('.chosenDescription');
sumbit.onclick = (description, cost) => {
    description = chosenDescription.value;
    descriptionContainer = document.createElement('div');
    cost = chosenCost.value;
    costContainer = document.createElement('div');
    
    let addedItem = document.createElement('div');
    addedItem.className = 'addedItem';
    containerForPersonItem.insertAdjacentElement('beforeend', addedItem);

    addedItem.insertAdjacentElement('beforeend', descriptionContainer);
    descriptionContainer.insertAdjacentText('beforeend', description);
    addedItem.insertAdjacentElement('beforeend', costContainer);
    costContainer.insertAdjacentText('beforeend', 'Стоимость составляет:' + cost);
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modal || event.target == buttonAdd || event.target == close) {
        modal.style.display = 'none'
    }
}
