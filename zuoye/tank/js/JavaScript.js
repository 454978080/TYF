document.addEventListener('contextmenu', event => event.preventDefault()); // 禁用右键  
  
const tank = document.getElementById('tank');  
const gameArea = document.getElementById('gameArea');  
const tankSpeed = 5; // 坦克移动速度  
  
let tankX = tank.offsetLeft;  
let tankY = tank.offsetTop;  
  
document.addEventListener('keydown', function(event) {  
    let newX = tankX;  
    let newY = tankY;  
  
    switch (event.key) {  
        case 'w':  
        case 'ArrowUp':  
            newY -= tankSpeed;  
            break;  
        case 's':  
        case 'ArrowDown':  
            newY += tankSpeed;  
            break;  
        case 'a':  
        case 'ArrowLeft':  
            newX -= tankSpeed;  
            break;  
        case 'd':  
        case 'ArrowRight':  
            newX += tankSpeed;  
            break;  
    }  
  
    // 检查坦克是否超出游戏区域  
    if (newY < 0) newY = 0;  
    if (newY > gameArea.offsetHeight - tank.offsetHeight) newY = gameArea.offsetHeight - tank.offsetHeight;  
    if (newX < 0) newX = 0;  
    if (newX > gameArea.offsetWidth - tank.offsetWidth) newX = gameArea.offsetWidth - tank.offsetWidth;  
  
    tank.style.top = `${newY}px`;  
    tank.style.left = `${newX}px`;  
  
    tankX = newX;  
    tankY = newY;  
});