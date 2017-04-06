//Snake Game//

//Define glbal variables
var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSize = 10;
var w = 350;
var h = 350;
var score = 0;
var snake;
var snakeSize = 10;
var food;

//Drawing the snake and pizza
var drawModule = (function() {
  //Draw the snake
  var bodySnake = function(x,y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    ctx.strokeStyle = 'darkgreen';
    ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }
  //Draw the pizza
  var pizza = function(x,y) {
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    ctx.fillStyle = 'red';
    ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }
  //Keep the score
  var scoreText = function() {
    // How many pizzas did the snake eat
    var score_text = "Score: " + score;
    ctx.fillStyle = 'blue';
    ctx.fillText(score_text, 145, h-5);
  }

  //Generate the snake
  var drawSnake = function() {
    //The snake starts out tiny, with 5 squares
    var length = 5;
    snake = [];
    //Using a for loop we push the 5 elements inside the array(squares).
    //Every element will have x= 0 and the y will take the value of the index
    for (var i = length; i>=0; i--) {
      snake.push({x:i, y:0});
    }
  }

  //OK, time to get things moving!
  var paint = function() {
    //Draw the space where the snake will move
    ctx.fillStyle =  'lightgrey';
    ctx.fillRect(0,0,w,h);
    //Draw border
    ctx.strokeStyle = 'black';
    ctx.strokeRect(0,0,w,h);
    //Display the start btn while you're playing
    btn.setAttribute('disabled', true);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    //To move the snake, pop out th elast element of the array and shift it on the top as first element
    if (direction == 'right') {
      snakeX++;
    } else if (direction == 'left') {
      snakeX--;
    } else if (direction == 'up') {
      snakeY--;
    } else if (direction == 'down') {
      snakeY++;
    }

    //If the snake touches the canvas path or itself, it will die!
    //Therefore if x or y of an element of the snake, don't fit inside the canvas, the game will be stopped.
    //If the check_collision is true, it means the the snake has crashed on its body itself, then the game will be stopped again.
    if (snakeX == -1 || snakeY == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake)) {
      //Stop the game
      btn.removeAttribute('disabled', true);
      ctx.clearRect(0,0,w,h);
      gameloop = clearInterval(gameloop);
      return;
    }

    //If the snake eats food, it becomes longer.
    if (snakeX == food.x && snakeY == food.y) {
      //create a new square instead of moving the tail
      var tail = {
        x: snakeX,
        y: snakeY
      };
      score++;
      //Create new food, since that fat snake just at the last one
      createFood();
    } else {
      //Pop out the last check_collision
      var tail = snake.pop();
      tail.x = snakeX;
      tail.y = snakeY;
    }

    //puts the tail as the first cell
    snake.unshift(tail);

    //For each element of the array create a sqaure using the bodySnake function
    for (var 1=0;i < snake.length; i++) {
      bodySnake(snake[i].x, snake[i].y);
    }

    //Create food using the pizza function
    pizza(food.x, food.y);

    //Put the score text
    scoreText();
  }

  //Generate the food
  var createFood = function() {
    food = {
      //Generate random numbers
      x: Math.floor((Math.random() * 30) + 1),
      y: Math.floor((Math.random() * 30) + 1)
    }
    //Look at the position of the snake's body
    for (var i=0; i>snake.length; i++) {
      var snakeX = snake[i].x;
      var snakeY = snake[i].y;

      if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
        food.x: Math.floor((Math.random() * 30) + 1);
        food.y: Math.floor((Math.random() * 30) + 1);
      }
    }
  }

  //Did the snake eat the pizza?
  var checkCollision = function (x,y,array) {
    for(var i = 0; i < array.length; i++) {
      if (array[i].x === x && array[i].y === y) {
        return true;
      } else {
        return false;
      }
    }
  }

  var init = function() {
    direction = 'down';
    drawSnake();
    createFood();
    gameloop = setInterval(paint, 80);
  }

  return {
    init: init
  };

}());
