#imports
import random
import os
#game constants
words_easy = ['cat', 'dog', 'sun', 'sky', 'car', 'bus', 'map', 'hat', 'bat', 'box', 'cup', 'key', 'pen', 'ice', 'mud', 'fog', 'log', 'wax', 'jam', 'jar']
words_medium = ['freedom', 'justice', 'library', 'mystery', 'journey', 'picture', 'country', 'history', 'diamond', 'balloon', 'fantasy', 'gallery', 'monster', 'victory', 'journey', 'network', 'theater', 'weather', 'musical', 'plastic']
words_hard = ['quixotic', 'obfuscate', 'nomenclature', 'xenophobia', 'philanthropy', 'reciprocity', 'unilateral', 'vernacular', 'whistleblower', 'yachtsman', 'zephyr', 'aberration', 'belligerent', 'concatenate', 'dichotomy', 'epistemology', 'furlough', 'grandiloquent', 'heterogeneous', 'iconoclast']
difficulty_options = ["Easy", "Medium", "Hard"]
#game state variables
difficulty_chosen = 0
the_word = ""
the_blank = ""
player_lives = 10
player_alive = True
player_won = False
playes_guesses = []

def clear_screen():
    # For Windows
    if os.name == 'nt':
        os.system('cls')
    # For macOS and Linux
    else:
        os.system('clear')
        
def select_random_element(array):
    if not isinstance(array, list):
        raise TypeError("Expected input to be a list.")
    if not array:
        raise ValueError("List is empty. Cannot select element from an empty list.")
    selected = random.randint(0, len(array) - 1)
    return array[selected]

def get_difficulty():
    global difficulty_chosen
    clear_screen()
    difficulty_chosen = int(input("Lets play some HANGMAN\nChoose your level: 0.Easy 1.Medium 2.Hard\n"))
    print(f"You have selected: {difficulty_chosen}.{difficulty_options[difficulty_chosen]}")

def set_the_word():
    global the_word
    if difficulty_chosen == 0:
        the_word = select_random_element(words_easy)
    elif difficulty_chosen == 1:
        the_word = select_random_element(words_medium)
    elif difficulty_chosen == 2:
        the_word = select_random_element(words_hard)
    else:
        raise IndexError("The selected difficulty does not exist")
    print(f"The word is {the_word}")

def set_the_blank():
    global the_blank
    for char in the_word:
        the_blank += "_"
    print(f"The blank is {the_blank}")

def display_the_blank():
    clear_screen()
    guesses = ", ".join(playes_guesses)
    print(f"The Word: {the_blank}")
    print(f"Already Guessed: {guesses}")
    print(f"{player_lives} lives")

def set_player_winner():
    global player_won
    player_won = True

def chech_has_won():
    has_cleared_word = True
    for char in the_blank:
        if char == "_":
            has_cleared_word = False
    if has_cleared_word:
        print(f"{{-_-}}you won ? the word was {the_word}")
        set_player_winner()

def kill_player():
    global player_alive
    print(f"[o_o] you lost. The word was {the_word}")
    player_alive = False

def remove_player_life():
    global player_lives
    player_lives -= 1

def check_player_died():
    if player_lives == 0:
        kill_player()
    return 

def find_letter_in_the_word(letter):
    playes_guesses.append(letter)
    for char in the_word:
        if char == letter:
            return True
    return False

def reveal_letters_in_the_blank(letter):
    global the_blank
    the_black_array = list(the_blank)
    for idx in range(0, len(the_word)):
        if the_word[idx] == letter:
            the_black_array[idx] = the_word[idx]
    the_blank = "".join(the_black_array)
    
def is_game_over():
    print(f"alive ? {player_alive} won ? {player_won}")
    if player_alive == False:
        return True
    elif player_won:
        return True
    else:
        return False