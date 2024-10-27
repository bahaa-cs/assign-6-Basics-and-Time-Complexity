x=4

stars_n=1

for i in range(1,x+1):
    spacing_n=int((x-i))
    spacing=" "*spacing_n
    output="*"*stars_n
    print(spacing+output)
    stars_n+=2

starts_n=x
for i in range(x,1,-1):
    spacing_n=int((x-i))
    spacing=" "*spacing_n
    
    output="*"*stars_n
    print(spacing+output)
    stars_n-=2
    