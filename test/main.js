let buttonAdd = document.querySelector('.circle');
buttonAdd.addEventListener('click', () => {modal1.style.display = 'block'});
let modal1 = document.querySelector('.firstModal');
let modal2 = document.querySelector('.secondModal');
let close1 = document.querySelector('.close');
let close2 = document.querySelector('.close'); // Не работает по магическим причинам
let sumbit = document.querySelector('.sumbit');
let containerForPersonItem = document.querySelector('.containerForPersonItem');
let chosenCost = document.querySelector('.chosenCost');
let chosenDescription = document.querySelector('.chosenDescription');
let chosenMiniDescription = document.querySelector('.miniDescription');
let item = 0;

function creator(img, miniDescription) {
    this.img = img;
    this.img = document.createElement('img');
    this.img.src = 'https://static9.depositphotos.com/1594308/1110/i/950/depositphotos_11107478-stock-photo-fantasy.jpg'
    this.img.className = 'img';
    this.img.style.width = '200px';
    this.img.style.height = '150px';

    this.miniDescription = miniDescription;
    this.miniDescription = chosenMiniDescription.value;
    this.miniDescriptionContainer = document.createElement('div');

    this.openModalWithMoreDescription = document.createElement('button');
    this.openModalWithMoreDescription.innerHTML = 'О товаре';
    this.openModalWithMoreDescription.className = 'openModalWithMoreDescription';

    this.addedItem = document.createElement('div');
    this.addedItem.className = 'addedItem';
    containerForPersonItem.insertAdjacentElement('beforeend', this.addedItem);

    this.addedItem.insertAdjacentElement('beforeend', this.img);
    this.addedItem.insertAdjacentElement('beforeend', this.miniDescriptionContainer);
    this.miniDescriptionContainer.insertAdjacentText('beforeend', this.miniDescription);

    this.addedItem.insertAdjacentElement('beforeend', this.openModalWithMoreDescription);

    let informationObj = {
        img: this.img.src,
        descripiton: chosenDescription.value,
        miniDescription: this.miniDescription,
        cost: chosenCost.value,
    }

    this.openModalWithMoreDescription.onclick = (productDescription, productCost) => {
        modal2.style.display = 'block';
        productDescription = document.querySelector('.productDescription');
        productCost = document.querySelector('.productCost');

        productCost.textContent = informationObj.cost;
        productDescription.textContent = informationObj.descripiton;

        buttonAdd.style.display = 'none';
    }

    localStorage.setItem('item', JSON.stringify(informationObj));

    modal1.style.display = 'none';
    chosenDescription.value = '';
    chosenMiniDescription.value = '';
    chosenCost.value = '';
}

sumbit.addEventListener('click', creator);

window.onclick = (event) => {
    if (event.target == modal1 || event.target == buttonAdd || event.target == close1) {
        modal1.style.display = 'none';
    }
    if (event.target == modal2 || event.target == close2) {
        modal2.style.display = 'none';
        buttonAdd.style.display = 'block';
    }
}
let savedItem = localStorage.getItem('item');
let getSavedItem = JSON.parse(savedItem);

document.onreadystatechange = function () {
    if (getSavedItem) {
        if (document.readyState == "interactive") {
            img = document.createElement('img');
            img.src = getSavedItem.img;
            img.className = 'img';
            img.style.width = '200px';
            img.style.height = '150px';
            
            miniDescription = getSavedItem.miniDescription;
            miniDescriptionContainer = document.createElement('div');
            
            openModalWithMoreDescription = document.createElement('button');
            openModalWithMoreDescription.innerHTML = 'О товаре';
            openModalWithMoreDescription.className = 'openModalWithMoreDescription';
            
            addedItem = document.createElement('div');
            addedItem.className = 'addedItem';
            containerForPersonItem.insertAdjacentElement('beforeend', addedItem);
            
            addedItem.insertAdjacentElement('beforeend', img);
            addedItem.insertAdjacentElement('beforeend', miniDescriptionContainer);
            miniDescriptionContainer.insertAdjacentText('beforeend', miniDescription);
            
            addedItem.insertAdjacentElement('beforeend', openModalWithMoreDescription);
        
            openModalWithMoreDescription.onclick = () => {
                 modal2.style.display = 'block';
                let productDescription = document.querySelector('.productDescription');
                let productCost = document.querySelector('.productCost');
            
                productCost.textContent = getSavedItem.cost;
                productDescription.textContent = getSavedItem.descripiton;
            
                buttonAdd.style.display = 'none';
            }
        }
    }
}
