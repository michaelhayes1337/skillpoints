from turtle import Turtle, Screen
import time
from paddle import Paddle
from ball import Ball
#Setup gui
screen = Screen()
screen_width = 600
screen_height = 400
screen.setup(screen_width, screen_height)
screen.bgcolor("black")
screen.title("Pong Dong")
screen.tracer(0)

game_on = True
tick_delay = 0.025

#Setup game objects
p1 = Paddle(screen_height, -250)
p2 = Paddle(screen_height, 250)
ball = Ball(screen_width, screen_height, p1, p2)
screen.listen()

screen.onkey(key="w", fun=p1.move_up)
screen.onkey(key="s", fun=p1.move_down)

screen.onkey(key="Up", fun=p2.move_up)
screen.onkey(key="Down", fun=p2.move_down)

while game_on:
    time.sleep(tick_delay)
    ball.move()
    screen.update()



















screen.exitonclick()