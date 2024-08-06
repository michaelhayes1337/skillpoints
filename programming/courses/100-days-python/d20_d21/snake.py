import random
from turtle import Turtle, Screen
STARTING_POSITIONS = [[0, 0], [-20, 0], [-40, 0]]


def move_up(coordinate):
    return [coordinate[0], coordinate[1]+20]


def move_down(coordinate):
    return [coordinate[0], coordinate[1]-20]


def move_left(coordinate):
    return [coordinate[0]-20, coordinate[1]]


def move_right(coordinate):
    return [coordinate[0]+20, coordinate[1]]


def create_section(x, y):
    section = Turtle(shape="square")
    section.penup()
    section.speed("fastest")
    # color = random.choice(["red", "green", "blue", "white", "yellow"])
    section.color("white")
    section.setpos(x, y)
    return section


class Snake:
    def __init__(self):
        self.coordinates = STARTING_POSITIONS.copy()
        self.sections = []
        self.move_map = {
            "w": move_up,
            "s": move_down,
            "a": move_left,
            "d": move_right
        }
        self.render()

    def render(self):
        if len(self.sections) == 0:
            for coordinate in self.coordinates:
                section = create_section(coordinate[0], coordinate[1])
                self.sections.append(section)
        else:
            for idx, section in enumerate(self.sections):
                section.setpos(self.coordinates[idx][0], self.coordinates[idx][1])

    def shift_left(self):
        for idx in range(len(self.coordinates)-1, 0, -1):
            self.coordinates[idx] = self.coordinates[idx-1]

    def move(self, direction = 'd'):
        self.shift_left()
        self.coordinates[0] = self.move_map[direction](self.coordinates[0])
        self.render()

    def get_positions(self):
        return self.coordinates

    def add_segment(self, x, y):
        self.coordinates.insert(0,[x, y])
        section = create_section(x, y)
        self.sections.insert(0, section)
