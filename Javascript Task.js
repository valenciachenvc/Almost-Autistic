let opacityValue = 0.2; // Starting opacity value
let foodCounter = parseInt(localStorage.getItem('foodCounter'));
let score = 0;
document.getElementById('foodCounter').innerText = foodCounter;

            function increaseOpacity() {
                const img = document.getElementById("task");
    
                if (opacityValue < 1) {
                    opacityValue += 0.1; // Increase opacity by 0.1 on each click
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
            food.classList.add('disappear');
            increaseOpacity();

            // Show the bubble at the fish's position
            const bubble = document.getElementById('bubble');
            bubble.style.left = `${fishRect.left + fishRect.width / 2 - bubble.offsetWidth / 2}px`;
            bubble.style.top = `${fishRect.top - bubble.offsetHeight}px`;
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
                food.style.left = `${event.clientX - food.offsetWidth / 2}px`;
                food.style.top = `${event.clientY - food.offsetHeight / 2}px`;
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

// Setup animation listeners on page load
window.onload = function() {
    setupAnimationListeners("container1");
    setupAnimationListeners("container2");
    document.getElementById("foodCounter").innerText = foodCounter;
};