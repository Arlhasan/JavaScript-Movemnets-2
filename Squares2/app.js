const movableDiv = document.getElementById('movable-div');

let isDragging = false;
let offsetX, offsetY;

movableDiv.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - parseInt(window.getComputedStyle(movableDiv).left);
    offsetY = e.clientY - parseInt(window.getComputedStyle(movableDiv).top);
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        movableDiv.style.left = (e.clientX - offsetX) + 'px';
        movableDiv.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
}); 