#packages
import random
#libs
from game import *
#game constants
card_pack = []
card_value = {}
bust_limit = 21
#game state
computer_score = 0
computer_cards = []
player_score = 0
player_cards = []
has_won = False
has_lost = False


generate_card_pack(card_pack)
for _ in range(0, random.randint(3,5)):
    shuffle_card_pack(card_pack)

#
player_card_1 = draw_from_card_pack(card_pack)
player_cards.append(player_card_1)
player_score += get_card_score(player_card_1, player_score)

computer_card_1 = draw_from_card_pack(card_pack)
computer_cards.append(computer_card_1)
computer_score += get_card_score(computer_card_1, computer_score)

player_card_2 = draw_from_card_pack(card_pack)
player_cards.append(player_card_2)
player_score += get_card_score(player_card_2, player_score)
 
def play_game():
    global player_score
    global player_cards
    global computer_score
    global computer_cards
    print(f"Your cards: {player_cards}, current score: {player_score}")
    print(f"Computer cards: {computer_cards}, current score: {computer_score}")
    hit_me = input("Type 'y' to get another card, type 'n' to pass:\n")
    if hit_me == 'y':
        player_card = draw_from_card_pack(card_pack)
        player_cards.append(player_card)
        player_score += get_card_score(player_card, player_score)
        if player_score > 21:
            print("BUST! You have lost")
            return
        else:
            play_game()
            return
    else:
        while computer_score < 17:
            computer_card = draw_from_card_pack(card_pack)
            computer_cards.append(computer_card)
            computer_score += get_card_score(computer_card, computer_score)
    print(f"Your final hand: {player_cards}, score: {player_score}")
    print(f"Computer Final Hand: {computer_cards}, score: {computer_score}")
    if player_score > computer_score:
        print("21 ! You have won")
    elif player_score == computer_score:
        print("Alas its a draw")
    else:
        print("You have lost")
    return

play_game()