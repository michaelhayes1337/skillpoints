
import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Password Generator")
n_letters = int(input("Letters:"))
n_symbols = int(input("Symbols:"))
n_numbers = int(input("Numbers:"))
print(f"n_letters: {n_letters}\n_symbols: {n_symbols}\n_numbers: {n_numbers}")
password = ""
placed_letters = 0
placed_symbols = 0
placed_numbers = 0

for i in range(0, n_letters + n_symbols + n_numbers):
    char_types = []
    if placed_letters < n_letters:
        char_types.append(1)
    if placed_numbers < n_numbers:
        char_types.append(2)
    if placed_symbols < n_symbols:
        char_types.append(3)
        
    char_type_choice = random.randint(1, len(char_types) - 1) if len(char_types) > 1 else 0
    char_type = char_types[char_type_choice]
    
    #letters
    if char_type == 1:
        choice = random.randint(0,len(letters)-1)
        password += letters[choice]
        placed_letters += 1
    #numbers
    if char_type == 2:
        choice = random.randint(0,len(numbers)-1)
        password += numbers[choice]
        placed_numbers += 1
    #symbols
    if char_type == 3:
        choice = random.randint(0,len(symbols)-1)
        password += symbols[choice]
        placed_symbols += 1

print(password)
