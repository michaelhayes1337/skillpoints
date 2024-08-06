from data import question_data
import random
import os


def clear_screen():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')


class Question:
    def __init__(self, text, answer):
        self.text = text
        self.answer = answer

    def display(self):
        print(f"{self.text}")

    def ask(self):
        has_valid_input = False
        user_answer = ''
        while not has_valid_input:
            user_answer = input(f"Question:\n{self.text}\nIs hits (T) True or (F) False\n").lower()
            if user_answer == 't' or user_answer == 'f':
                has_valid_input = True
            else:
                print("bad input try again")
        user_answer_as_bool = True if user_answer == 't' else False
        return user_answer_as_bool == self.answer

class Quiz:
    def __init__(self, questions):
        self.questions = questions
        self.length = len(questions)
        self.has_lost = False
        self.has_won = False
        self.correct = 0

    def get_random_question(self):
        if len(self.questions) == 0:
            return None
        if len(self.questions) == 1:
            return self.questions.pop(0)

        random_idx = random.randint(0, len(self.questions) - 1)
        return self.questions.pop(random_idx)

    def play(self):
        while not self.has_lost and not self.has_won:
            print(f"Questions remaining {len(self.questions)}")
            current_question = self.get_random_question()
            if current_question:
                #clear_screen()
                print(f"answered: {self.correct}/{self.length}")
                answered_correctly = current_question.ask()
                if answered_correctly:
                    self.correct += 1
                else:
                    print("You have lost.")
                    self.has_lost = True
            else:
                print("You have won")
                self.has_won = True


questions = []
for question in question_data:
    text = question["text"]
    answer = eval(question["answer"])
    questions.append(Question(text, answer))

quiz = Quiz(questions)

quiz.play()
