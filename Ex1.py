x=21

stars_n=1

for i in range(1,x+1):
    spacing_n=int((x-i))
    spacing=" "*spacing_n
    
    output="*"*stars_n
    print(spacing+output)
    stars_n=stars_n+2 if i<x else stars_n
    
for i in range(x,1,-1):
    stars_n-=2
    
    spacing_n=int((x-i+1))
    spacing=" "*spacing_n
    
    output="*"*stars_n
    print(spacing+output)
    

