let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
    colors.push(color);
    return colors;
}

function removeColor(colors) {
    color = colors.pop();
    return colors;
}

let newColors = removeColor(colors);
console.log(newColors);
addColor(colors, color);
console.log(newColors);