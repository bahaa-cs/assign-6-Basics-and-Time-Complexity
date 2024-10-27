x = int(input("Enter x: "))

max_odd_number = 1
odd_numbers=[]
while max_odd_number<=x:
    odd_numbers.append(str(max_odd_number))
    print(" ".join(odd_numbers))
    max_odd_number+=2