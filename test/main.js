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

class Creator {
    constructor(options) {  
        this.img = document.createElement('img');
        this.img.src = options.src;
        this.img.className = 'img';
        this.img.style.width = '200px';
        this.img.style.height = '150px';

        this.miniDescription = options.miniDescription;
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
            descripiton: chosenDescription.value,
            cost: chosenCost.value,
        }

        this.openModalWithMoreDescription.onclick = () => {
            modal2.style.display = 'block';
            let productDescription = document.querySelector('.productDescription');
            let productCost = document.querySelector('.productCost');

            productCost.textContent = informationObj.cost;
            productDescription.textContent = informationObj.descripiton;

            buttonAdd.style.display = 'none';
        }

        modal1.style.display = 'none';
        chosenDescription.value = '';
        chosenMiniDescription.value = '';
        chosenCost.value = '';
    }
    
}

function CreateNewItem(user) {
    new Creator({
        src: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    })
}

sumbit.addEventListener('click', CreateNewItem);

window.onclick = (event) => {
    if (event.target == modal1 || event.target == buttonAdd || event.target == close1) {
        modal1.style.display = 'none';
    }
    if (event.target == modal2 || event.target == close2) {
        modal2.style.display = 'none';
        buttonAdd.style.display = 'block';
    }
}
