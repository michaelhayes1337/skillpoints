import random
from turtle import Turtle, Screen
play = True
turtle_colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
turtle_players = []
window_height = 400
window_width = 500
screen = Screen()
screen.setup(window_width, window_height)


def turtles_to_starting_position(turtles):
    x_start = -200
    y_start = -150
    y_stepper = 50
    for idx in range(7):
        turtles[idx].penup()
        turtles[idx].goto(x_start, y_start)
        y_start += y_stepper


def race(turtles):
    race_ended = False
    crossed_finish_line = []
    while not race_ended:
        for turtle_idx in range(len(turtles)):
            random_skip = random.randint(1, 10)
            turtles[turtle_idx].forward(random_skip)
            x, y = turtles[turtle_idx].pos()
            if x >= 200:
                crossed_finish_line.append({"turtle_color": turtle_colors[turtle_idx], "distance_travelled": x})
        if len(crossed_finish_line) > 0:
            race_ended = True
    return crossed_finish_line


for turtle_color in turtle_colors:
    turtle = Turtle(shape="turtle")
    turtle.color(turtle_color)
    turtle_players.append(turtle)

turtles_to_starting_position(turtle_players)
finish_line = Turtle(visible=True, shape="turtle")
finish_line.penup()
finish_line.goto(200, -200)
finish_line.pendown()
finish_line.goto(200, 200)
has_valid_input = False
user_bet = "red"
while not has_valid_input:
    user_bet = screen.textinput(title="Make your bet:", prompt="Which turtle will win the race ? Enter a color")
    for npc in turtle_colors:
        if npc == user_bet:
            has_valid_input = True
winners = race(turtle_players)
winners_has_bet = False
for winner in winners:
    print(winner)
    if winner["turtle_color"] == user_bet:
        winners_has_bet = True
if winners_has_bet:
    print("You won the bet")
else:
    print("You lost")

screen.exitonclick()