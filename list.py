#[List comprehension]

numbers = [1,2,3,4,5,6,7,8,9]

d_numbers = [num*2 for num in numbers if num%2 == 0]

print(d_numbers)
