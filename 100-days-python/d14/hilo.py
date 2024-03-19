from game_data import *
import random

def choose_random(previous_random_idx = -1):
    if previous_random_idx == -1:
        random_idx = random.randint(0, len(data)-1)
    else:
        found_unique_random = False
        while not found_unique_random:
            random_idx = random.randint(0, len(data)-1)
            if random_idx != previous_random_idx:
                found_unique_random = True
    return (random_idx, data[random_idx])

def display_details(identifier, choice):
    print(f"{identifier}. {choice['name']} is a {choice['description']} from {choice['country']}")

def play():
    choice_a_idx, choice_a = choose_random()
    choice_b_idx, choice_b = choose_random(choice_a_idx)
    display_details("A",choice_a)
    print("VS")
    display_details("B",choice_b)
    choice = input("Who has more followers ? [A] or [B]")
    if choice == "A":
        if choice_a["follower_count"] >= choice_b["follower_count"]:
            print("Correct!")
            play()
            return
        else:
            print("Incorrect")
            return
    else:
        if choice_b["follower_count"] >= choice_a["follower_count"]:
            print("Correct!")
            play()
            return
        else:
            print("Incorrect")
            return

play()