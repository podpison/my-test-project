let buttonAdd = document.querySelector('.circle');
buttonAdd.addEventListener('click', () => {modal1.style.display = 'block'});
let modal1 = document.querySelector('.firstModal');
let modal2 = document.querySelector('.secondModal');
let close1 = document.querySelector('.close');
let close2 = document.querySelector('.close'); //Не работает по магическим причинам
let sumbit = document.querySelector('.sumbit');
let containerForPersonItem = document.querySelector('.containerForPersonItem');
let chosenCost = document.querySelector('.chosenCost');
let chosenDescription = document.querySelector('.chosenDescription');
let chosenMiniDescription = document.querySelector('.miniDescription');
sumbit.addEventListener('click', createNewItem);
function createNewItem(img, miniDescription, goToModalWithMoreDescription) {
    img = document.createElement('img');
    img.src = 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
    img.className = 'img';
    img.style.width = '200px';
    img.style.height = '150px';

    miniDescription = chosenMiniDescription.value;
    miniDescriptionContainer = document.createElement('div');
    miniDescriptionContainer.className = 'miniDescription';

    goToModalWithMoreDescription = document.createElement('button');
    goToModalWithMoreDescription.innerHTML = 'О товаре'

    let addedItem = document.createElement('div');
    addedItem.className = 'addedItem';
    containerForPersonItem.insertAdjacentElement('beforeend', addedItem);
    
    addedItem.insertAdjacentElement('beforeend', img);

    addedItem.insertAdjacentElement('beforeend', miniDescriptionContainer);
    miniDescriptionContainer.insertAdjacentText('beforeend', miniDescription);

    addedItem.insertAdjacentElement('beforeend', goToModalWithMoreDescription);
    
    sessionStorage.setItem('key', chosenDescription.value);

    modal1.style.display = 'none';
    chosenDescription.value = '';
    chosenMiniDescription.value = '';
    chosenCost.value = '';

    goToModalWithMoreDescription.onclick = (productDescription) => {
        let secondModal = document.querySelector('.secondModal');
        productDescription = document.querySelector('.productDescription');
        productDescription.className = 'productDescription'
        secondModal.style.display = 'block';

        productDescription.insertAdjacentText('beforeend', sessionStorage.getItem('key'));
    }
}

window.onclick = (event) => {
    if (event.target == modal1 || event.target == buttonAdd || event.target == close1) {
        modal1.style.display = 'none'
    }
    if (event.target == modal2 || event.target == close2) {
        modal2.style.display = 'none'
    }
}


// cost = chosenCost.value;
// costContainer = document.createElement('div');
// costContainer.className = 'cost';
// costContainer.insertAdjacentText('beforeend', 'Продукт стоит: ' + cost);
// addedItem.insertAdjacentElement('beforeend', costContainer);