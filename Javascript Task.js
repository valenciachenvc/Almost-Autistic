let opacityValue = 0.2; // Starting opacity value

            function increaseOpacity() {
                const img = document.getElementById("task");
    
                if(opacityValue < 1) {
                    opacityValue += 0.1; // Increase opacity by 0.1 on each click
                    img.style.opacity = opacityValue.toFixed(1); // Set new opacity
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
    const food = document.createElement('div');
    food.classList.add('foot');
    document.body.appendChild(food);

    // Make the new item food
    makefood(food);
}

// Setup animation listeners on page load
window.onload = function() {
    setupAnimationListeners("container1");
    setupAnimationListeners("container2");
};