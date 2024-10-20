let foodCounter = parseInt(localStorage.getItem('foodCounter')) || 10;
let opacityValue = 0.2; // Starting opacity
let score = 0;
document.getElementById('foodCounter').innerText = foodCounter;

function increaseOpacity() {
    const img = document.getElementById('task');

    if (opacityValue < 1) {
        opacityValue += 0.1 // Increase opacity by 0.1 on each click
        img.style.opacity = opacityValue.toFixed(1); // Set new opacity
        if (opacityValue > 0.9){
            foodCounter += 1;
            localStorage.setItem('foodCounter', foodCounter);
            document.getElementById('foodCounter').innerText = foodCounter;
            opacityValue = 0.2;
            img.style.opacity = opacityValue.toFixed(1);
        }
    }
};

// Function to set random heights for the fishes
function randomizeTop(fish) {
    const viewportHeight = window.innerHeight;
    const randomTop = Math.floor(Math.random() * (viewportHeight - 50)) + "px";
    fish.style.top = randomTop;
}

// Function to setup animation listeners
function setupAnimationListeners(containerId) {
    const container = document.getElementById(containerId);
    const fishes = container.querySelectorAll(".fish");

    fishes.forEach(fish => {
        randomizeTop(fish);
        fish.addEventListener('animationiteration', () => randomizeTop(fish));
    });
}

// Function to check collision with fish elements
function checkCollision(food) {
    const fishes = document.querySelectorAll('.fish');
    const foodRect = food.getBoundingClientRect();

    fishes.forEach(fish => {
        const fishRect = fish.getBoundingClientRect();
        if (
            foodRect.left < fishRect.right &&
            foodRect.right > fishRect.left &&
            foodRect.top < fishRect.bottom &&
            foodRect.bottom > fishRect.top
        ) {
            // Make both fish and food item disappear
            document.getElementById('bubblesound').play();
            food.classList.add('disappear');
            increaseOpacity();

            // Show the bubble at the fish's position
            const bubble = document.getElementById('bubble');
            bubble.style.left = (fishRect.left + fishRect.width / 2 - bubble.offsetWidth / 2) + 'px';
            bubble.style.top = (fishRect.top - bubble.offsetHeight) + 'px';
            bubble.classList.remove('disappear');

            // Hide the bubble after the animation is over
            setTimeout(() => {
                bubble.classList.add('disappear');
            }, 2000);
        }
    });
}
// Dragging logic for the food item
function makefood(food) {
    let isDragging = false;
    food.addEventListener('mousedown', function(e) {
        isDragging = true;
        document.body.style.cursor = 'grabbing';

        const moveItem = (event) => {
            if (isDragging) {
                food.style.left = (event.clientX - food.offsetWidth / 2) + 'px';
                food.style.top = (event.clientY - food.offsetHeight / 2) + 'px';
                checkCollision(food);
            }
        };

        document.addEventListener('mousemove', moveItem);

        document.addEventListener('mouseup', function() {
            isDragging = false;
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', moveItem);
        });
    });
}

// Function to spawn a food item on button click
function spawnfood() {
    if (foodCounter > 0) {
        const food = document.createElement('div');
        food.classList.add('foot');
        document.body.appendChild(food);

        // Make the new item food
        makefood(food);
        foodCounter--;

        // Update local storage
        localStorage.setItem('foodCounter', foodCounter);
        
        // Update the food counter display
        document.getElementById('foodCounter').innerText = foodCounter;
    } else {
        alert('Not Enough Food');
    }
}
// Function to spawn trash when clicked (instant spawn)
const maxTrash = 10; // Set the maximum number of trash items allowed on screen
let currentTrashCount = 0; // Counter for the number of trash elements currently on screen

// Function to spawn trash when clicked (instant spawn)
function spawnTrashOnClick() {
    if (currentTrashCount >= maxTrash) return; // Stop spawning if maxTrash is reached
    const numtrash = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
    const trash = document.createElement('div');
    trash.classList.add('trash'); // Add the common 'trash' class

    // Randomize which trash image to use
    switch (numtrash) {
        case 1:
            trash.style.backgroundImage = "url('trash1.png')";
            break;
        case 2:
            trash.style.backgroundImage = "url('trash2.png')";
            break;
        case 3:
            trash.style.backgroundImage = "url('trash3.png')";
            break;
        case 4:
            trash.style.backgroundImage = "url('trash4.png')";
            break;
    }
    document.body.appendChild(trash);
    currentTrashCount++; // Increment trash count

    // Set random positions for the trash
    trash.style.left = Math.floor(Math.random() * (window.innerWidth - 50)) + 'px';
    trash.style.top = Math.floor(Math.random() * (window.innerHeight + 30)) + 'px';

    // Make trash disappear on click and immediately spawn a new one
    trash.addEventListener('click', () => {
        trash.remove(); // Remove the trash element from the DOM
        currentTrashCount--; // Decrement trash count when removed
        spawnTrashOnClick(); // Spawn new trash when clicked
        increaseOpacity();
    });
}

