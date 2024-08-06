class User:
    def __init__(self, name, id):
        self.name = name
        self.id = id
        self.followers = 0
        self.following = 0

    def follow(self, user):
        self.following += 1
        user.followers += 1


user_1 = User("Michael", 1)
user_2 = User("Bella", 2)

user_1.follow(user_2)

print(f"{user_1.name} has {user_1.followers} follower and is following {user_1.following} people")
print(f"{user_2.name} has {user_2.followers} follower and is following {user_2.following} people")
