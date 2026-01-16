def countdown(num):
    result = []
    for i in range(num, -1, -1):
        result.append(i)
    return result
countdown(5)
# [5, 4, 3, 2, 1, 0]

def print_and_return(lst):
    print(lst[0])
    return lst[1]
print_and_return([1, 2])
# Expected output: 1
# Returns: 2

def first_plus_length(lst):
    return lst[0] + len(lst)
first_plus_length([1, 2, 3, 4, 5])
# Returns: 6

def values_greater_than_second(lst):
    if len(lst) < 2:
        return False

    second = lst[1]
    new_list = []

    for x in lst:
        if x > second:
            new_list.append(x)

    print(len(new_list))
    return new_list
values_greater_than_second([5, 2, 3, 2, 1, 4])


def length_and_value(size, value):
    result = []
    for _ in range(size):
        result.append(value)
    return result
length_and_value(4, 7)
