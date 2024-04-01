// Get elements
const startButton = document.getElementById('startButton');
const settingsButton = document.getElementById('settingsButton');
const settingsMenu = document.getElementById('settingsMenu');
const workTimeInput = document.getElementById('workTime');
const shortBreakTimeInput = document.getElementById('shortBreakTime');
const longBreakTimeInput = document.getElementById('longBreakTime');
const modeSelect = document.getElementById('mode');

// Event listeners
startButton.addEventListener('click', startTimer);
settingsButton.addEventListener('click', toggleSettingsMenu);
modeSelect.addEventListener('change', toggleMode);

// Function to start the timer
function startTimer() {
    // Implement timer functionality here
    alert('Timer started!');
}

// Function to toggle settings menu visibility
function toggleSettingsMenu() {
    settingsMenu.classList.toggle('hidden');
}

// Function to toggle between light and dark mode
function toggleMode() {
    const mode = modeSelect.value;
    document.body.classList.toggle('light-mode', mode === 'light');
    document.body.classList.toggle('dark-mode', mode === 'dark');
}
