import string

alphabet_list = list(string.ascii_lowercase)

def get_unshifted_index(current_index, max_index, shift):
    if current_index - shift >= 0:
        return current_index - shift
    else:
        return max_index + current_index - shift

def get_shifted_index(current_index, max_index, shift):
    if current_index + shift <= max_index:
        return current_index + shift
    else:
        return current_index + shift - max_index

def get_shifted_value(letter, shift, forward = True):
    alphabet_index = -1
    for index, item in enumerate(alphabet_list):
        if item == letter:
            alphabet_index = index
    if alphabet_index == -1:
        return letter
    else:
        shifted_index = get_shifted_index(alphabet_index, len(alphabet_list) - 1, shift) if forward else get_unshifted_index(alphabet_index, len(alphabet_list) - 1, shift)
        return alphabet_list[shifted_index]

def encrypt(secret, shift, forward = True):
    output = ""
    for char in secret:
        output += get_shifted_value(char, shift, forward)
    return output

print("Welcome to the worlds best encryption service ;)")
value_to_encrypt = input("Enter your message\n").lower()
encrypt_shift = int(input("Enter the shift amount:\n"))
encrypted_value = encrypt(value_to_encrypt, encrypt_shift)
print(encrypted_value)
print(encrypt(encrypted_value, encrypt_shift, False))
            
        