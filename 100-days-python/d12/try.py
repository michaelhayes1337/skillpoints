import random
LIVES = (10, 5)
player_lives = LIVES[int(input("Choose a difficult: 0. Easy 1.Hard"))]
the_number = random.randint(1, 100)
player_guesses = []
def play():
    global player_lives
    global player_guesses
    print(f"Lives: {player_lives}, Guessed: {player_guesses}")
    player_guess = int(input("Choose a number:\n"))
    player_guesses.append(player_guess)
    if player_guess == the_number:
        print("You have won!")
        return
    else:
        player_lives -= 1
        if player_lives == 0:
            print("You have lose")
            return
        if player_guess > the_number:
            print("Too high")
            play()
            return
        else:
            print("Too low")
            play()
            return
play()