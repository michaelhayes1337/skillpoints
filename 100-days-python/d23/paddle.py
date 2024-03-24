import turtle
from turtle import Turtle

rectangle = ((-10, -20), (10, -20), (10, 20), (-10, 20))
turtle.register_shape("rectangle", rectangle)


class Paddle(Turtle):
    def __init__(self, window_height, x_position):
        super().__init__()
        self.shape("square")
        self.penup()
        self.color("white")
        self.speed("slowest")
        self.setheading(90)
        self.y_limit = (window_height - 40) / 2
        self.setpos(x_position, 0)
        self.move_up = False
        self.move_down = False

    def start_move_up(self):
        self.move_up = True
        self.move_paddle()

    def stop_move_up(self):
        self.move_up = False
        self.move_paddle()

    def start_move_down(self):
        self.move_down = True
        self.move_paddle()

    def stop_move_down(self):
        self.move_down = False
        self.move_paddle()

    def move_paddle(self):
        x, y = self.pos()
        if self.move_up and not self.move_down and y < self.y_limit:
            self.setpos(x, y + 1)
        if self.move_down and not self.move_up and y > -self.y_limit:
            self.setpos(x, y + 1)
        turtle.ontimer(fun=self.move_paddle, t=10)
