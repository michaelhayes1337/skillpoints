print("Welcome to Treasure Island Cave, brother")
print('''
      \                           /
 \                         /
  \                       /
   ]                     [    ,'|
   ]                     [   /  |
   ]___               ___[ ,'   |
   ]  ]\             /[  [ |:   |
   ]  ] \           / [  [ |:   |
   ]  ]  ]         [  [  [ |:   |
   ]  ]  ]__     __[  [  [ |:   |
   ]  ]  ] ]\ _ /[ [  [  [ |:   |
   ]  ]  ] ] (#) [ [  [  [ :===='
   ]  ]  ]_].nHn.[_[  [  [
   ]  ]  ]  HHHHH. [  [  [
   ]  ] /   `HH("N  \ [  [
   ]__]/     HHH  "  \[__[
   ]         NNN         [
   ]         N/"         [
   ]         N H         [
  /          N            \
 /           q,            \
/                           \
      ''')
cave = input("You have to choices, lefr or right, keep in mind the wrong answer might end your journey.\nLeft(L) or Right(R)")
if cave == "L":
    print("YOU HAVE FALLEN INTO A TRAP, YOU HAVE DIED")
if cave == "R":
    swim = input("You see a large river, its highwater so the water will subside soo, but you don't know what's behind you.\nSwim(S) or Wait(W)")
    if swim == "S":
        print("YOU HAVE DROWNED, YOU HAVE DIED")
    if swim == "W":
        door = input("You made it accross the river, you see three doors, pick one.\n1, 2, 3")
        if door == "2":
            print("You have survived")
        else:
            print("YOU HAVE BEEN DEVOURED BY THE DARK ONE.")