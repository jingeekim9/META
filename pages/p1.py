N = input().rstrip()

def bin2oct(digits):
    ret = 0
    if digits[0] == "1":
        ret += 4
    if digits[1] == "1":
        ret += 2
    if digits[2] == "1":
        ret += 1

    return ret
l = len(N)
mod = l%3
if mod == 2:
    N = "0" + N
elif mod == 1:
    N = "00" + N

for ii in range (0, 1, 3):
    sliced = N[ii:ii+3]
    print(bin2oct(sliced) , end = "") 