
i = 1
target = 1
while(i<100):
  source = i
  string = " { data: { id: '%d%d',weight:%d,source:'%d',target: '%d'}},"%(source,target,1,source,target)
  print(string)
  target2 = (i+target)%100
  string = " { data: { id: '%d%d',weight:%d,source:'%d',target: '%d'}},"%(source,target2,1,source,target2)
  print(string)
  #target3 = (target+ target2)%100
  #string = " { data: { id: '%d%d',weight:%d,source:'%d',target: '%d'}},"%(source,target3,0,source,target3)
  print(string)
  target = (target2 + target) %100
  i+=1
