import time
from turtle import Turtle, Screen
import random
from snake import Snake
from food import Apple
from control import Controls
from util import has_collided, has_eaten
#Setup gui
screen = Screen()
screen.setup(600, 600)
screen.bgcolor("black")
screen.title("Snake")
screen.tracer(0)

#Setup game constants
game_on = True
move_direction = "d"
delay = 0.5
score = 0
#Setup game objects
control = Controls()
snake = Snake()
apple = Apple()

#Setup controls
def key_up():
    control.set_direction("w")


def key_down():
    control.set_direction("s")


def key_left():
    control.set_direction("a")


def key_right():
    control.set_direction("d")


screen.listen()
screen.onkey(key="w", fun=key_up)
screen.onkey(key="s", fun=key_down)
screen.onkey(key="a", fun=key_left)
screen.onkey(key="d", fun=key_right)

while game_on:
    screen.update()
    snake.move(control.get_direction())
    snake_positions = snake.get_positions()
    apple_position = apple.get_position()
    collided = has_collided(snake_positions)
    if collided:
        game_on = False
        print(f"Final score: {score}")
    consumed_apple = has_eaten(snake_positions[0], apple_position)
    if consumed_apple:
        print("yum")
        snake.add_segment(apple_position[0], apple_position[1])
        apple.respawn()
        delay -= 0.001
        score += 1
    time.sleep(delay)




















screen.exitonclick()