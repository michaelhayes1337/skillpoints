from menu import Menu, MenuItem
from coffee_maker import CoffeeMaker
from money_machine import MoneyMachine

menu_obj = Menu()
coffee_maker_obj = CoffeeMaker()
money_machine_obj = MoneyMachine()
machine_on = True

while machine_on:
    user_order = input(f"{menu_obj.get_items()}")
    order = menu_obj.find_drink(user_order)
    if order:
        can_dispense = coffee_maker_obj.is_resource_sufficient(order)
        if can_dispense:
            money_received = money_machine_obj.process_coins()
            paid = money_machine_obj.make_payment(order.cost)
            if paid:
                coffee_maker_obj.make_coffee(order)
    else:
        money_machine_obj.report()
        coffee_maker_obj.report()