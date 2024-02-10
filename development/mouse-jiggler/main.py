import pyautogui
import random
import time

while True:
    time.sleep(10)
    # Generate random x and y coordinates.
    x = random.randint(910, 960)
    y = random.randint(490, 540)
    
    # Move the mouse to the generated coordinates.
    pyautogui.moveTo(x, y, duration=1)
    pyautogui.click()
    
    # Wait for a random amount of time before moving the mouse again.
    time.sleep(random.randint(1, 5))