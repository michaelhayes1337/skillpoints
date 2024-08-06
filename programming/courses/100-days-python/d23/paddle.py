import turtle
from turtle import Turtle


class Paddle(Turtle):
    def __init__(self, window_height, x_position):
        super().__init__()
        self.shape("square")
        self.shapesize(stretch_wid=1, stretch_len=5)
        self.color("white")
        self.speed("slowest")
        self.setheading(90)
        self.penup()
        self.setpos(x_position, 0)
        self.y_limit = (window_height - 40) / 2

    def move_up(self):
        self.move_paddle()

    def move_down(self):
        self.move_paddle(False)

    def move_paddle(self, up=True):
        x, y = self.pos()
        if up and y < self.y_limit - 50:
            self.setpos(x, y + 25)
        if not up and y > -self.y_limit + 50:
            self.setpos(x, y - 25)
