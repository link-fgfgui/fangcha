var isMouseDown, initX, initY, height = document.getElementById('draggable').offsetHeight, width = document.getElementById('draggable').offsetWidth;

document.getElementById('draggable').addEventListener('mousedown', function (e) {
    isMouseDown = true;
    document.body.classList.add('no-select');
    initX = e.offsetX;
    initY = e.offsetY;
})

document.addEventListener('mousemove', function (e) {
    if (isMouseDown) {
        var cx = e.clientX - initX,
            cy = e.clientY - initY;
        if (cx < 0) {
            cx = 0;
        }
        if (cy < 0) {
            cy = 0;
        }
        if (window.innerWidth - e.clientX + initX < width) {
            cx = window.innerWidth - width;
        }
        if (e.clientY > window.innerHeight - height + initY) {
            cy = window.innerHeight - height;
        }
        document.getElementById('draggable').style.left = cx + 'px';
        document.getElementById('draggable').style.top = cy + 'px';
    }
})

document.getElementById('draggable').addEventListener('mouseup', function () {
    isMouseDown = false;
    document.body.classList.remove('no-select');
})