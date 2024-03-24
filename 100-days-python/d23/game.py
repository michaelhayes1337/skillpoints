from turtle import Turtle, Screen
import time
from paddle import Paddle

#Setup gui
screen = Screen()
screen_width = 600
screen_height = 400
screen.setup(screen_width, screen_height)
screen.bgcolor("black")
screen.title("Pong Dong")
screen.tracer(0)

game_on = True
tick_delay = 0.1

#Setup game objects
p1 = Paddle(screen_height, -250)
p2 = Paddle(screen_height, 250)
screen.listen()

screen.onkeypress(key="w", fun=p1.start_move_up)
screen.onkeyrelease(key="w", fun=p1.stop_move_up)
screen.onkeypress(key="s", fun=p1.start_move_down)
screen.onkeyrelease(key="s", fun=p1.stop_move_down)

screen.onkeypress(key="Up", fun=p2.start_move_up)
screen.onkeyrelease(key="Up", fun=p2.stop_move_up)
screen.onkeypress(key="Down", fun=p2.start_move_down)
screen.onkeyrelease(key="Down", fun=p2.stop_move_down)

while game_on:
    time.sleep(tick_delay)
    screen.update()



















screen.exitonclick()