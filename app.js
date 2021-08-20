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
    const listContainer = document.getElementById('list-container');
    const newElement = document.createElement('li');
    newElement.innerText = 'New Item Added';
    listContainer.appendChild(newElement);
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

// Cheklist-5
// Problem in Checklist-5

// Checklist 6,7


