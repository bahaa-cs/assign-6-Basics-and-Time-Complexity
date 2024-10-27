x=11
stars_n=1

for i in range(1,x+1):
    j=int((x-i))
    spacing=" "*j
    output="*"*stars_n
    print(spacing+output)
    stars_n+=2
    