#imports
from util import *
    
get_difficulty()
set_the_word()
set_the_blank()
    
game_continue = True
while game_continue:
    check_player_died()
    chech_has_won()
    game_continue = is_game_over()
    display_the_blank()
    player_guess = input("Guess a letter:\n")
    guessed_correct = find_letter_in_the_word(player_guess)
    if guessed_correct:
        reveal_letters_in_the_blank(player_guess)
    else:
        remove_player_life()
        
    
    




