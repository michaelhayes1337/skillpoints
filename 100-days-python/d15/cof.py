from data import *
machine_on = True
cash_float = 300
cash_register = cash_float


def can_dispense_coffee(item):
    can_dispense = True
    no_stock = []
    for ingredient in item["ingredients"]:
        if item["ingredients"][ingredient] > resources[ingredient]:
            no_stock.append(ingredient)
            can_dispense = False
    return can_dispense, ", ".join(no_stock)


def get_menu_item(order):
    for item in MENU:
        if item[0] == order:
            return MENU[item]
    return None


def report():
    print(f"{resources} Cash: {cash_register}")


def get_user_order():
    has_valid_input = False
    item = None
    while not has_valid_input:
        user_res = input("What would you like to order ? (E) Espresso, (L) Latte, (C) Cappuccino\n").lower()
        if user_res == 'e' or user_res == 'l' or user_res == 'c' or 'report':
            if user_res == 'report':
                report()
            else:
                item = get_menu_item(user_res)
                if item:
                    has_valid_input = True
                else:
                    print("We serve that, but only for VIPs")
        else:
            print("We don't serve that you disgusting dog !")
    return item


def shut_down_machine(message):
    if message:
        print(message)
    global machine_on
    machine_on = False


def get_coins_formatted():
    coin_strings = []
    for coin in coins:
        coin_strings.append(f"({coin[0]}) {coin}")
    return " ".join(coin_strings)


def get_coin_value(coin_identifier):
    value = 0
    for coin in coins:
        if coin[0] == coin_identifier:
            value = coins[coin]
    return value


def get_coin():
    has_valid_input = False
    value = 0
    while not has_valid_input:
        coins_formatted = get_coins_formatted()
        user_res = input(f"Add a coin: {coins_formatted}\n").lower()
        if user_res == 'q' or user_res == 'd' or user_res == 'n' or user_res == 'p':
            value = get_coin_value(user_res)
            if value:
                has_valid_input = True
            else:
                print("We don't accept that currency !")
        else:
            print("I can see that coin is fake, you scammer !")
    return value


def get_payment(item):
    price = item["cost"]
    paid_amount = 0.0
    while paid_amount < price:
        print(f"Price: ${price}")
        print(f"Total paid: {paid_amount}")
        paid_amount += get_coin()
    if paid_amount > price:
        return paid_amount - price
    else:
        return 0


def dispense(item):
    global cash_register
    for ingredient in item["ingredients"]:
        resources[ingredient] -= item["ingredients"][ingredient]
    cash_register += item["cost"]
    print(f"Please enjoy your {item['name']}")


while machine_on:
    menu_item = get_user_order()
    if not menu_item:
        shut_down_machine("Fatal Error: Could not find menu item")
    can_continue, out_of_stock = can_dispense_coffee(menu_item)
    if can_continue:
        amount_change = get_payment(menu_item)
        if amount_change > 0:
            print(f"Here is you change: ${round(amount_change,2)}")
        dispense(menu_item)
    else:
        print(f"Unfortunately there is not enough {out_of_stock}.")
