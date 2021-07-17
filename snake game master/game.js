import {update as updateSnake, draw as drawSnake, snake_speed,
getSnakeHead, snakeIntersect} from './snake.js';
import {update as updateFood, draw as drawFood } from './food.js';
import {outSideGrid} from './grid.js';

export var myScore = 0;
let lastRenderTime=0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');
var Score_span = document.getElementById('score');


function main(currentTime){
    if (gameOver)
    {
       return alert("Game over");
    }


    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime)/1000;
    if (secondSinceLastRender < 1/snake_speed) return;
    lastRenderTime = currentTime;
    
    update();
    draw();
}
window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDead();
}
function draw(){
    gameBoard.innerHTML="";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDead(){
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersect()

}

export function updateScore(){
    myScore++
    Score_span.innerHTML = myScore;
    console.log(myScore);
}