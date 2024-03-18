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
player_score = 0
has_won = False
has_lost = False


generate_card_pack(card_pack)
for _ in range(0, random.randint(3,5)):
    shuffle_card_pack(card_pack)

  
while not has_won and not has_lost:
    


