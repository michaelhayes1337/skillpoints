print("Welcome to the shitty tip calculator")
bill = float(input("What was the total bill ? \nR"))
people = int(input("How many people are you ? \n"))
tip = int(input("How much are you tipping the waiter? \n%"))

print(f"Your total per person is : R{round((bill*(1 + (tip/100)))/people, 2)}")