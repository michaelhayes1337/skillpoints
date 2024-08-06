import random
import turtle
from turtle import Turtle


class Ball(Turtle):

    def __init__(self, screen_width, screen_height, paddle_left, paddle_right):
        super().__init__()
        self.screen_width = screen_width
        self.screen_height = screen_height
        self.color("blue")
        self.shape("circle")
        self.has_started = False
        self.paddle_left = paddle_left
        self.paddle_right = paddle_right


    def get_start_direction(self):
        heading = random.randint(0, 359)
        self.setheading(heading)
        self.has_started = True

    def bounce_y(self):
        self.setheading(360 - self.heading())

    def bounce_x(self):
        self.setheading(180 - self.heading())

    def move(self):
        if not self.has_started:
            self.get_start_direction()
        x, y = self.position()
        right_y, left_y = 0, 0
        right_y = self.paddle_right.ycor()
        left_y = self.paddle_left.ycor()
        print({right_y, left_y})
        # bounce if right border and right paddle is there   |
        if x >= (self.screen_width / 2) - 60:
            if left_y - 50 <= y <= left_y + 50:
                self.bounce_x()

        if x <= -(self.screen_width / 2) + 60:
            print("should left bounce")
            if right_y - 50 <= y <= right_y + 50:
                self.bounce_x()

        if y >= (self.screen_height / 2) - 10 or y <= -(self.screen_height / 2) + 10:
            self.bounce_y()

        self.forward(5)
