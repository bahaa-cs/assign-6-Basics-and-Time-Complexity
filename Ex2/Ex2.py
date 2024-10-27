x = int(input("Enter x: "))

odd_number = 1
odd_numbers=[]

for i in range(0,x):
    odd_numbers.append(str(odd_number))
    print(" ".join(odd_numbers))
    odd_number+=2