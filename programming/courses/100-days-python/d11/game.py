import random
map_idx_to_face_card = {
    0: "A",
    11: "J",
    12: "Q",
    13: "K" 
}

map_card_to_value = {
    "A": 11,
    "J": 10,
    "Q": 10,
    "K": 10
}
suites = ["H", "S", "D", "C"]
def generate_card_pack(cards):
    """Generate a standard pack of cards excluding jokers"""
    
    for suite in suites:
        for idx in range(0, 14):
            if idx == 0 or idx == 11 or idx == 12 or idx == 13:
                cards.append(f"{suite}{map_idx_to_face_card[idx]}")
            else:
                cards.append(f"{suite}{idx}")

def shuffle_card_pack(pack):
    """Iterates over a list and swaps it with a random item in the list including itself"""
    for idx in range(0, len(pack)):
        random_idx = random.randint(0, len(pack) - 1)
        pack[idx], pack[random_idx] = pack[random_idx], pack[idx]
        
def draw_random_from_card_pack(pack):
    """Randomly select a card from the deck and remove the card from the deck"""
    random_card_idx = random.randint(0, len(pack) - 1)
    random_card = pack[random_card_idx]
    del pack[random_card_idx]
    return random_card
            
def draw_from_card_pack(pack):
    """Select the first card in the card pack and remove it from the deck"""
    card = pack.pop()
    return card

def get_card_value(card):
    return card[1:]

def get_card_score(card, current_score):
    card_value = get_card_value(card)
    if card_value == "A" or card_value == "J" or card_value == "Q" or card_value == "K":
        if card_value != "A":
            return map_card_to_value[card_value]
        elif current_score + map_card_to_value[card_value] <= 21:
            return map_card_to_value[card_value]
        else:
            return 1
    else:
        return int(card_value)