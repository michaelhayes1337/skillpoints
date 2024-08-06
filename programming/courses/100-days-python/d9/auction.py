gather_bids = True
bids = {}
max_bidder = ""
max_bid = 0.0

print("Welcome to the secret auction, place your bids")
while gather_bids:
    bidder_name = input("Enter an alias:\n")
    bidder_bid = float(input(f"Place your bid, {bidder_name}:\nR"))
    bids[bidder_name] = bidder_bid
    continue_gather = input("Are there any more bidders?\n [y]: Yes, [n]: No\n")
    if continue_gather == 'n':
        gather_bids = False
for bidder in bids:
    if bids[bidder] > max_bid:
        max_bid = bids[bidder]
        max_bidder = bidder

print(f"{max_bidder} has won the bid with a bid of R{max_bid}")