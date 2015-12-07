#Since Javascript is statically typed, generate a hundred nodes labelled from 0 to 100
import random
i=1

while(i<101):
    rand_num = random.choice([0,1])
    str = "{ data: { id: '%d', weight: '%d' } },"%(i,rand_num)
    print(str)
    i+=1
