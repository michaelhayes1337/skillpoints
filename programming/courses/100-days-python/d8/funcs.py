
def greet_with(*args, greeting="Hello"):
    for arg in args:
        print(f"{greeting} {arg}")
        
greet_with("Michael", "bella", greeting="Test")