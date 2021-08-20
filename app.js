// Checklist-1
function changeTitleColor(productTitle) {
    const titleID = document.getElementById(productTitle);
    titleID.style.color = 'teal';
}
document.getElementById(changeTitleColor('shoes-title'));
document.getElementById(changeTitleColor('backpack-title'));

// Checklist-2
const customBack = document.getElementsByClassName('custom-back');
for (const background of customBack) {
    background.style.backgroundColor = 'rgba(255, 222, 236, 0.37)';
    background.style.border = 'none';
}

// Checklist-3
document.getElementById('add-list-btn').addEventListener('click', function () {
    const listInputFiled = document.getElementById('list-item-filed');
    const listContainer = document.getElementById('list-container');
    const newElement = document.createElement('li');
    newElement.innerText = listInputFiled.value;
    listContainer.appendChild(newElement);
    listInputFiled.value = '';
});

// Checklist-4
function increaseDecrease(isIncrease) {
    const inputFiled = document.getElementById('count-number');

    if (isIncrease) {
        const newValue = parseInt(inputFiled.value) + 1;
        inputFiled.value = newValue;
    }
    else {
        const newValue = parseInt(inputFiled.value) - 1;
        inputFiled.value = newValue;
    }

}
document.getElementById('btn-plus').addEventListener('click', function () {
    increaseDecrease(true);
});

document.getElementById('btn-minus').addEventListener('click', function () {
    increaseDecrease(false);
});

// Checklist 6,7

// Checklist-5
const plusButton = document.getElementById('challange-btn-plus');
const minusButton = document.getElementById('challange-btn-minus');
const inputFieldID = document.getElementById('challange-count-number');

plusButton.addEventListener('click', function () {
    const inputFiledValue = parseInt(inputFieldID.value);
    if (inputFiledValue < 5) {
        newInputValue = inputFiledValue + 1;
        inputFieldID.value = newInputValue;

        if (inputFiledValue == 4) {
            plusButton.setAttribute('disabled', true);
        }

        else if (inputFiledValue != 4) {
            plusButton.removeAttribute('disabled')
        }
    }
});

minusButton.addEventListener('click', function () {
    const inputFiledValue = parseInt(inputFieldID.value);
    if (inputFiledValue > 0) {
        newInputValue = inputFiledValue - 1;
        inputFieldID.value = newInputValue;
    }

    if (inputFiledValue == 1) {
        minusButton.setAttribute('disabled', true);
    }
});


