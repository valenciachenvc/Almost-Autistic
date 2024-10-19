        // Function to spawn trash when clicked (instant spawn)
        function spawnTrashOnClick() {
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

            // Set random positions for the trash
            trash.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
            trash.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;

            // Make trash disappear on click and immediately spawn a new one
            trash.addEventListener('click', () => {
                trash.classList.add('disappear');
                spawnTrashOnClick();
            });
        }

        function spawnTrashOnInterval() {
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
                    trash.style.backgroundSize = contain;
                    break;
                case 3:
                    trash.style.backgroundImage = "url('trash3.png')";
                    break;
                case 4:
                    trash.style.backgroundImage = "url('trash4.png')";
                    break;
            }
            document.body.appendChild(trash);

            // Set random positions for the trash
            trash.style.left = `${Math.floor(Math.random() * (window.innerWidth - 50))}px`;
            trash.style.top = `${Math.floor(Math.random() * (window.innerHeight - 50))}px`;

            // Make trash disappear on click and immediately spawn a new one
            trash.addEventListener('click', () => {
                trash.classList.add('disappear');
            });
        }

       
        setInterval(() => {
            spawnTrashOnInterval();
        }, 3000);