function spawnTrashOnInterval() {
    if (currentTrashCount >= maxTrash) return; // Stop spawning if maxTrash is reached
    const numtrash = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
    const trash = document.createElement('div');
    trash.classList.add('trash'); // Add the common 'trash' class

    // Randomize which trash image to use
    switch (numtrash) {
        case 1:
            trash.style.backgroundImage = "url('trash1.png')";
            break;
        case 2:
            trash.style.backgroundImage = "url('trash2.png')";
            break;
        case 3:
            trash.style.backgroundImage = "url('trash3.png')";
            break;
        case 4:
            trash.style.backgroundImage = "url('trash4.png')";
            break;
    }
    document.body.appendChild(trash);
    currentTrashCount++; // Increment trash count

    // Set random positions for the trash
    trash.style.left = Math.floor(Math.random() * (window.innerWidth - 50)) + 'px';
    trash.style.top = Math.floor(Math.random() * (window.innerHeight + 30)) + 'px';

    // Make trash disappear on click and remove from the count
    trash.addEventListener('click', () => {
        trash.remove(); // Remove the trash element from the DOM
        currentTrashCount--; // Decrement trash 
        increaseOpacity();
    });
}

document.getElementById('hintButton').addEventListener('click', function() {
    const hintBox = document.getElementById('hintBox');
    hintBox.style.display = hintBox.style.display === 'none' ? 'block' : 'none';
    });

function openSetting(){
    const settingPanel = document.getElementById('settingpanel');
    const overlay = document.getElementById('overlay');
    const bg = document.getElementById('bg-img');

    if (settingPanel.style.display === 'none' || settingPanel.style.display === '') {
        settingPanel.style.display = 'block';
    } else {
        settingPanel.style.display = 'none';
    }
};

function saveSettings() {
    const trashEnabled = document.getElementById('trashToggle').checked;
    const fishAmount = document.getElementById('fishAmount').value;

    localStorage.setItem('fishAmount', fishAmount);
    localStorage.setItem('trashEnabled', trashEnabled);

    updateFishAmount(fishAmount);
    alert('Settings saved!');
    updateFishAmount(fishAmount);

    if (trashEnabled) {
        startTrashSpawning();
    } else {
        stopTrashSpawning();
    }
}

function loadSettings() {
    const fishAmount = localStorage.getItem('fishAmount') || 8;
    const trashEnabled = localStorage.getItem('trashEnabled') === 'true';

    document.getElementById('fishAmount').value = fishAmount;
    document.getElementById('trashToggle').checked = trashEnabled;

    updateFishAmount(fishAmount);

    if (trashEnabled) {
        startTrashSpawning();
    } else {
        stopTrashSpawning();
    }
}
function updateFishAmount(amount) {
    const container1 = document.getElementById("container1");
    const container2 = document.getElementById("container2");

    // Clear existing fish
    container1.innerHTML = '';
    container2.innerHTML = '';

    // Create new fish based on the specified amount
    for (let i = 1; i <= amount; i+=2) {
        const fish = document.createElement('img');
        fish.src = 'fish' + i + '.png';
        fish.id = 'fish' + i;
        fish.classList.add('fish');
        container1.appendChild(fish);


        const reversedFish = document.createElement('img');
        reversedFish.src = 'reversedfish' + i + '.png';
        reversedFish.id = 'reversedfish' + i;
        reversedFish.className = 'fish';
        container2.appendChild(reversedFish);

    }
    setupAnimationListeners("container1");
    setupAnimationListeners("container2");
}


function startTrashSpawning() {
    // Start the trash spawning interval
    trashInterval = setInterval(spawnTrashOnInterval, 3000);
}

function stopTrashSpawning() {
    // Stop the trash spawning interval
    clearInterval(trashInterval);
}

// Initialize a variable to hold the trash spawning interval
let trashInterval;
window.onload = function() {
        setupAnimationListeners("container1");
        setupAnimationListeners("container2");
        document.getElementById("foodCounter").innerText = foodCounter;
        spawnTrashOnClick();
        img.style.opacity = opacityValue.toFixed(1);
        loadSettings();
};