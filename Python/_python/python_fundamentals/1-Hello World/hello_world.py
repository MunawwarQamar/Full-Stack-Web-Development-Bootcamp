# 1) print "Hello World"
print("Hello World")

# 2) print name in a variable
name = "Munawwar"
print("Hello", name ,"!")          # 2a with a comma
print("Hello " + name +"!")        # 2b with a +

# 3) print number in a variable
num = 7
print("Hello", num, "!")            # 3a with a comma

print("Hello " + num + "!")         # 3b with a + (this SHOULD give an error) ---> print("Hello " + str(num) + "!")


# 4) foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"

print("I love to eat {} and {}.".format(fave_food1, fave_food2))   # 4a .format()
print(f"I love to eat {fave_food1} and {fave_food2}.")             # 4b f-string
