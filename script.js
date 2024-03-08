// Açma/kapatma düğmesini al
const colorSwitch = document.getElementById('colorSwitch');

// Sayfa yüklendiğinde temasını kontrol et
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    colorSwitch.checked = true;
    updateGenerateButton('dark');
} else {
    document.body.classList.add('light-theme');
    updateGenerateButton('light');
}

// Düğmeye tıklandığında temasını değiştir
colorSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        updateGenerateButton('dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
        updateGenerateButton('light');
    }
});

// Function to update Generate Palette button text color
function updateGenerateButton(theme) {
    const generateButton = document.getElementById('generatePalette');
    if (theme === 'dark') {
        generateButton.style.color = 'white';
    } else {
        generateButton.style.color = 'black';
    }
}

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate and display a color palette
function generateColorPalette() {
    const paletteContainer = document.getElementById('palette');
    paletteContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;

        const hexCode = document.createElement('p');
        hexCode.classList.add('hex-code');
        hexCode.textContent = color;

        const colorName = document.createElement('p');
        colorName.classList.add('color-name');
        colorName.textContent = '';

        colorBox.appendChild(hexCode);
        colorBox.appendChild(colorName);

        paletteContainer.appendChild(colorBox);
    }
}

// Add click event listener to the "Generate Palette" button
const generateButton = document.getElementById('generatePalette');
generateButton.addEventListener('click', generateColorPalette);

// Generate an initial color palette
generateColorPalette();
