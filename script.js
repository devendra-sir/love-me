// Get references to HTML elements
const image = document.getElementById('image');
const heading = document.getElementById('heading');
const btnYes = document.querySelector('.btn1');
const btnNo = document.querySelector('.btn2');
const container = document.getElementById('container');

// Event listener for 'Yes' button
btnYes.addEventListener('click', function() {
    image.src = "https://media.tenor.com/zkaB7Dlry8YAAAAi/hug.gif";
    heading.innerText = "I know you Love me ";
    removeDynamicButtons(); 
    removeStaticButtons(); 
});

// Event listener for 'No' button
btnNo.addEventListener('click', function() {
    image.src = "https://media1.tenor.com/m/34P2Bsd5q80AAAAC/sorr-cut.gif";
    heading.innerText = "Are you sure ones again i tall you ?";
    
    removeStaticButtons(); 
    addDynamicButtons();
});

// Function to add dynamic Yes/No buttons
function addDynamicButtons() {
    removeDynamicButtons(); 
    
    const dynamicContainer = document.createElement('div');
    dynamicContainer.classList.add('dynamic-buttons');
    dynamicContainer.id = 'dynamicButtons';

    const newYesButton = document.createElement('button');
    newYesButton.innerText = 'Yes';
    newYesButton.classList.add('btn1');
    
    const newNoButton = document.createElement('button');
    newNoButton.innerText = 'No';
    newNoButton.classList.add('btn2', 'movable');
    
    newYesButton.addEventListener('click', function() {
        image.src = "https://media1.tenor.com/m/rTC6NS79ZvUAAAAC/goma-peach.gif";
        heading.innerText = " i know you love me ";
        removeDynamicButtons();
    });

    newNoButton.addEventListener('click', function() {
        image.src = "https://media.tenor.com/Vl3b-OnjyQwAAAAi/cute-cats.gif";
        heading.innerText = "Are you sure this is my last time?";
        moveButtonRandomly(newNoButton); 
    });

    dynamicContainer.appendChild(newYesButton);
    dynamicContainer.appendChild(newNoButton);
    
    container.appendChild(dynamicContainer);
}

// Function to remove dynamic buttons if they exist
function removeDynamicButtons() {
    const existingButtons = document.getElementById('dynamicButtons');
    if (existingButtons) {
        existingButtons.remove();
    }
}

// Function to remove initial static buttons
function removeStaticButtons() {
    if (btnYes) btnYes.remove(); 
    if (btnNo) btnNo.remove();  
}

// Function to move the 'No' button randomly
function moveButtonRandomly(button) {
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.floor(Math.random() * (containerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - button.offsetHeight));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
