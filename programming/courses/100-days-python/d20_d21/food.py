from turtle import Turtle, Screen
import random


def get_random_coordinates():
    rnd_x = random.randint(-10, 10) * 20
    rnd_y = random.randint(-10, 10) * 20
    return rnd_x, rnd_y


class Apple:
    def __init__(self):
        x, y = get_random_coordinates()
        self.apple = Turtle(shape="circle")
        self.apple.penup()
        self.apple.color("red")
        self.apple.penup()
        self.apple.setpos(x, y)

    def get_position(self):
        return self.apple.pos()

    def respawn(self):
        x, y = get_random_coordinates()
        self.apple.setpos(x, y)
