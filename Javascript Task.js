let opacityValue = 0.2; // Starting opacity value

            function increaseOpacity() {
                const img = document.getElementById("task");
    
                if(opacityValue < 1) {
                    opacityValue += 0.1; // Increase opacity by 0.1 on each click
                    img.style.opacity = opacityValue.toFixed(1); // Set new opacity
                }
            }

// Function to set random heights for the fishes
function randomizeTop(fish) {
    // Get viewport height
    const viewportHeight = window.innerHeight;

    // Generate a random top value (subtracting 50 for fish height margin)
    const randomTop = Math.floor(Math.random() * (viewportHeight - 50)) + "px";

    // Apply the random top value to the fish
    fish.style.top = randomTop;
}

// Function to setup listeners for all fishes in a specific container
function setupAnimationListeners(containerId) {
    const container = document.getElementById(containerId);
    const fishes = container.querySelectorAll(".fish");

    // Loop through each fish in the container
    fishes.forEach(fish => {
        // Set initial random height for each fish
        randomizeTop(fish);

        // Add event listener to update random height on animation iteration
        fish.addEventListener('animationiteration', () => randomizeTop(fish));
    });
}

// Start the movement with random heights on page load for both containers
window.onload = function() {
    setupAnimationListeners("container1");
    setupAnimationListeners("container2");
}