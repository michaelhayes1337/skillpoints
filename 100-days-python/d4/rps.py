import random
options = ["Rock", "Paper", "Scissors"]
player_choice = int(input("You must be courting death, make your choice.\n0. Rock 1. Paper 2. Scissors\n"))
computer_choice = random.randint(0,2)
print(f"Challenger: {options[player_choice]}")
print(f"Master: {options[computer_choice]}")
if player_choice == computer_choice:
    print("DRAW! you got lucky this time")
elif (computer_choice == 0 and player_choice == 2) or (computer_choice == 1 and player_choice == 0) or (computer_choice == 2 and player_choice == 1):
    print("You lose! Even with a hundred years of isolated training you could never beat me !")
else:
    print("You win ? Who is your master ? What trickery have you used !")