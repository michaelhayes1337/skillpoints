import colorgram as cg
import random as rnd
import turtle

turtle.colormode(255)


class PaletteColorGenerator:
    def __init__(self, palette_source, palette_size):
        self.colors = []
        cg_colors = cg.extract(palette_source, palette_size)
        for color in cg_colors:
            color_formatted = (color.rgb.r, color.rgb.g, color.rgb.b)
            self.colors.append(color_formatted)

    def get_random(self):
        random_idx = rnd.randint(0, len(self.colors) - 1)
        return self.colors[random_idx]


color_generator = PaletteColorGenerator("image.jpg", 20)

class TemporaryArtGenerator:
    def __init__(self, turtle, palette, width, height):
        self.turtle = turtle
        self.palette = palette
        self.width = width
        self.height = height
        self.circle_radius = 20
        self.circle_gap = 80

    def move_to(self, x, y):
        #print(f"Moving to: {x}, {y}")
        self.turtle.penup()
        self.turtle.goto(x, y)
        self.turtle.pendown()

    def display_position(self):
        x, y = self.turtle.pos()
        print(f"At {x}, {y}")

    def draw_shape(self, sides, angle, size):
        for side in range(sides):
            self.turtle.forward(size)
            self.turtle.right(angle)

    def get_increment(self):
        return self.circle_gap + (self.circle_radius * 2)
    def hirst(self):
        start_x = -self.width / 2
        start_y = self.height / 2
        self.move_to(start_x, start_y)
        self.display_position()
        rows = int(self.height / self.get_increment())
        cols = int(self.width / self.get_increment())
        print(f"rows: {rows}, cols {cols}")
        for i in range(rows + 1):
            for j in range(cols + 1):
                random_color_tuple = self.palette.get_random()
                self.turtle.begin_fill()
                self.turtle.color(random_color_tuple)
                self.turtle.circle(self.circle_radius)
                self.turtle.end_fill()
                curr_x, curr_y = self.turtle.pos()
                self.move_to(curr_x + self.get_increment(), curr_y)
            curr_x, curr_y = self.turtle.pos()
            self.move_to(start_x, curr_y - self.get_increment())


t1 = turtle.Turtle()
t1.speed("fastest")
palette = PaletteColorGenerator("image.jpg", 20)

art = TemporaryArtGenerator(t1, palette, 500, 500)
art.hirst()

screen = turtle.Screen()
screen.exitonclick()