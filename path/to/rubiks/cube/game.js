// Updated function to handle prime notation in onclick handlers
function handleButtonClick(action) {
    switch(action) {
        case 'U':
            // Handle Up move
            break;
        case "U'":
            // Handle Up prime move
            break;
        case 'F':
            // Handle Front move
            break;
        case "F'":
            // Handle Front prime move
            break;
        // Add cases for other buttons
    }
}

// Ensure that onclick handlers correctly escape sequences
<button onclick="handleButtonClick('U')">U</button>
<button onclick="handleButtonClick('U\'')">U'</button>
<button onclick="handleButtonClick('F')">F</button>
<button onclick="handleButtonClick('F\'')">F'</button>
