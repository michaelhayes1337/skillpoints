import turtle

t1 = turtle.Turtle()
screen = turtle.Screen()


def move_forward():
    print("forward")
    t1.forward(20)


def move_back():
    t1.forward(-20)


def turn_left():
    t1.left(15)


def turn_right():
    t1.right(15)


def clear():
    t1.home()
    screen.clear()


# Event listeners
screen.listen()
screen.onkey(key="w", fun=move_forward)
screen.onkey(key="s", fun=move_back)
screen.onkey(key="a", fun=turn_left)
screen.onkey(key="d", fun=turn_right)
screen.onkey(key="space", fun=clear)
screen.exitonclick()
