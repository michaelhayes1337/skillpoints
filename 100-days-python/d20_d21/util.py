def has_collided(coordinates):
    """
    checks if the head has collided with any other segment
    """
    has_collided = False
    head_x = coordinates[0][0]
    head_y = coordinates[0][1]
    for idx in range(1, len(coordinates) - 1):
        if head_x == coordinates[idx][0] and head_y == coordinates[idx][1]:
            has_collided = True
    return has_collided

def has_eaten(coordinates_head, coordinates_apple):
    return coordinates_head[0] == coordinates_apple[0] and coordinates_head[1] == coordinates_apple[1]