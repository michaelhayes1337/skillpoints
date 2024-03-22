import random
from turtle import Turtle, Screen, colormode


def draw_shape(turtle, sides, angle, size ):
    for side in range(sides):
        turtle.forward(size)
        turtle.right(angle)


def draw_dashed_line(turtle, dash_count, dash_size, gap_size):
    for dash in range(dash_count):
        turtle.forward(dash_size)
        turtle.penup()
        turtle.forward(gap_size)
        turtle.pendown()


def random_color(turtle):
    r, g, b = random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)
    turtle.color((r, g, b))


def random_walk(turtle, steps, step_size):
    turtle.pensize(2)
    for step in range(0, steps + 1):
        random_color(turtle)
        angle = 90 * random.randint(0, 3)
        turtle.right(angle)
        turtle.forward(step_size)


def spiral_graph(turtle, amount, radius):
    angle_stepper = 360 / amount
    for circle_idx in range(amount):
        random_color(turtle)
        turtle.circle(radius)
        turtle.right(angle_stepper)


# create turtle
t1 = Turtle()
colormode(255)
t1.speed(200)
# for shape in range(3, 101):
#     angle = 360/shape
#     random_color(t1)
#     draw_shape(t1, shape, angle, 20)
# random_walk(t1, 1600, 16)
spiral_graph(t1, 255, 225)
# setup screen
display = Screen()
display.exitonclick()
display.title("Welcome to the turtle art")




